import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app/Store';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <Router>
  <App />
  </Router>
  </Provider>
  </React.StrictMode>
);

reportWebVitals();
