import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import statement
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom/client
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
