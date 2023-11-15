import {useState} from "react"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { books } from "../../data/data";
import { DATA } from "../../types/interface/interface";


//icons
import { AiFillStar } from "react-icons/ai";

function SliderBooks() {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      }
  return (
    <div>
        
<Carousel responsive={responsive}>
        {books.map((item:DATA)=>(
          <div key={item.id} className="flex relative flex-col text-center items-center justify-center border-[1px] h-[400px] p-1 m-2 border-blue-400 rounded-lg hover:scale-105 duration-300 mt-7">
            <img src={item.image} alt={item.name} className="w-[240px]" />
            <p className="text-gray-500 text-xl">{item.name}</p>
            <div className="flex flex-col items-center leading-10 lg:flex-row justify-evenly gap-4 w-full text-red-600">
              <p>نویسنده: {item.auther}</p>
              <p>مترجم : {item.auther}</p>
            </div>
            <p className="flex absolute text-gray-400 top-0 left-0 items-center"><AiFillStar size={20} color="yellow"/> {item.rate}</p>
            </div>
        ))}
</Carousel>;
    </div>
  )
}

export default SliderBooks


