import { ArrowBackIos, ArrowForwardIos, Close, Fullscreen, OpenInFull } from '@mui/icons-material';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './GalleryFullScreen.module.scss';
const GalleryFullScreen = ({ data }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    if (showGallery) {
      setActiveImage(0);
      document.body.style.overflow = 'hidden';
    } else {
      setImageLoaded(false);
      document.body.style.overflow = 'auto';
    }
  }, [showGallery]);

  return (
    <div>
      <div
        onClick={() => {
          setShowGallery(true);
        }}
        class={clsx(styles.wrapFirstImg)}>
        <img src={data[0]} alt="" className={clsx(styles.firstImg)} />
        <div class={styles.wrapFirstImgIcon}>
          <OpenInFull
            sx={{
              color: ' #fff',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '40px',
              zIndex: '2',
            }}
          />
        </div>
      </div>
      {showGallery && (
        <div className={clsx(styles.wrapper, !imageLoaded && styles.wrapperNotLoaded)}>
          <button
            className={clsx(styles.close)}
            onClick={() => {
              setShowGallery(false);
            }}>
            <Close sx={{ fontSize: '40px' }} />
          </button>
          <div className={clsx(styles.mainWrap)}>
            <button
              onClick={() => {
                if (activeImage !== 0) {
                  setActiveImage(activeImage - 1);
                }
              }}
              className={clsx(styles.prev)}>
              <ArrowBackIos sx={{ color: ' white', fontSize: '40px' }} />
            </button>
            <img
              onLoad={() => {
                setImageLoaded(true);
              }}
              src={data?.[activeImage]}
              alt=""
              className={clsx(styles.main)}
            />
            <button
              className={clsx(styles.next)}
              onClick={() => {
                if (activeImage !== data?.length - 1) {
                  setActiveImage(activeImage + 1);
                }
              }}>
              {' '}
              <ArrowForwardIos sx={{ color: ' white', fontSize: '40px' }} />
            </button>
          </div>

          <div className={clsx(styles.list)}>
            {data?.map((item, index) => (
              <div
                onClick={() => {
                  setActiveImage(index);
                }}
                className={clsx(styles.item, activeImage === index && styles.itemActive)}>
                <img src={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryFullScreen;
