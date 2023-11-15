import React , {useContext,useState} from 'react'

import { books } from '../../data/data'


//context
import { products } from "../context/ContextProvider"
import { DATA } from '../../types/interface/interface'

function Selected() {

  const [search,setSearch]=useState<string>("")

  const [selected,setSelected]=useState<string>("تاریخی")

  //context
  const {product,setProduct}=useContext(products)

  const [book,setBook]=useState<any>(books)


  const changeHandeler=(e)=>{
    const value=e.target.value
    setSearch(value)

    if(value){
      const newBooks=product.filter((item:DATA)=>item.name.toLowerCase().includes(value))
      setProduct(newBooks)
    } else{
      setProduct(books)
    }
  }

  const selectedChange=(e)=>{
    const value=e.target.value
    setSelected(value)

    if(value){
      const filtered=book.filter((item)=>item.category===value)
      setProduct(filtered)
    }else{
      setProduct(book)
    }
  }



  return (
    <div className='max-w-[1500px] mx-auto flex justify-center mt-3'>
        <div>
        <input value={search} onChange={changeHandeler} type="text" placeholder='میان کتاب ها بگرد' className='border-gray-400 border-[1px] outline-none p-1 rounded-md text-blue-600'/>
        <select value={selected} onChange={selectedChange} className='border-[1px] mr-3 rounded-lg bg-blue-300'>
            <option value="">همه</option>
            <option value="تاریخی">تاریخی</option>
            <option value="رمان">رمان</option>
            <option value="علمی">علمی</option>
            <option value="کودکان">کودکان</option>
            <option value="بزرگسالان">بزرگسالان</option>
        </select>
        </div>
    </div>
  )
}

export default Selected