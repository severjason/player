import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Search, Player, withPlaylist } from "containers";
import { SearchPage } from 'pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/player" component={withPlaylist(Player)}/>
      <Route path="/search" component={SearchPage}/>
      <Route path="*" render={() => <Redirect to="/player"/>}/>
    </Switch>
  )
};

export default Routes;
