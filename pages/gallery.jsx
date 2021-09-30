import Image from 'next/image'
import Navbar from '../components/Navbar'
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

function ArrowLeft(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left" + disabled}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    )
}
  
function ArrowRight(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--right" + disabled}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    )
}

const designData = [
    {
        image: '../public/artwork/design/0.jpg'
    },
    {
        image: '../public/artwork/design/1.jpg'
    },
    {
        image: '../public/artwork/design/2.jpg'
    },
    {
        image: '../public/artwork/design/3.jpg'
    },
    {
        image: '../public/artwork/design/4.jpg'
    },
    {
        image: '../public/artwork/design/5.jpg'
    },
    {
        image: '../public/artwork/design/6.jpg'
    },
    {
        image: '../public/artwork/design/7.jpg'
    },
    {
        image: '../public/artwork/design/8.jpg'
    },
    {
        image: '../public/artwork/design/9.jpg'
    },
    {
        image: '../public/artwork/design/10.jpg'
    },
    {
        image: '../public/artwork/design/11.jpg'
    },
    {
        image: '../public/artwork/design/12.jpg'
    },
    {
        image: '../public/artwork/design/13.jpg'
    },
    {
        image: '../public/artwork/design/14.jpg'
    },
    {
        image: '../public/artwork/design/15.jpg'
    },
    {
        image: '../public/artwork/design/16.jpg'
    },
    {
        image: '../public/artwork/design/17.jpg'
    },
    {
        image: '../public/artwork/design/18.jpg'
    },
    {
        image: '../public/artwork/design/19.jpg'
    },
]
export default function Gallery() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, slider] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })
    return (
        <div className="main-gallery">
            <Navbar />
            <div className="gallery">
                <div className="navigation-wrapper">
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1">1</div>
                        <div className="keen-slider__slide number-slide2">2</div>
                        <div className="keen-slider__slide number-slide3">3</div>
                        <div className="keen-slider__slide number-slide4">4</div>
                        <div className="keen-slider__slide number-slide5">5</div>
                        <div className="keen-slider__slide number-slide6">6</div>
                    </div>
                    {slider && (
                      <>
                        <ArrowLeft
                          onClick={(e) => e.stopPropagation() || slider.prev()}
                          disabled={currentSlide === 0}
                        />
                        <ArrowRight
                          onClick={(e) => e.stopPropagation() || slider.next()}
                          disabled={currentSlide === slider.details().size - 1}
                        />
                      </>
                    )}
                </div>
                {slider && (
                  <div className="dots">
                    {[...Array(slider.details().size).keys()].map((idx) => {
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            slider.moveToSlideRelative(idx)
                          }}
                          className={"dot" + (currentSlide === idx ? " active" : "")}
                        />
                      )
                    })}
                  </div>
                )}
    
            </div>
        </div>
    )
}