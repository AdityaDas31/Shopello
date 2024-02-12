import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AlertTemplate from 'react-alert-template-basic';
import { positions, transitions, Provider as AlertProvider } from 'react-alert'

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.FADE,
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
