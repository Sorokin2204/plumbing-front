import { Download, FileCopy } from '@mui/icons-material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Interweave } from 'interweave';
import React from 'react';
import { Quill } from 'react-quill';
import SiteContentTable from '../SiteContentTable/SiteContentTable';
import SiteTabs from '../FormCheckout/SiteTabs/SiteTabs';
import styles from './SiteContenBlock.module.scss';
import { saveAs } from 'file-saver';
import axios from 'axios';
import fileDownload from 'js-file-download';
const SiteContenBlock = (data) => {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };
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
            <ul class={styles.fileList}>
              {value?.map((item) => (
                <li class={styles.fileItem}>
                  <a
                    onClick={() => {
                      var re = /(?:\.([^.]+))?$/;
                      handleDownload(`${process.env.REACT_APP_SITE_URL}/${item?.path}`, `${item?.name}.${re.exec(item?.path)[1]}`);
                    }}
                    class={styles.fileLink}>
                    <InsertDriveFileIcon sx={{ fontSize: '16px', mt: '4px', mr: 0.5 }} />
                    <div> {item?.name}</div>
                    {/* <Download /> */}
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
