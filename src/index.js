
import React  from 'react';
// Let's understand the above line here import is javascript keyword used to import modules and functionality into the file. while React is the vairable we are importing and react is a module or library we are importing. 

import  ReactDOM  from 'react-dom/client';
import { Provider  } from 'react-redux';
// This is also an library that we are importing for rendering the Component into window Document object model (DOM). 
import App from './app';
import Store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));

// createRoot is a method used to created root for rendering the components

root.render(
    <Provider store = {Store}>
        <App />
    </Provider>
);
