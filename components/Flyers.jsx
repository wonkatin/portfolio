import Image from 'next/image'
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

function ArrowLeft(props) {
    return (
      <svg
        onClick={props.onClick}
        className="arrow arrow--left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    )
}
  
function ArrowRight(props) {
    return (
      <svg
        onClick={props.onClick}
        className="arrow arrow--right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    )
}

export default function Flyers() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, slider] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })
    return (   
        <div className="not-gallery">
            {slider && (
              <div>
                <ArrowLeft
                  onClick={(e) => e.stopPropagation() || slider.prev()}
                />
                {/* <ArrowRight
                  onClick={(e) => e.stopPropagation() || slider.next()}
                /> */}
              </div>
            )}
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image0.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image1.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image2.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image3.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image4.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image5.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image6.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image7.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image8.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image9.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image10.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image11.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image12.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image13.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image14.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image15.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image16.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image17.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image18.png' alt="" />
                    </div>
                    <div className="keen-slider__slide">
                        <img src='/artwork/design/image19.png' alt="" />
                    </div>
                </div>
            </div>
            {slider && (
              <div>
                {/* <ArrowLeft
                  onClick={(e) => e.stopPropagation() || slider.prev()}
                /> */}
                <ArrowRight
                  onClick={(e) => e.stopPropagation() || slider.next()}
                />
              </div>
            )}
        </div>
    )
}