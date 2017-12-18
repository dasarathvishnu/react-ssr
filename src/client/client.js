// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//extra
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/saga';
//end
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';
console.log(rootSaga,'myroot saga');

const axiosInstance = axios.create({
  baseURL: '/api'
});
const sagaMiddleware = createSagaMiddleware();
const Middlewares = [sagaMiddleware,thunk.withExtraArgument(axiosInstance)]
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(...Middlewares)
);

sagaMiddleware.run(rootSaga);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
