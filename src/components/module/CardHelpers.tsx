import { Teaser } from "../../types/interface/interface"

function CardHelpers({data}:Teaser) {
    const {image,name,id}=data
  return (
    <div className="border-[2px] text-center p-2 bg-blue-200 text-xl rounded-lg hover:scale-105 duration-300 m-4">
        <div className="flex justify-center">
        <img src={image} alt="/"/>
        </div>
        <p>{name}</p>
    </div>
  )
}

export default CardHelpers