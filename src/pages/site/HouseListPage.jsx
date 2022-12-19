import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import clsx from 'clsx';
import axios from 'axios';
import { apiUrl } from '../../utils/apiUrl';
import { Box } from '@mui/material';
const HouseListPage = () => {
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
  const navigate = useNavigate();
  return (
    <div class="container">
      <h1>Список домов</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        {getPageList?.data?.map((item) => (
          <Box
            onClick={() => {
              navigate(`/house/${item?.slug}`);
            }}
            sx={{
              cursor: 'pointer',
              display: 'inline-block',
              marginBottom: '10px',
              color: '#80241e',
              borderBottom: '1px solid #80241e',
            }}>
            {item?.name}
          </Box>
        ))}
      </div>
    </div>
  );
};

export default HouseListPage;
