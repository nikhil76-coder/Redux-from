import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

// Use createRoot to create a root instance and render your app
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you’re sure the container is non-null
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
