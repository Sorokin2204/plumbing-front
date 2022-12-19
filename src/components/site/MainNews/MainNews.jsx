import React, { useState } from 'react';
import styles from './MainNews.module.scss';
import clsx from 'clsx';
import { BoltRounded } from '@mui/icons-material';
import axios from 'axios';
import { apiUrl } from '../../../utils/apiUrl';
import { useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router';

const MainNews = () => {
  const [getPageList, setGetPageList] = useState(null);
  useEffect(() => {
    axios
      .get(apiUrl('page/list'), {
        params: {
          type: 'news',
          isBreakingNews: true,
        },
      })
      .then((res) => {
        setGetPageList({ loading: false, data: res.data });
      })
      .catch((res) => {
        setGetPageList({ loading: false, error: true });
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div className={clsx(styles.wrap)}>
      <div className={clsx(styles.head)}>
        <BoltRounded style={{ color: '#F2C846', fontSize: '30px', marginBottom: '4px', position: 'absolute', left: '-26px', top: '-9px' }} />
        СРОЧНЫЕ ОБЪЯВЛЕНИЯ
      </div>
      <div className={clsx(styles.list)}>
        {getPageList?.data?.map((item) => (
          <div
            className={clsx(styles.item)}
            onClick={() => {
              navigate(`/news/${item?.slug}`);
            }}>
            <div className={clsx(styles.date)}>{moment(item?.newsDate).format('DD.MM.YYYY').toString()}</div>
            <div className={clsx(styles.name)}>{item?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
