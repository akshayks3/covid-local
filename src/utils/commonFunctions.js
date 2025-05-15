import {
  INDIA_ISO_SUFFIX,
  ISO_DATE_REGEX,
  LOCALE_SHORTHANDS,
  STATISTIC_CONFIGS,
  TESTED_EXPIRING_DAYS,
} from '../constants';

import {
  differenceInDays,
  format,
  formatDistance,
  formatISO,
  subDays,
} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';
import i18n from 'i18next';

let locale = null;
const numberFormatter = new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 1,
});

const getLocale = () => {
  import('date-fns/locale/').then((localePackage) => {
    locale =
      localePackage[
        LOCALE_SHORTHANDS[i18n.language || window.localStorage.i18nextLng]
      ];
  });
};

export const isDevelopmentOrTest = () => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
    return true;
  return false;
};

export const getIndiaDate = () => {
  return utcToZonedTime(new Date(), 'Asia/Kolkata');
};

export const getIndiaDateISO = () => {
  return formatISO(getIndiaDate(), {representation: 'date'});
};

export const getIndiaDateYesterday = () => {
  return subDays(getIndiaDate(), 1);
};

export const getIndiaDateYesterdayISO = () => {
  return formatISO(getIndiaDateYesterday(), {representation: 'date'});
};

export const formatLastUpdated = (unformattedDate) => {
  getLocale();
  return formatDistance(new Date(unformattedDate), new Date(), {
    locale: locale,
  });
};

export const parseIndiaDate = (unformattedDate) => {
  if (!unformattedDate) {
    return getIndiaDate();
  }
  if (
    typeof unformattedDate === 'string' &&
    unformattedDate.match(ISO_DATE_REGEX)
  ) {
    unformattedDate += INDIA_ISO_SUFFIX;
  }
  return utcToZonedTime(new Date(unformattedDate), 'Asia/Kolkata');
};

export const formatDate = (unformattedDate, formatString) => {
  if (!unformattedDate) return '';
  if (
    typeof unformattedDate === 'string' &&
    unformattedDate.match(ISO_DATE_REGEX)
  )
    unformattedDate += INDIA_ISO_SUFFIX;
  const date = utcToZonedTime(new Date(unformattedDate), 'Asia/Kolkata');
  return format(date, formatString, {
    locale: locale,
  });
};

export const formatDateObjIndia = (dateObj) => {
  return format(dateObj, "yyyy-MM-dd'T'HH:mm:ss+05:30", {
    locale: locale,
  });
};

export const abbreviateNumber = (number) => {
  const numberCleaned = Math.round(Math.abs(number));
  if (numberCleaned < 1e3) return numberFormatter.format(Math.floor(number));
  else if (numberCleaned >= 1e3 && numberCleaned < 1e5)
    return numberFormatter.format(number / 1e3) + 'K';
  else if (numberCleaned >= 1e5 && numberCleaned < 1e7)
    return numberFormatter.format(number / 1e5) + 'L';
  else if (numberCleaned >= 1e7 && numberCleaned < 1e10)
    return numberFormatter.format(number / 1e7) + 'Cr';
  else if (numberCleaned >= 1e10 && numberCleaned < 1e14)
    return numberFormatter.format(number / 1e10) + 'K Cr';
  else if (numberCleaned >= 1e14)
    return numberFormatter.format(number / 1e14) + 'L Cr';
};

