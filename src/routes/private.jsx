// @flow
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import type { Actions } from "flow/types";

type Props = {
  component: React.ComponentType<{}>,
  userLoggedIn: boolean,
  actions: Actions,
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const {userLoggedIn} = rest;
  return (
    <Route {...rest} render={(props) => (
      userLoggedIn === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
};

export default connect(
  ({auth}) => ({
    userLoggedIn: auth.userLoggedIn,
  }),
  null
)(PrivateRoute);
