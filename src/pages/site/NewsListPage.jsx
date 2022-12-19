import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import clsx from 'clsx';
import axios from 'axios';
import { apiUrl } from '../../utils/apiUrl';
import { Box } from '@mui/material';
import moment from 'moment';
import { paginate } from '../../utils/paginate';
const NewsListPage = () => {
  const [getPageList, setGetPageList] = useState({ loading: true });
  const [currentNews, setCurrentNews] = useState([]);
  const [allPage, setAllPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(null);
  useEffect(() => {
    axios
      .get(apiUrl('page/list'), {
        params: {
          type: 'news',
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
    if (getPageList?.data) {
      setCurrentPage(1);
    }
  }, [getPageList]);
  useEffect(() => {
    if (currentPage) {
      setCurrentNews([...currentNews, ...paginate(getPageList?.data, 5, currentPage)]);
    }
  }, [currentPage]);

  const navigate = useNavigate();
  return (
    <div class="container">
      <h1>Новости</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        {currentNews?.map((item) => (
          <Box
            onClick={() => {
              navigate(`/news/${item?.slug}`);
            }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              cursor: 'pointer',
              marginBottom: '30px',
              maxWidth: '500px',
            }}>
            <Box
              sx={{
                fontSize: '12px',
                mb: '2px',
                color: 'rgba(0,0,0,0.6)',
              }}>
              {moment(item?.newsDate).format('DD.MM.YYYY').toString()}
            </Box>
            <Box sx={{ mb: '10px' }}>
              <Box
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#000',

                  borderBottom: '1px solid #000',
                  display: 'inline',
                }}>
                {item?.name}
              </Box>
            </Box>
            <Box
              sx={{
                fontSize: '16px',
                color: '#000',
                display: '-webkit-box',
                '-webkit-line-clamp': '3',
                '-webkit-box-orient': 'vertical',
                overflow: 'hidden',
              }}>
              {item?.newsDesc}
            </Box>
          </Box>
        ))}
        {Math.ceil(getPageList?.data?.length / 5) > currentPage && (
          <button
            class="btn-more"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}>
            Показать ещё
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsListPage;
