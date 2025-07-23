import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ← ✅ required
import App from '@/App';
import '@/styles/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>  {/* ← wrap App in router */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);