import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js'; // or ./App.jsx if your file is App.jsx
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
