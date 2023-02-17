import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import { BrowserRouter  } from 'react-router-dom';
import {Provider} from 'react-redux'
import userReducer from './redux/user'
import adminReducer from './redux/admin'

const store = configureStore({
  reducer:{
    user:userReducer,
    admin:adminReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<Provider store={store}>
    <App />
</Provider>
  </BrowserRouter>

);
