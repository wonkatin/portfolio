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
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                // className="pic"
                                src='/../public/artwork/design/0.jpg'
                                // alt='a picture of Kitchen Sink app, an app that searches for recipes'
                                height="788"
                                width="600"
                            />
                        </div>
                        <div className="keen-slider__slide">2</div>
                        <div className="keen-slider__slide">3</div>
                        <div className="keen-slider__slide">4</div>
                        <div className="keen-slider__slide">5</div>
                        <div className="keen-slider__slide">6</div>
                        <div className="keen-slider__slide">7</div>
                        <div className="keen-slider__slide">8</div>
                        <div className="keen-slider__slide">9</div>
                        <div className="keen-slider__slide">10</div>
                        <div className="keen-slider__slide">11</div>
                        <div className="keen-slider__slide">12</div>
                        <div className="keen-slider__slide">13</div>
                        <div className="keen-slider__slide">14</div>
                        <div className="keen-slider__slide">15</div>
                        <div className="keen-slider__slide">16</div>
                        <div className="keen-slider__slide">6</div>
                        <div className="keen-slider__slide">6</div>
                        <div className="keen-slider__slide">6</div>
                        <div className="keen-slider__slide">6</div>
                    </div>
                    {slider && (
                      <>
                        <ArrowLeft
                          onClick={(e) => e.stopPropagation() || slider.prev()}
                        />
                        <ArrowRight
                          onClick={(e) => e.stopPropagation() || slider.next()}
                        />
                      </>
                    )}
                </div>
            </div>
        </div>
    )
}