import Hero from "../module/Hero";
import Selected from "../module/Selected";
import Teaster from "../module/teaser";
import SliderBooks from "../module/SliderBooks";
import Books from "./Books";


function HomePage() {
  return (
    <div>
      <Hero/>
      <Teaster/>
      <SliderBooks/>
      <Selected/>
      <Books/>
    </div>
  )
}

export default HomePage