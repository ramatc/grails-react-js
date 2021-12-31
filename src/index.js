import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getFirestoreApp } from './config/getFirestoreApp';
import './index.css';

getFirestoreApp();

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

