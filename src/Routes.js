import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import AddPokemon from './Pages/AddPokemon';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/addPokemon" exact={true} component={AddPokemon}/>
      </Switch>
    </BrowserRouter>
  );
}