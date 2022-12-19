import clsx from 'clsx';
import moment from 'moment';
import React from 'react';
import FormCheckout from '../FormCheckout/FormCheckout';
import FormFeedback from '../FormFeedback/FormFeedback';
import FormPayment from '../FormPayment/FormPayment';
import SiteContenBlock from '../SiteContenBlock/SiteContenBlock';
import styles from './PageContent.module.scss';
const PageContent = ({ name, pageContent, type, isFormPay, isFormCheckout, isFormFeedback, map, list, newsDate }) => {
  return (
    <div class={clsx('container', styles.wrap)}>
      {type === 'news' && <div className={styles.date}>{moment(newsDate).format('DD.MM.YYYY').toString()}</div>}
      <h1 className={styles.title}>{name}</h1>
      {pageContent?.map((itemContent) => (
        <SiteContenBlock {...itemContent} pageType={type} map={map} list={list} />
      ))}
      {isFormPay && type == 'page' && <FormPayment />}
      {isFormFeedback && type == 'page' && <FormFeedback />}
      {isFormCheckout && type == 'page' && <FormCheckout />}
    </div>
  );
};

export default PageContent;
