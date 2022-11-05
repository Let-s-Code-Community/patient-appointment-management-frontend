import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { store } from './app/store';
import { BrowserRouter } from "react-router-dom";
=======
>>>>>>> 4ed5e188d637047974a6f777cbc057f36372a728
import App from './App';
import { store } from './app/store';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
=======
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
>>>>>>> 4ed5e188d637047974a6f777cbc057f36372a728
);
