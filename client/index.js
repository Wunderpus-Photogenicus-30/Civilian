import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import Map from './components/Map';

console.log('in index.js')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
