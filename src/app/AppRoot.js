import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import App from './App';
import reducers from '../reducers';

function getStore() {
  const initialState = {
    expirationItems: [],
  };

  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk));
}

export default function AppRoot() {
  return (
    <Provider store={getStore()}>
      <App />
    </Provider>
  );
}
