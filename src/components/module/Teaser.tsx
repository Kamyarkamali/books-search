import image1 from "../teaster/1.jpg";
import image2 from "../teaster/2.jpg";
import image3 from "../teaster/3.jpg";

///interface
import { Teaser } from "../../types/interface/interface";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function teaser() {

    const teaser:Teaser=[
        {id:1,image:image1,title:"کتاب های مخصوص کودکان"},
        {id:2,image:image2,title:"کتاب های علمی"},
        {id:3,image:image3,title:"کتاب های رمان"},
    ]

    useEffect(()=>{
        AOS.init()
      },[])

  return (
    <>
        <h1 className="mr-4 text-xl text-gray-600">بهترین موضوعات</h1>
    <div data-aos="fade-up" className="max-w-[1300px] mx-auto lg:flex gap-7 justify-center md:grid">
        {
            teaser.map((item:Teaser)=>(
                <div key={item.id} className="border-[2px] p-2 mt-4 border-blue-500 rounded-lg hover:scale-105 duration-300">
                    <div className="flex justify-center">
                <img src={item.image} alt={item.name} className="w-[200px] h-[150px]"/>
                    </div>
                <p className="bg-orange-500 p-1 rounded-lg text-center text-blue-300">{item.title}</p>
                </div>
            ))
        }
    </div>
        </>
  )
}

export default teaser