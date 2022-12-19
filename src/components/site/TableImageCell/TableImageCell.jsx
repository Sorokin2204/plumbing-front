import clsx from 'clsx';
import React from 'react';
import GalleryFullScreen from '../GalleryFullScreen/GalleryFullScreen';
import styles from './TableImageCell.module.scss';
const TableImageCell = ({ data }) => {
  return (
    <div>
      <GalleryFullScreen data={data} />
    </div>
  );
};

export default TableImageCell;
