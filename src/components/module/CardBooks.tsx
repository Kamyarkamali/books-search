import { useState,useEffect } from 'react'

import { DATA } from '../../types/interface/interface'

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


//icons
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';


function CardBooks({data,handeleLike}:DATA) {
  const {image,id,name}=data

  const [liked,setLiked]=useState<boolean>(false);

  const handelLike=()=>{
    handeleLike(data,liked)
    setLiked((liked)=>!liked)
  }

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div data-aos="fade-up" className='max-w-[1400px] relative mx-auto border-[2px] border-blue-400 rounded-lg m-6 p-3 flex flex-col items-center justify-center'>
      <img src={image} alt={name} className='w-[160px] h-[200px] mt-3 rounded-lg hover:scale-105 duration-300'/>
      <p className='text-blue-600'>{name}</p>
      <p className='flex items-center absolute top-0 left-0 text-gray-400 font-bold'>{data.rate} <AiFillStar size={20} color="yellow"/></p>
      <button className='absolute top-0 right-1' onClick={handelLike}>
      <AiFillHeart color={liked ? "red" : 'blue'} size={20}/>
      </button>
    </div>
  )
}

export default CardBooks