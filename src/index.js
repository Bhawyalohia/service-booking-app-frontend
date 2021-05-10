import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css'
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./reducers/rootReducer"
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}
const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer
const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    composeWithDevTools() // add any middlewares here
)
const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
     <ToastContainer/>
     <PersistGate loading={null} persistor={persistor}> 
        <App />
      </PersistGate>
     </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
