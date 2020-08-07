import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../styles/typed-components';

const Container = styled.div``;

interface IProps {
  toLink: string;
  className?: any;
}

const BackArrowBtn: React.SFC<IProps> = ({ toLink, className }) => (
  <Container className={className}>
    <Link to={toLink}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    </Link>
  </Container>
);

export default BackArrowBtn;
