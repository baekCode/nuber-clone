import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from '../../styles/typed-components';
import bgPattern from '../../images/bg.png';

const Container = styled.div`
  height: 100vh;
  background: url(${bgPattern});
`;
const Visual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border-radius: 10px;
  background: #fff;
`;
const Footer = styled.div`
  height: 30%;
  padding: 5%;
  background: #fff;
`;
const PhoneLogin = styled.div`
  font-size: 24px;
`;
const FakeInput = styled.div`
  padding-bottom: 25px;
  margin: 25px 0px;
  font-size: 25px;
  font-weight: 300;
  border-bottom: 1px solid #eee;
`;

interface IProps extends RouteComponentProps<any> {}

const LoginPresenter: React.SFC<IProps> = () => (
  <Container>
    <Helmet>
      <title>login : nuber</title>
    </Helmet>
    <Visual>
      <Title>Nuber</Title>
    </Visual>
    <Footer>
      <Link to={'/phone-login'}>
        <PhoneLogin>Get moving with Nuber</PhoneLogin>
        <FakeInput>
          <span role="img" aria-label="korea">
            🇰🇷
          </span>
          +82
        </FakeInput>
      </Link>
      <Link to={'/social-login'}>소셜 로그인</Link>
    </Footer>
  </Container>
);
export default LoginPresenter;
