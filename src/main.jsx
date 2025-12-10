import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <GoogleOAuthProvider clientId="234638942602-mhrtvoevj6dubh0vr1hii1laj8ku86be.apps.googleusercontent.com">
     <App/>
     </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
