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
                      <>
                        <ArrowLeft
                          onClick={(e) => e.stopPropagation() || slider.prev()}
                        />
                        {/* <ArrowRight
                          onClick={(e) => e.stopPropagation() || slider.next()}
                        /> */}
                      </>
                    )}
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                layout="intrinsic"
                                className="flyer"
                                src='/../public/artwork/design/0.jpg'
                                alt=""
                                height="500"
                                width="386"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/1.jpg'
                                alt=""
                                height="411"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/2.jpg'
                                alt=""
                                height="500"
                                width="326"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/3.jpg'
                                alt=""
                                height="500"
                                width="317"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/4.jpg'
                                alt=""
                                height="500"
                                width="370"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/5.jpg'
                                alt=""
                                height="351"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/6.jpg'
                                alt=""
                                height="500"
                                width="269"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/7.jpg'
                                alt=""
                                height="243"
                                width="400"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/8.jpg'
                                alt=""
                                height="374"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/9.jpg'
                                alt=""
                                height="304"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/10.jpg'
                                alt=""
                                height="389"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/11.jpg'
                                alt=""
                                height="500"
                                width="324"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/12.jpg'
                                alt=""
                                height="443"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/13.jpg'
                                alt=""
                                height="385"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/14.jpg'
                                alt=""
                                height="500"
                                width="326"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/15.jpg'
                                alt=""
                                height="500"
                                width="470"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/16.jpg'
                                alt=""
                                height="500"
                                width="363"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/17.jpg'
                                alt=""
                                height="500"
                                width="383"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/18.jpg'
                                alt=""
                                height="387"
                                width="500"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/19.jpg'
                                alt=""
                                height="500"
                                width="325"
                            />
                        </div>
                    </div>
                    {slider && (
                      <>
                        {/* <ArrowLeft
                          onClick={(e) => e.stopPropagation() || slider.prev()}
                        /> */}
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