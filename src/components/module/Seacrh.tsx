import  {useContext,useEffect,useState} from "react"
// react-icons
import {AiOutlineSearch} from "react-icons/ai";

//context
import { products } from "../context/ContextProvider";


function Seacrh() {

  const [search,setSearch]=useState<string>("")
  
  const [searchs,setSearchs]=useState<[]>([]);

  //context
  const {product,setProduct}=useContext(products)

  const clickHandeler=()=>{
    if(search){
      const filtered=product.filter((item)=>item.name.toLowerCase().trim().includes(search))
      setSearchs(filtered)
      // setSearch("")
    }else{
      setSearchs([])
      setProduct([])
      setSearch("")
    }
  }

 

  return (
    <div className="flex flex-col h-[200px] overflow-x-hidden items-center gap-1">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="نام کتاب را وارد کنید" className="border-[1px] border-orange-200 p-1 rounded-md outline-none text-blue-500"/>
        <button onClick={clickHandeler}>
            <AiOutlineSearch size={23} color="blue"/>
        </button>
        <div className="flex flex-col items-center">
        {searchs.map((item)=>(
          <div className="border-t-[2px] w-full flex flex-col items-center">
          <img src={item.image} alt="" className="w-[60px]"/>
          <p>{item.name}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Seacrh