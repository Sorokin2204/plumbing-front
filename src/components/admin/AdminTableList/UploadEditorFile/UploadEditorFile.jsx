import React, { useState } from 'react';
import styles from './UploadEditorFile.module.scss';
import { Box, Button, TextField } from '@mui/material';
import { UploadFile } from '@mui/icons-material';
import axios from 'axios';
import { apiUrl } from '../../../../utils/apiUrl';
const UploadEditorFile = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const hiddenFileInput = React.useRef(null);
  const onClickUpload = () => {
    hiddenFileInput.current.click();
  };
  const onImageChange = (e) => {
    setUploadedImage(null);
    const [file] = e.target.files;
    const formData = new FormData();
    formData.append('file', file);
    axios.post(apiUrl('file/upload'), formData).then((res) => {
      if (res.data.status === 'success') {
        setUploadedImage({ path: res.data.path });
      }
    });
  };
  return (
    <Box sx={{ marginBottom: '16px' }}>
      <Button variant="outlined" startIcon={<UploadFile />} sx={{ mb: 0 }} onClick={onClickUpload}>
        Загрузить файл
      </Button>{' '}
      <Box sx={{ marginTop: '16px', display: 'flex', alignItems: 'start', flexWrap: 'wrap' }}>
        <TextField onFocus={(event) => event.target.select()} sx={{ '& input': { width: '490px' }, display: 'block', marginBottom: '16px' }} size="small" value={uploadedImage?.path ? `${process.env.REACT_APP_SERVER_URL}/files/${uploadedImage?.path}` : ''} onChange={() => {}} />
        <input type="file" onChange={onImageChange} style={{ display: 'none' }} ref={hiddenFileInput} accept="image/png, image/jpeg, image/jpg" />
        <Box sx={{ marginLeft: '20px', fontSize: '13px', opacity: '0.7' }}>
          1. Загрузите файл <br /> 2. Скопируйте ссылку <br /> 3. Нажмите на икноку "фотографии" <br />
          4. Вставьте ссылку в появившимся окне
        </Box>
      </Box>
    </Box>
  );
};

export default UploadEditorFile;
