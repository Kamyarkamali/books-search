import './App.css'
import BooksId from './components/module/BooksId';
import Books from './components/templates/Books';
//copoment
import HomePage from './components/templates/HomePage';

import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/booksId/:id' element={<BooksId/>}/>
    </Routes>
    </>
  )
}

export default App
