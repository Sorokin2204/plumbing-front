import axios from 'axios';
import clsx from 'clsx';
import { Interweave } from 'interweave';
import React, { useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { apiUrl } from '../../../utils/apiUrl';
import { getSrcImages } from '../../../utils/getSrcImages';
import TableImageCell from '../TableImageCell/TableImageCell';
import styles from './SiteContentTable.module.scss';
const SiteContentTable = ({ tableId, header, data, title, isServiceTable }) => {
  const [loading, setLoading] = useState(true);
  const [getPageForms, setGetPageForms] = useState(null);
  useEffect(() => {
    if (isServiceTable) {
      axios.get(apiUrl('page/forms')).then((res) => {
        setLoading(false);
        setGetPageForms(res.data);
      });
    } else {
      setLoading(false);
    }
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <h2 class={styles.title}>{title}</h2>
      <table class={styles.table}>
        <thead>
          <tr>
            {header?.map((itemHeader, itemIndex) => (
              <th {...(itemIndex == 2 && isServiceTable && { width: '100px' })} {...(isServiceTable && { align: 'left' })}>
                {itemHeader?.name}
              </th>
            ))}
            {isServiceTable && <th width="200px"></th>}
          </tr>
        </thead>
        <tbody>
          {data?.map((itemRow, indexRow) =>
            itemRow?.row?.[0]?.groupName ? (
              <tr>
                <td class={styles.groupCell} colSpan={isServiceTable ? header?.length + 2 : header?.length}>
                  {itemRow?.row?.[0]?.groupName}
                </td>
              </tr>
            ) : (
              <tr>
                {itemRow?.row?.map((itemCell, indexCell) => (
                  <td class={clsx(styles.serviceCell)}>{getSrcImages(itemCell?.value)?.length >= 2 ? <TableImageCell data={getSrcImages(itemCell?.value)} /> : isServiceTable ? indexCell == 2 ? `${itemCell?.value} ₽` : itemCell?.value : <Interweave content={itemCell?.value} />}</td>
                ))}
                {isServiceTable && (
                  <td class={clsx(styles.serviceCell)}>
                    <div className={clsx(styles.tableBtnBox)}>
                      <button
                        onClick={() => {
                          if (getPageForms?.pageFormCheckout) {
                            navigate({
                              pathname: `/${getPageForms?.pageFormCheckout?.slug}`,
                              search: createSearchParams({
                                table: tableId,
                                row: indexRow,
                              }).toString(),
                            });
                          }
                        }}
                        className={clsx(styles.tableBtn)}>
                        Оформить
                      </button>
                      <button
                        onClick={() => {
                          if (getPageForms?.pageFormPay) {
                            navigate({
                              pathname: `/${getPageForms?.pageFormPay?.slug}`,
                              search: createSearchParams({
                                table: tableId,
                                row: indexRow,
                              }).toString(),
                            });
                          }
                        }}
                        className={clsx(styles.tableBtn)}>
                        Оплатить
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  );
};

export default SiteContentTable;
