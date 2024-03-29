import { Box, Button, Checkbox, CircularProgress, FormControlLabel, IconButton, LinearProgress, TextField, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import PageContentList from '../../../components/admin/PageContentList/PageContentList';
import styles from './HouseAddEdit.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Geocode from 'react-geocode';
import { YMaps, Map, SearchControl, Placemark } from 'react-yandex-maps';
import axios from 'axios';
import { Add, AddCircle, AddCircleOutline, AddOutlined, Delete } from '@mui/icons-material';
import { apiUrl } from '../../../utils/apiUrl';
import { useNavigate } from 'react-router';
import Loading from '../Loading/Loading';
import InfoAlert from '../InfoAlert/InfoAlert';
const HouseAddEdit = ({ data = null }) => {
  const [value, setValue] = React.useState(0);
  const [pageContentRequest, setPageContentRequest] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const defaultValues = data
    ? data
    : {
        dateNews: moment().format('YYYY-MM-DD').toString(),
        name: '',
        slug: '',
        pageContent: [
          {
            type: 'tabs',
            value: [
              { name: 'Характеристики', content: [] },
              { name: 'Документы', content: [] },
              { name: 'Поставщики', content: [] },
              { name: 'Должники', content: [] },
            ],
          },
        ],
        list: [{ label: '', value: '' }],
      };

  const contentForm = useForm({ defaultValues });
  const { fields, append, prepend, remove, swap, move, insert, update } = useFieldArray({
    control: contentForm.control,
    name: 'list',
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setPageContentRequest({ loading: true });
    axios.post(apiUrl('page/create'), { ...data, type: 'house' }).then(() => {
      setShowAlert(true);
      setPageContentRequest({ loading: false, data: true });
      setTimeout(() => {
        navigate('/admin/houses');
      }, 1000);
    });
  };
  console.log(contentForm.watch());
  const searchRef = useRef(null);
  const errors = contentForm?.formState?.errors;
  const [pointMap, setPointMap] = useState(null);

  const [getGeoInfo, setGetGeoInfo] = useState(null);
  useEffect(() => {
    if (data) {
      setPointMap(data.map);
    }
  }, [data]);

  useEffect(() => {
    if (pointMap) {
      contentForm.setValue('map', pointMap);
      setGetGeoInfo({ loading: true });
      axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${pointMap[0]}&lon=${pointMap[1]}&apiKey=f4c2d7b116144ee1b6795106cf5c82c0&lang=ru`).then((res) => {
        setGetGeoInfo({ loading: false, address: res.data.features[0].properties.formatted });
      });
    }
  }, [pointMap]);

  return (
    <div>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '16px', marginBottom: '16px' }}>
        <Controller name="name" control={contentForm.control} rules={{ required: true }} render={({ field }) => <TextField error={errors?.name} helperText={errors?.name && 'Заполните поле'} label={'Название дома'} {...field} />} />
        <Controller name="slug" control={contentForm.control} rules={{ required: true }} render={({ field }) => <TextField error={errors?.slug} label={'Путь'} helperText={errors?.slug ? 'Заполните поле' : 'Путь к старнице. Например /contact'} {...field} />} />
      </Box>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <Button onClick={contentForm.handleSubmit(onSubmit)} variant="contained" sx={{ backgroundColor: 'success.light', ml: 'auto', display: 'flex' }}>
          Сохранить
        </Button>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Характеристики" {...a11yProps(1)} />
            <Tab label="Документы" {...a11yProps(2)} />
            <Tab label="Поставщики" {...a11yProps(3)} />
            <Tab label="Должники" {...a11yProps(4)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <PageContentList form={contentForm} name="pageContent[0].value[0].content" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PageContentList form={contentForm} name="pageContent[0].value[1].content" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PageContentList form={contentForm} name="pageContent[0].value[2].content" />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PageContentList form={contentForm} name="pageContent[0].value[3].content" />
        </TabPanel>
      </Box>
      {pageContentRequest?.loading && <Loading />}

      <InfoAlert show={showAlert} text={data ? 'Дом сохранен' : 'Дом создан'} />
    </div>
  );
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ pt: 3, pl: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default HouseAddEdit;
