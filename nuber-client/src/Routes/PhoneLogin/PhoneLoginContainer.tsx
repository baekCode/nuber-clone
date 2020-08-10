import React, { useState } from 'react';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';

interface IProps extends RouteComponentProps<any> {}

const PhoneLoginContainer: React.SFC<IProps> = () => {
  const [state, setState] = useState({
    countryCode: '+82',
    phoneNumber: '',
  });
  const onInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = e => {
    const {
      target: { name, value },
    } = e;
    setState({
      ...state,
      [name]: value,
    });
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const { countryCode, phoneNumber } = state;
    const isValid = /^\+[1-9]{3}[0-9]{7,11}$/.test(`${countryCode} ${phoneNumber}`);

    if (isValid) return console.log(countryCode, phoneNumber);
    toast.error('please write a valid phone number');
  };
  const { countryCode, phoneNumber } = state;

  return (
    <PhoneLoginPresenter
      countryCode={countryCode}
      phoneNumber={phoneNumber}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default PhoneLoginContainer;
