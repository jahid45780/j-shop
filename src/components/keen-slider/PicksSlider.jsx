import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styless.css"

const PicksSlider = () => {

    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 2,
          spacing: 15,
        },
      })

    return (
        <div>

<div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img className=" w-full h-full" src="../../../public/Picks/56fdea283c265fcf864774504d030448 1.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide2">
      <img className=" w-full h-full" src="../../../public/Picks/7b6a1505c0d084e073873328a9fef520 3.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide3">
      <img className=" w-full h-full"  src="../../../public/Picks/aefff60654e4a164d9ed4590121f3d19 2.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide4">
      <img className=" w-full h-full"  src="../../../public/Picks/fe56bd0f218f4c6865ba14ec3461e4e 2.jpg" alt="" />
      </div>

    </div>
            
        </div>
    );
};

export default PicksSlider;