export const formatNumber = (value, option = '', statistic) => {
  if (
    isNaN(value) ||
    (statistic && STATISTIC_CONFIGS[statistic]?.hideZero && value === 0)
  ) {
    return '-';
  } else if (option === 'long') {
    return numberFormatter.format(
      Math.abs(value) < 1 ? value : Math.round(value)
    );
  } else if (option === 'short') {
    return abbreviateNumber(value);
  } else if (option === '%') {
    return `${numberFormatter.format(value)}%`;
  } else if (option === '') {
    return numberFormatter.format(value);
  }
};

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const getStatistic = (
  data,
  type,
  statistic,
  {
    expiredDate = null,
    normalizedByPopulationPer = null,
    movingAverage = false,
    canBeNaN = false,
  } = {}
) => {
  // TODO: Replace delta with daily to remove ambiguity
  //       Or add another type for daily/delta

  if (expiredDate !== null) {
    if (STATISTIC_CONFIGS[statistic]?.category === 'tested') {
      if (
        !data?.meta?.tested?.date ||
        differenceInDays(
          parseIndiaDate(expiredDate),
          parseIndiaDate(data.meta.tested.date)
        ) > TESTED_EXPIRING_DAYS
      ) {
        return 0;
      }
    }
  }

  let multiplyFactor = 1;
  if (type === 'delta' && movingAverage) {
    type = 'delta7';
    multiplyFactor *= 1 / 7;
  }

  if (normalizedByPopulationPer === 'million') {
    multiplyFactor *= 1e6 / data?.meta?.population;
  } else if (normalizedByPopulationPer === 'lakh') {
    multiplyFactor *= 1e5 / data?.meta?.population;
  } else if (normalizedByPopulationPer === 'hundred') {
    multiplyFactor *= 1e2 / data?.meta?.population;
  }

  let val;
  if (statistic === 'active' || statistic === 'activeRatio') {
    const confirmed = data?.[type]?.confirmed || 0;
    const deceased = data?.[type]?.deceased || 0;
    const recovered = data?.[type]?.recovered || 0;
    const other = data?.[type]?.other || 0;
    const active = confirmed - deceased - recovered - other;
    if (statistic === 'active') {
      val = active;
    } else if (statistic === 'activeRatio') {
      val = 100 * (active / confirmed);
    }
  } else if (statistic === 'vaccinated') {
    const dose1 = data?.[type]?.vaccinated1 || 0;
    const dose2 = data?.[type]?.vaccinated2 || 0;
    val = dose1 + dose2;
  } else if (statistic === 'tpr') {
    const confirmed = data?.[type]?.confirmed || 0;
    const tested = data?.[type]?.tested || 0;
    val = 100 * (confirmed / tested);
  } else if (statistic === 'cfr') {
    const deceased = data?.[type]?.deceased || 0;
    const confirmed = data?.[type]?.confirmed || 0;
    val = 100 * (deceased / confirmed);
  } else if (statistic === 'recoveryRatio') {
    const recovered = data?.[type]?.recovered || 0;
    const confirmed = data?.[type]?.confirmed || 0;
    val = 100 * (recovered / confirmed);
  } else if (statistic === 'caseGrowth') {
    const confirmedDeltaLastWeek = data?.delta7?.confirmed || 0;
    const confirmedDeltaTwoWeeksAgo = data?.delta21_14?.confirmed || 0;
    val =
      type === 'total'
        ? 100 *
          ((confirmedDeltaLastWeek - confirmedDeltaTwoWeeksAgo) /
            confirmedDeltaTwoWeeksAgo)
        : 0;
  } else if (statistic === 'population') {
    val = type === 'total' ? data?.meta?.population : 0;
  } else {
    val = data?.[type]?.[statistic];
  }

  const statisticConfig = STATISTIC_CONFIGS[statistic];
  multiplyFactor = (statisticConfig?.nonLinear && 1) || multiplyFactor;

  let result = multiplyFactor * val;
  if (!canBeNaN) {
    result = (!isNaN(result) && result) || 0;
  }
  if (!statisticConfig?.canBeInfinite) {
    result = ((isNaN(result) || isFinite(result)) && result) || 0;
  }
  return result;
};

export const fetcher = (url) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};

export function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

export const spike = (length, width = 8) =>
  `M${-width / 2},0L0,${-length}L${width / 2},0`;

