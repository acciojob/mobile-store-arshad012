
import React, {useEffect} from "react";
import './../styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Products}/> 
        <Route path='/products/:id' component={SingleProduct}/> 
      </Switch>
    </BrowserRouter>
  )
}

export default App;
