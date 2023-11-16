import Hero from "../module/Hero";
import Selected from "../module/Selected";
import Teaster from "../module/teaser";
import SliderBooks from "../module/SliderBooks";
import Books from "./Books";
import Helpers from "../module/Helpers";



function HomePage() {



  return (
    <div data-aos="fade-up-right">
      <Hero/>
      <Teaster/>
      <SliderBooks/>
      <Helpers/>
      <Selected/>
      <Books/>
    </div>
  )
}

export default HomePage