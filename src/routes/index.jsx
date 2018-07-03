import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginPage } from 'pages';
import PrivateRoute from 'routes/private';
import { asyncComponent } from 'containers';

const Routes = () => {
  return (
    <div className='container'>
      <Switch>
        <PrivateRoute path="/player" component={asyncComponent(()=>import('pages/HomePage'))}/>
        <PrivateRoute path="/search" component={asyncComponent(()=>import('pages/SearchPage'))}/>
        <Route path="/login" render={(route) => {
          return <LoginPage hash={route.location.hash}/>;
        }} />
        <Route path="*" render={() => <Redirect to="/login"/>}/>
      </Switch>
    </div>
  )
};

export default Routes;