export const PropertyData = [
  {
    id: 'ABIRI',
    name: 'Residence Inn Abilene',
    description: null,
    coordinates: '32.47322, -99.692066',
    brand: {
      id: 'RI',
      name: 'Residence Inn',
      url: null,
    },
    state: 'Texas',
    district: 'Abilene',
    imageUrl:
      'https://cache.marriott.com/content/dam/marriotts7prod/ABIRI/abiri-pool-0037-hor-clsc.jpg',
    adminEmail: 'adminsentiment@yopmail.com',
    incidentSummary: null,
    feedbackSummary: null,
    feedbackRating: 0,
  },
  {
    id: 'AMACY',
    name: 'Courtyard Amarillo West/Medical Center',
    description: null,
    coordinates: '35.187936, -101.930333',
    brand: {
      id: 'CY',
      name: 'Courtyard',
      url: 'https://www.marriott.com',
    },
    state: 'Texas',
    district: 'Amarillo',
    imageUrl:
      'https://cache.marriott.com/is/image/marriotts7prod/cy-amacy-cy-amacy-1-king-14841-42623:Classic-Hor',
    adminEmail: 'adminfeedback@yopmail.com',
    incidentSummary: null,
    feedbackSummary: null,
    feedbackRating: 0,
  },
  {
    id: 'MIAEK',
    name: 'Element Miami Brickell',
    description: null,
    coordinates: '25.76683285949398, -80.19610447381754',
    brand: {
      id: 'EL',
      name: 'Element Hotels',
      url: null,
    },
    state: 'Florida',
    district: 'Miami',
    imageUrl:
      'https://cache.marriott.com/is/image/marriotts7prod/el-miaek-rooftop-pool-27110:Classic-Hor',
    adminEmail: 'sentimentallyy@yopmail.com',
    incidentSummary: null,
    feedbackSummary: null,
    feedbackRating: 0,
  },
  {
    id: 'CHICM',
    name: 'Courtyard Chicago Midway Airport',
    description: null,
    coordinates: '41.772836, -87.743697',
    brand: {
      id: 'CY',
      name: 'Courtyard',
      url: 'https://www.marriott.com',
    },
    state: 'Illinois',
    district: 'Chicago',
    imageUrl:
      'https://cache.marriott.com/is/image/marriotts7prod/cy-cy-lobby-pod-29210:Feature-Hor',
    adminEmail: 'adminsentiment@yopmail.com',
    incidentSummary: null,
    feedbackSummary: null,
    feedbackRating: 0,
  },
  {
    id: 'CHIBF',
    name: 'Four Points by Sheraton Buffalo Grove',
    description: null,
    coordinates: '42.154003, -87.953685',
    brand: {
      id: 'FP',
      name: 'Four Points by Sheraton',
      url: null,
    },
    state: 'Illinois',
    district: 'Buffalo Grove',
    imageUrl:
      'https://cache.marriott.com/is/image/marriotts7prod/fp-main-001-hor-clsc:Feature-Hor',
    adminEmail: 'adminfeedback@yopmail.com',
    incidentSummary: null,
    feedbackSummary: null,
    feedbackRating: 0,
  },
  {
    id: 'LAXAH',
    name: 'Anaheim Marriott',
    description: null,
    coordinates: '33.799393, -117.918601',
    brand: {
      id: 'MC',
      name: 'Marriott Hotels & Resorts',
      url: 'https://www.marriott.com',
    },
    state: 'California',
    district: 'Anaheim',
    imageUrl:
      'https://cache.marriott.com/is/image/marriotts7prod/mc-laxah-outdoor-pool-and-nf-95054-71358:Classic-Hor',
    adminEmail: 'sentimentallyy@yopmail.com',
    incidentSummary: null,
    feedbackSummary: null,
    feedbackRating: 0,
  },
  {
    id: 'SFOBG',
    name: 'San Francisco Airport Marriott Waterfront',
    description: null,
    coordinates: '37.602398, -122.370918',
    brand: {
      id: 'MC',
      name: 'Marriott Hotels & Resorts',
      url: 'https://www.marriott.com',
    },
    state: 'California',
    district: 'San Francisco',
    imageUrl:
      'https://cache.marriott.com/is/image/marriotts7prod/mc-sfobg-san-jose-exterior-30501:Classic-Hor',
    adminEmail: 'adminsentiment@yopmail.com',
    incidentSummary: null,
    feedbackSummary: null,
    feedbackRating: 0,
  },
  {
    id: 'JFKCY',
    name: 'Courtyard New York JFK Airport',
    description: null,
    coordinates: '40.6413, -73.7781',
    brand: {
      id: 'CY',
      name: 'Courtyard',
      url: 'https://www.marriott.com',
    },
    state: 'New York',
    district: 'Queens',
    imageUrl:
      'https://cache.marriott.com/marriottassets/marriott/BR/br-main01-0001-hor-feat.jpg',
    adminEmail: 'adminfeedback@yopmail.com',
    incidentSummary: null,
    feedbackSummary: null,
    feedbackRating: 0,
  },
  {
    id: 'NYCMQ',
    name: 'New York Marriott Marquis',
    description: null,
    coordinates: '40.758855, -73.985869',
    brand: {
      id: 'MC',
      name: 'Marriott Hotels & Resorts',
      url: 'https://www.marriott.com',
    },
    state: 'New York',
    district: 'Manhattan',
    imageUrl:
      'https://cache.marriott.com/is/image/marriotts7prod/nycmq-exterior-0166:Classic-Hor',
    adminEmail: 'sentimentallyy@yopmail.com',
    incidentSummary: null,
    feedbackSummary: null,
    feedbackRating: 0,
  },
];

export const DUMMY_BRANDS = [
  {
    id: 'MC',
    name: 'Marriott Hotels & Resorts',
    url: 'https://www.marriott.com',
  },
  {
    id: 'CY',
    name: 'Courtyard',
    url: 'https://www.marriott.com',
  },
  {
    id: 'FP',
    name: 'Four Points by Sheraton',
    url: null,
  },
  {
    id: 'RI',
    name: 'Residence Inn',
    url: null,
  },
  {
    id: 'EL',
    name: 'Element Hotels',
    url: null,
  },
];

export const DUMMY_CATEGORIES = [
  {
    id: 1,
    name: 'Housekeeping',
  },
  {
    id: 2,
    name: 'Maintenance',
  },
  {
    id: 3,
    name: 'Hygiene',
  },
  {
    id: 4,
    name: 'Amenities',
  },
  {
    id: 5,
    name: 'Disturbances',
  },
  {
    id: 6,
    name: 'Billing',
  },
  {
    id: 7,
    name: 'Dining',
  },
  {
    id: 8,
    name: 'Front Desk',
  },
  {
    id: 9,
    name: 'Security',
  },
  {
    id: 10,
    name: 'Technology',
  },
];
