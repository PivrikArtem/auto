import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import './index.css';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import createStore from './store'
const store = createStore();

ReactDOM.render(
   <Provider store ={ store }>
      <App />
   </Provider>, 
      document.getElementById('root'));
