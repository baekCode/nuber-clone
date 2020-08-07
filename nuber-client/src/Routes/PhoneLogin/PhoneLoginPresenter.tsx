import React from 'react';
import Helmet from 'react-helmet';
import styled from '../../styles/typed-components';
import BackArrowBtn from 'src/Components/BackArrowBtn';

interface IProps {}

const Container = styled.div``;
const BackArrowExtends = styled(BackArrowBtn)`
  position: absolute;
  top: 0;
  left: 0;
`;

const PhoneLoginPresenter: React.SFC<IProps> = () => (
  <Container>
    <Helmet>
      <title>Phone Login : Nuber</title>
    </Helmet>
    <BackArrowExtends linkTo={'/'} />
  </Container>
);

export default PhoneLoginPresenter;
