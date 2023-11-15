import {createContext,useState} from "react";

//data
import { books } from "../../data/data";

export const products=createContext()

function ContextProvider({children}) {

    const [product,setProduct]=useState<any>(books)

  return (
    <div>
        <products.Provider value={{product,setProduct}}>
            {children}
        </products.Provider>
    </div>
  )
}

export default ContextProvider