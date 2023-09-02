import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import SiteContenBlock from '../../SiteContenBlock/SiteContenBlock';
import styles from './SiteTabs.module.scss';
import { YMaps, Map, SearchControl, Placemark } from 'react-yandex-maps';
const SiteTabs = ({ data, pageType, map, list }) => {
  const [activeTab, setActiveTab] = useState(0);
  const isHouse = pageType === 'house';
  const [mapLoaded, setMapLoaded] = useState(false);
  useEffect(() => {
    if (activeTab !== 0) {
      setMapLoaded(false);
    }
  }, [activeTab]);

  return (
    <div className={styles.tabWrapper}>
      <div className={clsx(styles.tabList)} style={{ gridTemplateColumns: `repeat(${data?.length},1fr)` }}>
        {/* {isHouse && (
          <button
            onClick={() => {
              setActiveTab(0);
            }}
            className={clsx(styles.tab, activeTab === 0 && styles.tabActive)}>
            Характеристики
          </button>
        )} */}
        {data?.map((item, index) => (
          <button
            onClick={() => {
              setActiveTab(index);
            }}
            className={clsx(styles.tab, activeTab === index && styles.tabActive)}>
            {item?.name}
          </button>
        ))}
      </div>
      {/* {isHouse && activeTab == 0 && (
        <div>
          <div className={clsx(styles.tabMap, mapLoaded && styles.tabMapShow)}>
            <YMaps>
              <Map
                onLoad={() => {
                  setMapLoaded(true);
                }}
                height="500px"
                width="auto"
                defaultState={{ center: map, zoom: 18 }}>
                {' '}
                <Placemark
                  key={1}
                  geometry={map}
                  properties={{
                    hintContent: 'HELLLO',
                    balloonContentHeader: 'Что то такое ',
                    balloonContentBody: `<div>HELLo<div/>`,
                  }}
                  options={{
                    preset: 'islands#redStretchyIcon',
                  }}
                />
              </Map>
            </YMaps>
            <div className={clsx(styles.tabMapList)}>
              {list?.map((itemList) => (
                <div className={clsx(styles.tabMapListItem)}>
                  <div>{itemList?.label}</div>
                  <div>{itemList?.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}
      <div className="">{data?.map((item, index) => activeTab == index && item?.content?.map((itemTab) => <SiteContenBlock {...itemTab} />))}</div>
    </div>
  );
};

export default SiteTabs;
