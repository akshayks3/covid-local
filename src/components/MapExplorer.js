import {DropdownSearch} from './DropdownSearch';
import MapVisualizerLoader from './loaders/MapVisualizer';
import MapComponent from './MapComponent';

import {MAP_STATISTICS, STATE_NAMES, STATISTIC_CONFIGS} from '../constants';
import {useDataContext} from '../contexts/dataContext';
import {getStatistic} from '../utils/commonFunctions';

import classnames from 'classnames';
import equal from 'fast-deep-equal';
import produce from 'immer';
import {memo, useCallback, useEffect, useMemo, useRef, Suspense} from 'react';
import {useHistory} from 'react-router-dom';
import {useSwipeable} from 'react-swipeable';
import {useSessionStorage, useWindowSize} from 'react-use';

// const MapVisualizer = lazy(() => retry(() => import('./MapVisualizer')));

function MapExplorer({
  stateCode: mapCode = 'TT',
  data,
  mapStatistic,
  setMapStatistic,
  regionHighlighted,
  anchor,
  expandTable = false,
  lastDataDate,
  hideVaccinated = false,
}) {
  // const {t} = useTranslation();
  const mapExplorerRef = useRef();
  const {width} = useWindowSize();
  // const user = JSON.parse(sessionStorage.getItem('user'));
  const [isPerLakh] = useSessionStorage('isPerLakhMap', false);
  const [delta7Mode] = useSessionStorage('delta7ModeMap', false);
  const {commonData} = useDataContext();

  const hoveredRegion = useMemo(() => {
    const hoveredData =
      (regionHighlighted.districtName
        ? data[regionHighlighted.stateCode]?.districts?.[
            regionHighlighted.districtName
          ]
        : data[regionHighlighted.stateCode]) || {};

    return produce(hoveredData, (draft) => {
      draft.name =
        regionHighlighted.districtName ||
        STATE_NAMES[regionHighlighted.stateCode];
    });
  }, [data, regionHighlighted.stateCode, regionHighlighted.districtName]);

  const history = useHistory();
  const panelRef = useRef();

  useEffect(() => {
    if (history.location.hash === '#MapExplorer') {
      panelRef.current.scrollIntoView();
    }
  }, [history]);

  const trail = useMemo(() => {
    const styles = [];

    [0, 0, 0, 0, 0, 0, 0].map((element, index) => {
      styles.push({
        animationDelay: `${index * 250}ms`,
      });
      return null;
    });

    return styles;
  }, []);

  const getMapStatistic = useCallback(
    (data) => {
      const statisticConfig = STATISTIC_CONFIGS[mapStatistic];

      const type =
        (statisticConfig?.showDelta && delta7Mode) ||
        statisticConfig?.onlyDelta7
          ? 'delta7'
          : 'total';

      return getStatistic(data, type, mapStatistic, {
        expiredDate: lastDataDate,
        normalizedByPopulationPer:
          isPerLakh && mapStatistic != 'population' ? 'lakh' : null,
        canBeNaN: true,
      });
    },
    [mapStatistic, isPerLakh, lastDataDate, delta7Mode]
  );

  let currentVal = getMapStatistic(hoveredRegion);
  if (isNaN(currentVal)) {
    currentVal = '-';
  }

  // const spring = useSpring({
  //   total: currentVal,
  //   config: {tension: 250, ...SPRING_CONFIG_NUMBERS},
  // });

  const mapStatistics = useMemo(
    () =>
      MAP_STATISTICS.filter(
        (statistic) =>
          !(STATISTIC_CONFIGS[statistic]?.category === 'vaccinated') ||
          !hideVaccinated
      ),
    [hideVaccinated]
  );

  const handleStatisticChange = useCallback(
    (direction) => {
      const currentIndex = mapStatistics.indexOf(mapStatistic);
      const toIndex =
        (mapStatistics.length + currentIndex + direction) %
        mapStatistics.length;
      setMapStatistic(mapStatistics[toIndex]);
    },
    [mapStatistic, mapStatistics, setMapStatistic]
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleStatisticChange.bind(this, 1),
    onSwipedRight: handleStatisticChange.bind(this, -1),
  });

  const stickied = anchor === 'mapexplorer' || (expandTable && width >= 769);

  return (
    <div
      className={classnames(
        'MapExplorer',
        {stickied},
        {
          hidden:
            anchor && anchor !== 'mapexplorer' && (!expandTable || width < 769),
        }
      )}
    >
      <div
        ref={mapExplorerRef}
        className="fadeInUp"
        style={trail[3]}
        {...swipeHandlers}
      >
        {mapStatistic && (
          <Suspense
            fallback={
              <MapVisualizerLoader
                className="map-loader"
                {...{
                  width: mapExplorerRef.current?.clientWidth,
                  statistic: mapStatistic,
                }}
              />
            }
          >
            <div>
              <DropdownSearch />
              <MapComponent properties={commonData.hotels} />
            </div>
            {/* <MapVisualizer
              data={mapData}
              statistic={mapStatistic}
              {...{
                mapCode,
                isDistrictView,
                mapViz,
                regionHighlighted,
                setRegionHighlighted,
                getMapStatistic,
                transformStatistic,
                noDistrictData,
              }}
            ></MapVisualizer> */}
          </Suspense>
        )}
      </div>
    </div>
  );
}

const isEqual = (prevProps, currProps) => {
  if (!equal(prevProps.stateCode, currProps.stateCode)) {
    return false;
  } else if (!equal(prevProps.regionHighlighted, currProps.regionHighlighted)) {
    return false;
  } else if (!equal(prevProps.mapView, currProps.mapView)) {
    return false;
  } else if (!equal(prevProps.mapStatistic, currProps.mapStatistic)) {
    return false;
  } else if (!equal(prevProps.anchor, currProps.anchor)) {
    return false;
  } else if (!equal(prevProps.expandTable, currProps.expandTable)) {
    return false;
  } else if (!equal(prevProps.hideDistrictData, currProps.hideDistrictData)) {
    return false;
  } else if (
    !equal(prevProps.hideDistrictTestData, currProps.hideDistrictTestData)
  ) {
    return false;
  } else if (!equal(prevProps.hideVaccinated, currProps.hideVaccinated)) {
    return false;
  } else if (!equal(prevProps.lastDataDate, currProps.lastDataDate)) {
    return false;
  } else if (
    !equal(
      prevProps.data?.TT?.meta?.['last_updated'],
      currProps.data?.TT?.meta?.['last_updated']
    )
  ) {
    return false;
  } else if (!equal(prevProps.data?.TT?.total, currProps.data?.TT?.total)) {
    return false;
  } else if (
    !equal(
      prevProps.noRegionHighlightedDistrictData,
      currProps.noRegionHighlightedDistrictData
    )
  ) {
    return false;
  } else if (!equal(prevProps.noDistrictData, currProps.noDistrictData)) {
    return false;
  }
  return true;
};

export default memo(MapExplorer, isEqual);
