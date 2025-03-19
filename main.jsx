import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ErrorBoundary from './ErrrorBoundary.jsx';

// 🔹 Service Worker Register
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js')
        .then(registration => {
            console.log('✅ Service Worker Registered:', registration);
        })
        .catch(error => {
            console.error('❌ Service Worker Registration Failed:', error);
        });
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ErrorBoundary/>
        <App />
    </React.StrictMode>
);
