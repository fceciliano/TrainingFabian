import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import HomePage from './components/pages/Home/index';
import Data from './service/DataConsumerService';

ReactDOM.render(
  <React.StrictMode>
    <HomePage information={Data}/>
  </React.StrictMode>,
  document.getElementById('root')
);