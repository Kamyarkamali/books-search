import hero from "../../data/assets/logo.png";

import {AiOutlineCheckSquare} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";



function Hero() {
  return (
    <div className="max-w-[1500px] relative mx-auto border-2 mt-5 border-y-gray-300 rounded-lg shadow-md">
        <div className="flex justify-center">
        <img src={hero} alt="books"/>
        </div>
        {/* button */}
        <div>
            <span className="absolute lg:top-[7rem] lg:right-[3rem] text-gray-400 lg:text-2xl top-[3rem] right-6 text-[16px] border-b-[2px] border-black">انتخابی آسان برای خرید کتاب</span>
            <button className="lg:flex bg-blue-400 lg:p-1 rounded-md text-gray-500 items-center absolute lg:top-[11rem] lg:right-[7rem] lg:text-xl top-[5.3rem] right-10 hidden">دیدن کتاب ها <AiOutlineCheckSquare size={30} color="green"/></button>
            <button className="flex absolute bg-orange-400 lg:p-1 rounded-md text-white lg:left-[3rem] lg:top-[7.2rem] items-center lg:text-xl left-6 top-[3rem]">ثبت نام / ورود <AiOutlineUser size={25}/></button>
        </div>
        {/* button */}
    </div>
  )
}

export default Hero