import  {useContext,useState} from "react"
// react-icons
import {AiOutlineSearch} from "react-icons/ai";

//context
import { products } from "../context/ContextProvider";


function Seacrh() {

  const [search,setSearch]=useState<string>("")

  //context
  const {product,setProduct}=useContext(products)

  return (
    <div className="flex items-center gap-1">
        <input type="text" placeholder="نام کتاب را وارد کنید" className="border-[1px] border-orange-200 p-1 rounded-md outline-none text-blue-500"/>
        <button>
            <AiOutlineSearch size={23} color="blue"/>
        </button>
    </div>
  )
}

export default Seacrh