import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styless.css"

export default () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img className=" w-full h-full" src="../../../public/Product/product1.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide2">
      <img className=" w-full h-full" src="../../../public/Product/product2.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide3">
      <img className=" w-full h-full"  src="../../../public/Product/product3.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide4">
      <img className=" w-full h-full"  src="../../../public/Product/product4.jpg" alt="" />
      </div>

    </div>
  )
}
