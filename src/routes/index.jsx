import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SearchPage, HomePage, LoginPage } from 'pages';

const Routes = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path="/player" component={HomePage}/>
        <Route path="/search" component={SearchPage}/>
        <Route path="/login" component={LoginPage} />
        <Route path="*" render={() => <Redirect to="/player"/>}/>
      </Switch>
    </div>
  )
};

export default Routes;
