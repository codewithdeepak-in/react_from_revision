// Let's Revise the whole React in one Short. 



import React, { StrictMode } from'react';
import ReactDOM from'react-dom/client';
import App from './app';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode> 
        {/* Strict Mode is used for getting extra clarity about error in development process.  */}
        <App />
    </StrictMode>
)