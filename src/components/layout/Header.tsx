import { useState } from 'react';
//component
import Seacrh from '../module/Seacrh'

//interface
import { MENU } from '../../types/interface/interface'

//react-icons
import {AiOutlineMenu} from "react-icons/ai";
import {AiFillCloseCircle} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header() {

  const [open,setOpen]=useState<boolean>(true);

  const menuList:MENU=[
    {id:1,name:"صفحه اصلی",url:"/"},
    {id:1,name:"کتاب ها",url:"/books"},
    {id:2,name:"درباره فروشگاه",url:""},
    {id:3,name:"تماس با ما",url:""},
  ]


  return (
    <div className='flex justify-between max-w-[1500px] mx-auto mt-3'>
      {/*right meu */}
      <div className='flex justify-center w-full lg:w-fit'>
        <Seacrh/>
      </div>
      {/*right meu */}

    {/* left menu */}
      <div className='hidden md:block'>
        <ul className='flex items-center gap-7'>
          {menuList.map((item:MENU)=>(
            <Link key={item.id} to={item.url}>
            <li key={item.id} className='text-blue-500 text-[17px] hover:bg-orange-400 hover:p-2 hover:rounded-md hover:text-white duration-300 cursor-pointer'>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    {/* center menu */}

      {/* left menu */}
      <div className='flex items-center'>
        <button className='bg-blue-400 p-1 rounded-md text-white duration-300 hover:bg-green-500 hidden md:block'>ساخت اکانت / ورود</button>
      </div>
      {/* left menu */}

      {/* icons hamburger menu */}
        <div className='cursor-pointer relative z-40 md:hidden'>
          {
            open ? (
              <AiOutlineMenu size={30} color="black" onClick={()=>setOpen(!open)}/>
            ) : (
              <AiFillCloseCircle size={30} color="black" onClick={()=>setOpen(!open)}/>
            )
          }
        </div>

          <div className={!open? 'absolute top-0 bg-blue-500 w-full h-full flex flex-col items-center justify-center gap-5 duration-300 z-30' : 'absolute z-30 duration-300 top-[-100%] bg-blue-500 w-full h-full flex flex-col items-center justify-center gap-5'}>
        {menuList.map((item:MENU)=>(
          <div key={item.id}>
            <p key={item.id} className='hover:bg-black p-2 hover:rounded-lg hover:text-white duration-300 cursor-pointer hover:p-3 '>{item.name}</p>
          </div>
        ))}
        {/* icons sochial media */}
          <div className='flex items-center gap-3 cursor-pointer'>
          <a href="https://github.com/Kamyarkamali" target='_blank'>
          <AiFillGithub size={30}/>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/kamyar-kamali-671a5822b/">
          <AiFillLinkedin size={30}/>
          </a>
          </div>
        {/* icons sochial media */}
        </div>

      {/* icons hamburger menu */}

    </div>
  )
}

export default Header