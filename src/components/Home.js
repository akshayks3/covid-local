import RatingChart from './RatingsChart';
import SectionWithFilter from './SectionWithFilter';
import Summary from './Summary';
import SummaryDescription from './SummaryDescription';

import {
  API_REFRESH_INTERVAL,
  DATA_API_ROOT,
  DISTRICT_START_DATE,
  DISTRICT_TEST_END_DATE,
  MAP_VIEWS,
  PRIMARY_STATISTICS,
  TESTED_EXPIRING_DAYS,
  UNKNOWN_DISTRICT_KEY,
} from '../constants';
import {useDataContext} from '../contexts/dataContext';
import useIsVisible from '../hooks/useIsVisible';
import useStickySWR from '../hooks/useStickySWR';
import {
  fetcher,
  getFeedbackCountByCategory,
  getRatingOverTimeGraph,
  getStatistic,
  parseIndiaDate,
  retry,
} from '../utils/commonFunctions';

import classnames from 'classnames';
import {addDays, formatISO, max} from 'date-fns';
import {useMemo, useRef, useState, lazy, Suspense, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useLocalStorage, useSessionStorage, useWindowSize} from 'react-use';

const Footer = lazy(() => retry(() => import('./Footer')));
const MapExplorer = lazy(() => retry(() => import('./MapExplorer')));
// const StateHeader = lazy(() => retry(() => import('./StateHeader')));
// const TimeseriesExplorer = lazy(() =>
//   retry(() => import('./TimeseriesExplorer'))
// );

function Home() {
  console.log('this is the home');
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: 'TT',
    districtName: null,
  });

  const [anchor, setAnchor] = useLocalStorage('anchor', null);
  const [expandTable] = useLocalStorage('expandTable', false);
  const [mapStatistic, setMapStatistic] = useSessionStorage(
    'mapStatistic',
    'active'
  );
  const [mapView, setMapView] = useLocalStorage('mapView', MAP_VIEWS.DISTRICTS);

  const [date] = useState('');
  const location = useLocation();

  // const {data: timeseries} = useStickySWR(
  //   `${DATA_API_ROOT}/timeseries.min.json`,
  //   fetcher,
  //   {
  //     revalidateOnMount: true,
  //     refreshInterval: API_REFRESH_INTERVAL,
  //   }
  // );

  const {data} = useStickySWR(
    `${DATA_API_ROOT}/data${date ? `-${date}` : ''}.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: API_REFRESH_INTERVAL,
    }
  );

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement);
  const {width} = useWindowSize();
  const {commonData} = useDataContext();
  const [feedbackData, setFeedbackData] = useState([]);
  const [feedbackSummary, setFeedbackSummary] = useState('');

  useEffect(() => {
    console.log('this is the common data', commonData);
    setFeedbackData(commonData?.feedbackList || []);
    setFeedbackSummary(commonData?.feedbackListAIResponse || null);
  }, [commonData]);
  // const user = localStorage.getItem('user');
  console.log;
  const hideDistrictData = date !== '' && date < DISTRICT_START_DATE;
  const hideDistrictTestData =
    date === '' ||
    date >
      formatISO(
        addDays(parseIndiaDate(DISTRICT_TEST_END_DATE), TESTED_EXPIRING_DAYS),
        {representation: 'date'}
      );

  const hideVaccinated =
    getStatistic(data?.['TT'], 'total', 'vaccinated') === 0;

  const lastDataDate = useMemo(() => {
    const updatedDates = [
      data?.['TT']?.meta?.date,
      data?.['TT']?.meta?.tested?.date,
      data?.['TT']?.meta?.vaccinated?.date,
    ].filter((date) => date);
    return updatedDates.length > 0
      ? formatISO(max(updatedDates.map((date) => parseIndiaDate(date))), {
          representation: 'date',
        })
      : null;
  }, [data]);

  const noDistrictDataStates = useMemo(
    () =>
      // Heuristic: All cases are in Unknown
      Object.entries(data || {}).reduce((res, [stateCode, stateData]) => {
        res[stateCode] = !!(
          stateData?.districts &&
          stateData.districts?.[UNKNOWN_DISTRICT_KEY] &&
          PRIMARY_STATISTICS.every(
            (statistic) =>
              getStatistic(stateData, 'total', statistic) ===
              getStatistic(
                stateData.districts[UNKNOWN_DISTRICT_KEY],
                'total',
                statistic
              )
          )
        );
        return res;
      }, {}),
    [data]
  );
  console.log('feedback list', feedbackData);
  console.log('feedback summary', feedbackSummary);
  const noRegionHighlightedDistrictData =
    regionHighlighted?.stateCode &&
    regionHighlighted?.districtName &&
    regionHighlighted.districtName !== UNKNOWN_DISTRICT_KEY &&
    noDistrictDataStates[regionHighlighted.stateCode];

  const CATEGORY_CHART = {
    xpoints: feedbackSummary?.xpoints || [],
    ypoints: feedbackSummary?.ypoints || [],
    xcoordinate: feedbackSummary?.xcoordinate || [],
    ycoordinate: feedbackSummary?.ycoordinate || [],
  };

  const AVG_RATING_OVER_TIME = getRatingOverTimeGraph(feedbackData);
  const NUM_FEEDBACKS_BY_CATEGORY = getFeedbackCountByCategory(
    feedbackData,
    commonData.categories
  );

  return (
    <>
      <div className="Home">
        <div style={{minHeight: '100vh', marginBottom: '3rem'}}>
          <SectionWithFilter title="Filters" />
          <Summary feedbackData={feedbackData} />
          <div
            style={{
              maxWidth: '620px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <SummaryDescription
              title="Overall Summary"
              summary={feedbackSummary?.summary}
            />
          </div>
          <div className="ratings-chart">
            <RatingChart
              data={CATEGORY_CHART}
              title="AI-Generated Summary Score"
            />
          </div>
          <div className="ratings-chart">
            <RatingChart
              data={AVG_RATING_OVER_TIME}
              title="Average Rating Over Time"
              theme={{
                background: '#0f2027',
                barColor: '#4db6ac',
                textColor: '#b2dfdb',
              }}
            />
          </div>
        </div>

        <div
          className={classnames('home-right', {expanded: expandTable})}
          ref={homeRightElement}
          style={{minHeight: '4rem'}}
        >
          {(isVisible || location.hash) && (
            <>
              {data && (
                <div
                  className={classnames('map-container', {
                    expanded: expandTable,
                    stickied:
                      anchor === 'mapexplorer' || (expandTable && width >= 769),
                  })}
                >
                  <Suspense fallback={<div style={{height: '50rem'}} />}>
                    <MapExplorer
                      {...{
                        stateCode: 'TT',
                        data,
                        mapStatistic,
                        setMapStatistic,
                        mapView,
                        setMapView,
                        regionHighlighted,
                        setRegionHighlighted,
                        anchor,
                        setAnchor,
                        expandTable,
                        lastDataDate,
                        hideDistrictData,
                        hideDistrictTestData,
                        hideVaccinated,
                        noRegionHighlightedDistrictData,
                      }}
                    />
                  </Suspense>
                </div>
              )}

              <div className="ratings-chart">
                <RatingChart
                  data={NUM_FEEDBACKS_BY_CATEGORY}
                  title="Number of Feedbacks by Category"
                  theme={{
                    background: '#3b1f0e', // dark burnt orange background
                    barColor: '#f39c12', // vibrant orange for bars
                    textColor: '#f5cba7',
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {isVisible && (
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      )}
    </>
  );
}

export default Home;
