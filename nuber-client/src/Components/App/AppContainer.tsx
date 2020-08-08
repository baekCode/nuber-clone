import React from 'react';
import { graphql } from 'react-apollo';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries';

interface IProps {
  data?: any;
}

const AppContainer: React.SFC<IProps> = ({ data }) => <AppPresenter isLoggedIn={data.auth.isLoggedIn} />;

export default graphql(IS_LOGGED_IN)(AppContainer);
