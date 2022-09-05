import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.scss';

createRoot(document.getElementById('root') as HTMLElement)
  .render(<h1>App!!!</h1>);
