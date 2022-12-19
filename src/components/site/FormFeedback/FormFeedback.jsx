import axios from 'axios';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NumericFormat, PatternFormat } from 'react-number-format';
import { apiUrl } from '../../../utils/apiUrl';
import InputCustom from '../InputCustom/InputCustom';
import ModalThanks from '../ModalThanks/ModalThanks';
import styles from './FormFeedback.module.scss';
const FormFeedback = () => {
  const defaultValues = {
    type: 'feedback',
    name: '',
    address: '',
    email: '',
    text: '',
    isAccept: false,
    phone: '',
  };

  const feedbackForm = useForm({ defaultValues });
  const [loading, setLoading] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  useEffect(() => {
    feedbackForm.register('phone', {
      required: true,
      validate: (val) => {
        return val.replace(/[^0-9]/g, '').length === 11;
      },
    });
  }, []);
  const onSubmit = (data) => {
    setLoading(true);
    axios.post(apiUrl('/send-form'), data).then((res) => {
      setLoading(false);
      setShowThanks(true);
      feedbackForm.reset();
    });
  };
  return (
    <div>
      <InputCustom form={feedbackForm} name="name" label={'Ф.И.О'} placeholder={'Введите фамилию, имя и отчество'} />
      <InputCustom form={feedbackForm} name="address" label={'Адрес'} placeholder={'Введите адрес проживания'} />
      <InputCustom isPhone label={'Телефон'} placeholder={'Введите телефон для связи'} form={feedbackForm} name={'phone'} />
      <InputCustom isEmail form={feedbackForm} name="email" label={'Email'} placeholder={'Введите ваш email'} />
      <InputCustom form={feedbackForm} name="text" isTextarea label={'Текст письма'} placeholder={''} />
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

export default FormFeedback;
