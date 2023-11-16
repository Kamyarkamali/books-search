import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  const linkdin="https://www.linkedin.com/in/kamyar-kamali-671a5822b/";
  const github="https://github.com/Kamyarkamali"
  return (
    <div className='bg-blue-600 p-3 rounded-md lg:flex-row items-center justify-around'>
      {/* <div>right</div> */}

      <div className="flex flex-col">
        <h1 className='text-white text-center mb-3'>این صفحه صرفا جهت نمونه کار طراحی شده است,سپاس از بازدید شما</h1>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="font-bold text-white">راه های ارتباطی با من:</p>
        <p className="flex items-center text-gray-800 font-bold text-xl">09190058102 <AiOutlinePhone size={17} color="white"/></p>
        <div className="flex items-center gap-3">
       <a href={linkdin} target="_blank">
       <p className=""><AiOutlineLinkedin size={24}/></p>
        </a> 
        <a href={github} target="_blank">
          <AiFillGithub size={24}/>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Footer