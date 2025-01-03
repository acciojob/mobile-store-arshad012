
import React from "react";
import './../styles/App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import Admin from "../Pages/Admin";
import AdminProduct from "../Pages/AdminProduct";

const App = () => {

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/admin'>Admin</Link>
      </nav>

      <Switch>
        <Route exact path='/' component={Products}/>
        <Route exact path='/admin' component={Admin}/>
        <Route path='/products/:id' component={SingleProduct}/>
        <Route path='/admin/products/:id' component={AdminProduct}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
