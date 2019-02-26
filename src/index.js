/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
/**
 * Local import
 */
// Composant
import App from 'src/components/App';
// import init from './store';
// store
// const store = require('./store').init();

/**
 * Code
 */
const rootComponent = (
  // <Provider store={store}>
  <App />
  // </Provider>
);

render(rootComponent, document.getElementById('root'));
