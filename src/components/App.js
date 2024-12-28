
import React, {useEffect} from "react";
import './../styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import Navigate from "../Navigate/Navigate";
import Admin from "../Pages/Admin";

const App = () => {

  return (
    <BrowserRouter>
      <Navigate />
      <Switch>
        <Route exact path='/' component={Products}/> 
        <Route exact path='/admin' component={Admin}/> 
        <Route path='/products/:id' component={SingleProduct}/> 
      </Switch>
    </BrowserRouter>
  )
}

export default App;
