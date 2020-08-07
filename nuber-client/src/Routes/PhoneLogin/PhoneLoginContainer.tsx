import React, { useState } from 'react';
import PhoneLoginPresenter from './PhoneLoginPresenter';
import { RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<any> {}

const PhoneLoginContainer: React.SFC<IProps> = () => {
  const [state, setState] = useState({
    countryCode: '+82',
    phoneNumber: '',
  });
  const { countryCode, phoneNumber } = state;
  console.log(setState);
  return <PhoneLoginPresenter countryCode={countryCode} phoneNumber={phoneNumber} />;
};

export default PhoneLoginContainer;
