import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/ShowAlunos';
import GlobalStyles from './styled/GlobalStyles';
import Routers from './Routers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routers />
    <GlobalStyles />  
  </React.StrictMode>
);

