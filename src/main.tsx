
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Layout from './components/layout/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './components/context/ContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
  <BrowserRouter>
  <Layout>
    <App />
  </Layout>
  </BrowserRouter>
  </ContextProvider>
)
