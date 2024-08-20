import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styless.css"
import photo from '../../../public/Product/product1.jpg'
import photo1 from '../../../public/Product/product2.jpg'
import photo2 from '../../../public/Product/product3.jpg'
import photo3 from '../../../public/Product/product4.jpg'



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
        <img className=" w-full h-full" src={photo} alt="" />
      </div>
      <div className="keen-slider__slide number-slide2">
      <img className=" w-full h-full" src={photo1} alt="" />
      </div>
      <div className="keen-slider__slide number-slide3">
      <img className=" w-full h-full"  src={photo2} alt="" />
      </div>
      <div className="keen-slider__slide number-slide4">
      <img className=" w-full h-full"  src={photo3} alt="" />
      </div>

    </div>
  )
}
