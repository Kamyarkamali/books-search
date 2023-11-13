// react-icons
import {AiOutlineSearch} from "react-icons/ai";



function Seacrh() {
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