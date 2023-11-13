
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Layout from './components/layout/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Layout>
    <App />
  </Layout>
)
