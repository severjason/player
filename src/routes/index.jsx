import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SearchPage, HomePage } from 'pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/player" component={HomePage}/>
      <Route path="/search" component={SearchPage}/>
      <Route path="*" render={() => <Redirect to="/player"/>}/>
    </Switch>
  )
};

export default Routes;
