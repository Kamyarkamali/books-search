import './App.css'
//copoment
import HomePage from './components/templates/HomePage';

import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App
