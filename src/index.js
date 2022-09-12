import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {store,persistor} from './configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

// const myStore = createStore(allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );