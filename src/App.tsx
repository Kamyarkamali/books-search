import './App.css'

import {useEffect} from "react"

import Books from './components/templates/Books';
//copoment
import HomePage from './components/templates/HomePage';

import { Routes,Route } from "react-router-dom";


function App() {

  useEffect(()=>{
    document.title="جست و جوی کتاب"
  },[])

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/books' element={<Books/>}/>
    </Routes>
    </>
  )
}

export default App
