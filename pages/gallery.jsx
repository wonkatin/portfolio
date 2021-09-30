import Image from 'next/image'
import Navbar from '../components/Navbar'
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
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/0.png'
                                alt=""
                                height="500"
                                width="386"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/1.png'
                                alt=""
                                height="411"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/2.png'
                                alt=""
                                height="500"
                                width="326"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/3.png'
                                alt=""
                                height="500"
                                width="317"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/4.png'
                                alt=""
                                height="500"
                                width="370"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/5.png'
                                alt=""
                                height="351"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/6.png'
                                alt=""
                                height="500"
                                width="269"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/7.png'
                                alt=""
                                height="243"
                                width="400"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/8.png'
                                alt=""
                                height="374"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/9.png'
                                alt=""
                                height="304"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/10.png'
                                alt=""
                                height="389"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/11.png'
                                alt=""
                                height="500"
                                width="324"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/12.png'
                                alt=""
                                height="443"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/13.png'
                                alt=""
                                height="385"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/14.png'
                                alt=""
                                height="500"
                                width="326"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/15.png'
                                alt=""
                                height="500"
                                width="470"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/16.png'
                                alt=""
                                height="500"
                                width="363"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/17.png'
                                alt=""
                                height="500"
                                width="383"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/18.png'
                                alt=""
                                height="387"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/artwork/design/19.png'
                                alt=""
                                height="500"
                                width="325"
                            />
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
            </div>
        </div>
    )
}