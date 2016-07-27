import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import App from './src/components/app';
import OffersPage from "./src/components/offers/OffersPage";

import * as actions from "./src/actions/index";

//Auth
import Signin from "./src/components/auth/signin";
import Signout from "./src/components/auth/signout";
import Signup from "./src/components/auth/signup";

//Styles

import './src/style/vendors/css/Grid.css'
import './src/style/vendors/css/normalize.css';
import "./src/style/vendors/css/ionicons.min.css";
import './src/style/app.scss';

//import {AUTH_USER} from "./actions/types";


var store = require('./src/reducers/index').configure();


// const token = localStorage.getItem('token');
// //if we have a token consider user to be signed in
//
// if(token) {
//   store.dispatch({type: AUTH_USER});
// }



store.dispatch(actions.fetchOffers()); //load initial data

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
});


ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component = {App}>
      <IndexRoute component = {OffersPage} />
      <Route path="/signin" component={Signin}/>
      <Route path="/signout" component={Signout}/>
      <Route path="/signup" component={Signup}/>
    </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
