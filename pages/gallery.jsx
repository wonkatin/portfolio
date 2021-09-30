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
                                className="flyer"
                                src='/../public/artwork/design/0.jpg'
                                alt=""
                                height="788"
                                width="600"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/1.jpg'
                                alt=""
                                height="657"
                                width="800"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/2.jpg'
                                alt=""
                                height="614"
                                width="400"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/3.jpg'
                                alt=""
                                height="1263"
                                width="800"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/4.jpg'
                                alt=""
                                height="1082"
                                width="800"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/5.jpg'
                                alt=""
                                height="701"
                                width="1000"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/6.jpg'
                                alt=""
                                height="931"
                                width="500"
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
                                height="747"
                                width="1000"
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
                                height="777"
                                width="1000"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/11.jpg'
                                alt=""
                                height="1545"
                                width="1000"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/12.jpg'
                                alt=""
                                height="682"
                                width="769"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/13.jpg'
                                alt=""
                                height="770"
                                width="1000"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/14.jpg'
                                alt=""
                                height="1535"
                                width="1000"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/15.jpg'
                                alt=""
                                height="1063"
                                width="1000"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/16.jpg'
                                alt=""
                                height="1377"
                                width="1000"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/17.jpg'
                                alt=""
                                height="1304"
                                width="1000"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/18.jpg'
                                alt=""
                                height="774"
                                width="1000"
                            />
                        </div>
                        <div className="keen-slider__slide">
                            <Image
                                loading="eager"
                                className="flyer"
                                src='/../public/artwork/design/19.jpg'
                                alt=""
                                height="1537"
                                width="1000"
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