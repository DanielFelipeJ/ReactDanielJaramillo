import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Estructura con JSX
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);
//Estructura con JS
/*root.render(
   App,
    document.getElementById('root')
);*/
