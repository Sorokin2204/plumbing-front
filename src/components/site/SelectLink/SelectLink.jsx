import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './SelectLink.module.scss';
import axios from 'axios';
import { apiUrl } from '../../../utils/apiUrl';
import { useNavigate } from 'react-router';
import OutsideClickHandler from 'react-outside-click-handler';
const SelectLink = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [houseSearch, setHouseSearch] = useState('');
  const [houseSearchList, setHouseSearchList] = useState([]);
  const [getPageList, setGetPageList] = useState({ loading: true });
  useEffect(() => {
    axios
      .get(apiUrl('page/list'), {
        params: {
          type: 'house',
        },
      })
      .then((res) => {
        setGetPageList({ loading: false, data: res.data });
      })
      .catch((res) => {
        setGetPageList({ loading: false, error: true });
      });
  }, []);
  useEffect(() => {
    if (houseSearch) {
      const filterAllHouse = getPageList?.data?.filter((item) => item?.name?.includes(houseSearch));
      setHouseSearchList(filterAllHouse);
    } else {
      setHouseSearchList(getPageList?.data);
    }
  }, [houseSearch, getPageList]);

  const navigate = useNavigate();
  return (
    <div className={clsx(styles.wrap)}>
      <input
        type="text"
        placeholder="Выберите дом"
        value={houseSearch}
        onChange={(e) => {
          setHouseSearch(e.target.value);
        }}
        onFocus={() => {
          setShowMenu(true);
        }}
      />

      {showMenu && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setShowMenu(false);
          }}>
          <div className={clsx(styles.menu)}>
            {houseSearchList?.length >= 1 ? (
              houseSearchList?.map((item) => (
                <button
                  onClick={() => {
                    setShowMenu(false);
                    navigate(`/house/${item?.slug}`);
                  }}
                  title={item?.name}
                  className={clsx(styles.menuLink)}>
                  {item?.name}
                </button>
              ))
            ) : (
              <div class={styles.notFound}>Ничего не найдено</div>
            )}
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default SelectLink;
