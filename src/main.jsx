import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bulma/css/bulma.css';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(//La app esta envuelta en un provaide que tiene una props que es store
  <Provider store={store}>
    <App />
  </Provider>
);
