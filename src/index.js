import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Calea corectă către App
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
