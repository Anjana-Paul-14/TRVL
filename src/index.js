import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// // Find or create a root DOM element where your React app will be attached
// const rootElement = document.getElementById('root') || document.createElement('div');
// if (!document.getElementById('root')) {
//   rootElement.id = 'root';
//   document.body.appendChild(rootElement);
// }

// // Use createRoot to render your app
// const root = ReactDOM.createRoot(rootElement);
// root.render(<React.StrictMode><App /></React.StrictMode>);
