import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import createSagaMiddleware from 'redux-saga';
import userReducer from './reducers/userReducer';
import mySaga from './sagas/userSaga';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: userReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
})
sagaMiddleware.run(mySaga);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
