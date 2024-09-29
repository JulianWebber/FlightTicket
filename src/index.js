import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

ReactDOM.render(
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <App />
  </LocalizationProvider>,
  document.getElementById('root')
);
