import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './styles.css'

const KeenSlider = () => {

     const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 1500)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )

    return (
        <div>
            
<div ref={sliderRef} className="keen-slider   h-[400px] mt-5">
        <div className="keen-slider__slide number-slide1 object-cover"> <img className=" w-full" src="https://i.ibb.co/ZTLS2s1/1537670-4732.jpg" alt="" /> </div>
        <div className="keen-slider__slide number-slide2 object-cover"> <img className=" w-full" src="https://i.ibb.co/7QNd86M/best-friends-shopping.jpg" alt="" /> </div>
        <div className="keen-slider__slide number-slide3 object-cover "> <img className=" w-full" src="https://i.ibb.co/J2XhqQ7/full-shot-woman-online-fashion-shopping.jpg" alt="" /> </div>
        <div className="keen-slider__slide number-slide4 object-cover "> <img className=" w-full" src="https://i.ibb.co/J5dkG9r/friends-going-shopping-antique-store.jpg" alt="" /> </div>
     
      </div>
        </div>
    );
};

export default KeenSlider;