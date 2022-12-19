import { Download, FileCopy } from '@mui/icons-material';
import { Interweave } from 'interweave';
import React from 'react';
import { Quill } from 'react-quill';
import SiteContentTable from '../SiteContentTable/SiteContentTable';
import SiteTabs from '../FormCheckout/SiteTabs/SiteTabs';
import styles from './SiteContenBlock.module.scss';
import { saveAs } from 'file-saver';
const SiteContenBlock = (data) => {
  function getContentBlock({ map, list, type, value, pageContentId, pageType }) {
    switch (type) {
      case 'editor':
        return (
          <div class={styles.wrapper}>
            <Interweave content={value} />
          </div>
        );
      case 'files':
        return (
          <div class={styles.wrapper}>
            <h2>Файлы</h2>
            <ul class={styles.fileList}>
              {value?.map((item) => (
                <li class={styles.fileItem}>
                  <a
                    onClick={() => {
                      saveAs(`${process.env.REACT_APP_SITE_URL}/${item?.path}`, item?.name);
                    }}
                    class={styles.fileLink}>
                    <div> {item?.name}</div>
                    <Download sx={{ fontSize: '16px', mt: '4px', ml: 0.5 }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'table':
        return <SiteContentTable {...value} tableId={pageContentId} />;
      case 'tabs':
        return <SiteTabs map={map} list={list} pageType={pageType} data={value} tableId={pageContentId} />;
      default:
        break;
    }
  }

  return getContentBlock(data);
};

export default SiteContenBlock;
