//data
import { hero } from "../../data/data"
import CardHelpers from "./CardHelpers"

function Helpers() {
  return (
    <div className="max-w-[1300px] lg:justify-between mx-auto lg:flex grid grid-cols-2 items-center">
        {hero.map((item)=>(
            <CardHelpers key={item.id} data={item}/>
        ))}
    </div>
  )
}

export default Helpers