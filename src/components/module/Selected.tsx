import React , {useContext,useState} from 'react'

import { books } from '../../data/data'


//context
import { products } from "../context/ContextProvider"
import { DATA } from '../../types/interface/interface'

function Selected() {

  const [search,setSearch]=useState<string>("")

  //context
  const {product,setProduct}=useContext(products)


  const changeHandeler=(e)=>{
    const value=e.target.value
    setSearch(value)

    if(value){
      const newBooks=product.filter((item:DATA)=>item.name.toLowerCase().includes(value))
      console.log(newBooks)
      setProduct(newBooks)
    } else{
      setProduct(books)
    }

  }


  return (
    <div className='max-w-[1500px] mx-auto flex justify-center mt-3'>
        <div>
        <input value={search} onChange={changeHandeler} type="text" placeholder='میان کتاب ها بگرد' className='border-gray-400 border-[1px] outline-none p-1 rounded-md text-blue-600'/>
        <select className='border-[1px] mr-3 rounded-lg bg-blue-300'>
            <option value="">تاریخی</option>
            <option value="">رمان</option>
            <option value="">علمی</option>
            <option value="">کودکان</option>
            <option value="">بزرگسالات</option>
        </select>
        </div>
    </div>
  )
}

export default Selected