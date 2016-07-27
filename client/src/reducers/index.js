import * as redux from 'redux';
import thunk from "redux-thunk";
import { reducer as form }  from "redux-form";
import {authReducer} from "./auth_reducer";
import {offersReducer, activeOfferRedcer} from "./offers_reducer";
import {searchTextReducer, filterTypeReducer} from "./filter_reducer";

export var configure = (initialState = {}) => {

  const reducer = redux.combineReducers({
    form,
    auth: authReducer,
    offers: offersReducer,
    filterType: filterTypeReducer,
    searchText: searchTextReducer,
    activeOffer: activeOfferRedcer
  });

  var store = redux.createStore(reducer, initialState,
      redux.compose(
          redux.applyMiddleware(thunk),
          window.devToolsExtension ? window.devToolsExtension() : f => f
      ));

  return store;
};
