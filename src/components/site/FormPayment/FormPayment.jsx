import axios from 'axios';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { NumericFormat, PatternFormat } from 'react-number-format';
import { apiUrl } from '../../../utils/apiUrl';
import InputCustom from '../InputCustom/InputCustom';
import ModalThanks from '../ModalThanks/ModalThanks';
import Select from 'react-select';
import { useLocation } from 'react-router';
import { currencyFormat } from '../../../utils/currencyFormat';
import styles from './FormPayment.module.scss';
const FormPayment = () => {
  const defaultValues = {
    type: 'payment',
    name: '',
    address: '',
    isAccept: false,
    phone: '',
  };
  const [serviceList, setServiceList] = useState([]);
  const feedbackForm = useForm({ defaultValues });
  const [loading, setLoading] = useState(false);
  const [serviceLoading, setServiceLoading] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const location = useLocation();

  const formatOptions = (data) => {
    const urlParams = new URLSearchParams(location?.search);
    const selectedTable = urlParams?.get('table');
    const selectedRow = urlParams?.get('row');
    let options = [];
    data?.map((item) => {
      let subOptions = [];
      let groupOptions = null;
      item?.data?.map((itemChild, indexChild) => {
        if (itemChild?.row?.[0]?.groupName) {
          if (groupOptions) {
            options.push({ label: groupOptions, options: subOptions });
            subOptions = [];
          }
          groupOptions = itemChild?.row?.[0]?.groupName;
        } else {
          const priceService = itemChild?.row?.[2]?.value;
          const nameService = itemChild?.row?.[0]?.value;
          const priceInt = parseInt(priceService.replaceAll(' ', ''));
          const optionItem = {
            label: `${nameService} - ${priceService} ₽`,
            value: priceInt,
          };
          subOptions.push(optionItem);
          if (selectedTable == item?.id && selectedRow == indexChild) {
            setSelectedOption([optionItem]);
          }
        }
      });
      if (groupOptions) {
        options.push({ label: groupOptions, options: subOptions });
      } else {
        options = [...options, ...subOptions];
      }
    });
    return options;
  };

  useEffect(() => {
    feedbackForm.register('phone', {
      required: true,
      validate: (val) => {
        return val.replace(/[^0-9]/g, '').length === 11;
      },
    });
    feedbackForm.register('services', {
      required: true,
      validate: (val) => {
        return val && val?.length > 0;
      },
    });
    axios.get(apiUrl('service-list')).then((res) => {
      setServiceLoading(false);
      setServiceList(formatOptions(res.data));
    });
  }, []);

  const onSubmit = (data) => {
    // setLoading(true);
    // axios.post(apiUrl('/send-form'), data).then((res) => {
    //   setLoading(false);
    //   setShowThanks(true);
    //   feedbackForm.reset();
    // });
  };

  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    if (selectedOption) {
      feedbackForm.setValue('services', selectedOption);
    }
  }, [selectedOption]);

  return serviceLoading ? (
    <div className="loading-text"></div>
  ) : (
    <div>
      <label class={clsx('input-wrap', feedbackForm.formState.isSubmitted && (!selectedOption || selectedOption?.length == 0) && 'input-error-select')}>
        <div className="input-lable input-label-required">Услуги</div>
        <Select
          placeholder="Выберите услуги..."
          className={clsx('react-select-container', feedbackForm.formState.isSubmitted && (!selectedOption || selectedOption?.length == 0) && 'react-select-container-error')}
          noOptionsMessage={() => 'Нет услуг'}
          classNamePrefix="react-select"
          unstyled
          isMulti
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={serviceList}
        />
      </label>

      <InputCustom form={feedbackForm} name="name" label={'Ф.И.О'} placeholder={'Введите фамилию, имя и отчество'} />
      <InputCustom form={feedbackForm} name="docNumber" label={'Номер договора'} placeholder={'Введите номер договора'} />
      <InputCustom form={feedbackForm} name="address" label={'Адрес'} placeholder={'Введите адрес проживания'} />
      <InputCustom isPhone label={'Телефон'} placeholder={'Введите телефон для связи'} form={feedbackForm} name={'phone'} />
      <label class={clsx('input-wrap')}>
        <div className="input-lable ">Сумма</div>
        <input disabled value={currencyFormat(selectedOption?.reduce((partialSum, a) => partialSum + a.value, 0) || 0)} type={'text'} className="input-custom" />
      </label>

      <InputCustom form={feedbackForm} name="isAccept" isCheckbox label={'Я даю согласие на обработку моих персональных данных в соответствии с Положением'} />

      <button class={clsx('btn', styles.btn)} onClick={feedbackForm.handleSubmit(onSubmit)} disabled={loading}>
        {loading ? <div className="loading-text">Загрузка...</div> : 'Отправить'}
      </button>
      <ModalThanks
        text="Заявка отправлена!"
        onClose={() => {
          setShowThanks(false);
        }}
        show={showThanks}
      />
    </div>
  );
};

export default FormPayment;
