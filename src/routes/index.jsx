import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SearchPage, HomePage, LoginPage } from 'pages';
import PrivateRoute from 'routes/private';

const Routes = () => {
  return (
    <div className='container'>
      <Switch>
        <PrivateRoute path="/player" component={HomePage}/>
        <PrivateRoute path="/search" component={SearchPage}/>
        <Route path="/login" render={(route) => {
          return <LoginPage hash={route.location.hash}/>;
        }} />
        <Route path="*" render={() => <Redirect to="/login"/>}/>
      </Switch>
    </div>
  )
};

export default Routes;
