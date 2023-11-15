import Hero from "../module/Hero";
import Selected from "../module/Selected";
import Teaster from "../module/teaser";
import SliderBooks from "../module/SliderBooks";
function HomePage() {
  return (
    <div>
      <Hero/>
      <Teaster/>
      <Selected/>
      <SliderBooks/>
    </div>
  )
}

export default HomePage