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
  const [getPageBreakingList, setGetPageBreakingList] = useState(null);
  const [getPageDocsList, setGetPageDocsList] = useState(null);
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
        setGetPageBreakingList({ loading: false, data: res.data });
      })
      .catch((res) => {
        setGetPageBreakingList({ loading: false, error: true });
      });
    axios
      .get(apiUrl('page/list'), {
        params: {
          type: 'news',
          isDocsNews: true,
        },
      })
      .then((res) => {
        setGetPageDocsList({ loading: false, data: res.data });
      })
      .catch((res) => {
        setGetPageDocsList({ loading: false, error: true });
      });
    axios
      .get(apiUrl('page/list'), {
        params: {
          type: 'news',
          limit: true,
          isHome: true,
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
    <div className={clsx(styles.wrap, 'container')}>
      <div className={clsx(styles.list)}>
        <div>
          <div className={clsx(styles.head)}>Новости</div>
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
        <div>
          <div className={clsx(styles.head)}>
            <BoltRounded style={{ color: '#F2C846', fontSize: '30px', marginBottom: '4px', position: 'absolute', left: '-30px', top: '-9px' }} />
            СРОЧНЫЕ ОБЪЯВЛЕНИЯ
          </div>
          {getPageBreakingList?.data?.map((item) => (
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
        <div>
          <div className={clsx(styles.head)}>Нормативные документы</div>
          {getPageDocsList?.data?.map((item) => (
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
    </div>
  );
};

export default MainNews;
