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
import {DataProvider} from '../contexts/dataContext';
import {useFilterContext} from '../contexts/filterContext';
import useIsVisible from '../hooks/useIsVisible';
import useStickySWR from '../hooks/useStickySWR';
import {
  fetcher,
  getStatistic,
  parseIndiaDate,
  retry,
} from '../utils/commonFunctions';

import classnames from 'classnames';
import {addDays, formatISO, max} from 'date-fns';
import {useMemo, useRef, useState, lazy, Suspense} from 'react';
import {useLocation} from 'react-router-dom';
import {useLocalStorage, useSessionStorage, useWindowSize} from 'react-use';

const Footer = lazy(() => retry(() => import('./Footer')));
const MapExplorer = lazy(() => retry(() => import('./MapExplorer')));
// const StateHeader = lazy(() => retry(() => import('./StateHeader')));
const TimeseriesExplorer = lazy(() =>
  retry(() => import('./TimeseriesExplorer'))
);

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

  const {data: timeseries} = useStickySWR(
    `${DATA_API_ROOT}/timeseries.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: API_REFRESH_INTERVAL,
    }
  );

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
  const {setFilters} = useFilterContext();
  // const user = localStorage.getItem('user');

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

  const noRegionHighlightedDistrictData =
    regionHighlighted?.stateCode &&
    regionHighlighted?.districtName &&
    regionHighlighted.districtName !== UNKNOWN_DISTRICT_KEY &&
    noDistrictDataStates[regionHighlighted.stateCode];

  const handleFilterChange = (category, dateRange, state, brand) => {
    setFilters((st) => ({
      ...st,
      category: category,
      dateRange: dateRange,
      state: state,
      brand: brand,
    }));
    // setCategory(category);
    // setSeverity(severity);
    // setDateRange(dateRange);
    // setSelectedHotel(selectedHotel);
  };

  return (
    <>
      <DataProvider>
        <div className="Home">
          <div style={{minHeight: '100vh'}}>
            <SectionWithFilter
              title="Filters"
              onFilterChange={(filters) =>
                handleFilterChange('Feedback', filters)
              }
            />
            <Summary />
            <div
              style={{
                maxWidth: '620px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <SummaryDescription />
            </div>
          </div>
          {/* <FilterSection onFilterChange={onFilterChange} /> */}
          {/* <div className={classnames('home-left', {expanded: expandTable})}>
          <div className="header">
            <Suspense fallback={<div />}>
              <Search />
            </Suspense>

            {!data && !timeseries && <div style={{height: '60rem'}} />}

            <>
              {!timeseries && <div style={{minHeight: '61px'}} />}
              {timeseries && (
                <Suspense fallback={<div style={{minHeight: '61px'}} />}>
                  <Actions
                    {...{
                      date,
                      setDate,
                      dates: Object.keys(timeseries['TT']?.dates),
                      lastUpdatedDate,
                    }}
                  />
                </Suspense>
              )}
            </>
          </div>

          <div style={{position: 'relative', marginTop: '1rem'}}>
            {data && (
              <Suspense fallback={<div style={{height: '50rem'}} />}>
                {width >= 769 && !expandTable && (
                  <MapSwitcher {...{mapStatistic, setMapStatistic}} />
                )}
                <Level data={data['TT']} />
              </Suspense>
            )}

            <>
              {!timeseries && <div style={{height: '123px'}} />}
              {timeseries && (
                <Suspense fallback={<div style={{height: '123px'}} />}>
                  <Minigraphs
                    timeseries={timeseries['TT']?.dates}
                    {...{date}}
                  />
                </Suspense>
              )}
            </>
          </div>

          {!hideVaccinated && <VaccinationHeader data={data['TT']} />}

          {data && (
            <Suspense fallback={<TableLoader />}>
              <Table
                {...{
                  data,
                  regionHighlighted,
                  setRegionHighlighted,
                  expandTable,
                  setExpandTable,
                  hideDistrictData,
                  hideDistrictTestData,
                  hideVaccinated,
                  lastDataDate,
                  noDistrictDataStates,
                }}
              />
            </Suspense>
          )}
        </div> */}

          {/* <div className="state-selection">
          <div className="dropdown">
            <select
              value={JSON.stringify(selectedRegion)}
              onChange={handleChange}
            >
              {dropdownRegions
                .filter(
                  (region) =>
                    STATE_NAMES[region.stateCode] !== region.districtName
                )
                .map((region) => {
                  return (
                    <option
                      value={JSON.stringify(region)}
                      key={`${region.stateCode}-${region.districtName}`}
                    >
                      {region.districtName
                        ? t(region.districtName)
                        : t(STATE_NAMES[region.stateCode])}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="reset-icon" onClick={resetDropdown}>
            <ReplyIcon />
          </div>
        </div> */}

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
                        anchor === 'mapexplorer' ||
                        (expandTable && width >= 769),
                    })}
                  >
                    <Suspense fallback={<div style={{height: '50rem'}} />}>
                      {/* <StateHeader data={data['TT']} stateCode={'TT'} /> */}
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

                {timeseries && (
                  <Suspense fallback={<div style={{height: '50rem'}} />}>
                    <TimeseriesExplorer
                      stateCode="TT"
                      {...{
                        timeseries,
                        date,
                        regionHighlighted,
                        setRegionHighlighted,
                        anchor,
                        setAnchor,
                        expandTable,
                        hideVaccinated,
                        noRegionHighlightedDistrictData,
                      }}
                    />
                  </Suspense>
                )}
              </>
            )}
          </div>
        </div>

        {isVisible && (
          <Suspense fallback={<div />}>
            <Footer />
          </Suspense>
        )}
      </DataProvider>
    </>
  );
}

export default Home;
