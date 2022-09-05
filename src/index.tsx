import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';

createRoot(document.getElementById('root') as HTMLElement)
  .render(<h1>Hello React</h1>);
