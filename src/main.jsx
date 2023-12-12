import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalContextBoundary from './features/GlobalContextBoundary.jsx';
import '@/assets/styles/all.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextBoundary>
      <App />
    </GlobalContextBoundary>
  </React.StrictMode>,
)
