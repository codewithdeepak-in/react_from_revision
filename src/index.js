import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<<<<<<< Updated upstream
    <>
        {/* That's how we can easily reuse the components we created. */}
        <App />
        <App />
        <App />
    </>
);
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
>>>>>>> Stashed changes
