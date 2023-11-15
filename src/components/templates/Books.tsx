import {useState} from "react"

import { books } from "../../data/data"

//interface
import { DATA } from "../../types/interface/interface"
import CardBooks from "../module/CardBooks"

//icon
import { AiOutlineMeh } from "react-icons/ai";

function Books() {
  const [liked,setLikde]=useState<[]>([])

  const handeleLike=(data,status)=>{
    if(status){
      const newFiltered=liked.filter((item)=>item.id!==data.id)
      setLikde(newFiltered)
    }else{
      setLikde((liked)=>[...liked,data])
    }
  }


  return (
    <>
    <div className='max-w-[1500px] mx-auto lg:flex grid grid-cols-2 gap-3 flex-wrap'>
    {books.map((item:DATA)=>(
        <CardBooks key={item.id} data={item} handeleLike={handeleLike}/>
    ))}
    </div>
    
    {!liked.length && <p className="p-2 bg-gray-400 text-center rounded-md flex justify-center items-center gap-3">لیست علاقه مندی ها خالی است <AiOutlineMeh size={23} color="blue"/></p>}
    <div className="lg:flex grid grid-cols-2 justify-center border-[1px] gap-2 p-3">

      {
        liked.map((item:DATA)=>(
          <div className="border-[2px] rounded-md p-2 flex flex-col items-center">
            <img src={item.image} alt={item.name} className="w-[100px] rounded-md border-blue-400"/>
            <p>{item.name}</p>
          </div>
        ))
      }
      </div>
    </>
  )
}

export default Books