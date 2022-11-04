/**
 * ch07/ex/proj/ex07-01-1
 * ./src/index.js
 * 
 * reference code: samples/ch07-06-1.html
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const element = document.getElementById('root')
const root = createRoot(element);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
