import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'src/styles/typed-components';
import BackArrowBtn from 'src/Components/BackArrowBtn';

const Container = styled.div`
  padding: 50px 20px;
  margin-top: 30px;
`;
const BackArrowExtends = styled(BackArrowBtn)`
  position: absolute;
  top: 20px;
  left: 20px;
`;
const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 24px;
`;

interface IProps extends RouteComponentProps<any> {}

const SocialPresenter: React.SFC<IProps> = () => {
  return (
    <Container>
      <Helmet>
        <title>Social Login : Nuber</title>
      </Helmet>
      <BackArrowExtends linkTo={'/'} />
      <Title>Choose an account</Title>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
      </svg>
    </Container>
  );
};

export default SocialPresenter;
