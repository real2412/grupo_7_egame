import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './styles/base.css';
import './styles/home.css';
import './styles/forms.css';
import './styles/carrito.css';
import './styles/detalle.css';

import Create from './components/Create';
import Detail from './components/Detail';
import Edit from './components/Edit';
import Home from './components/Home';
import List from './components/List';
import Login from './components/Login';
import Register from './components/Register';
import Usuario from './components/Usuario';
import Head from './layout/Head'
import Footer from './layout/Footer'

ReactDOM.render(
  <BrowserRouter>
    <Head />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/products/create" exact={true} component={Create} />
      <Route path="/products/detail/:id" exact={true} component={Detail} />
      <Route path="/products/edit/:id" exact={true} component={Edit} />
      <Route path="/products" exact={true} component={List} />
      <Route path="/users/login" exact={true} component={Login} />
      <Route path="/users/register" exact={true} component={Register} />
      <Route path="/users/edit" exact={true} component={Usuario} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
