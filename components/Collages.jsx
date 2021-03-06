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

export default function Collages() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, slider] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })
    return (   
      <div className="gallery-container-left">
        <div className="inner-gallery">
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
                      <Image
                        src="/artwork/collages/fineart0.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart0.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart1.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart1.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart2.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart2.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart3.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart3.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart4.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart4.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart5.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart5.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart6.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart6.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart7.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart7.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart8.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart8.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart9.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart9.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart10.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart10.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart11.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart11.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart12.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart12.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart13.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart13.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart14.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart14.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart15.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart15.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart16.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart16.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart17.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart17.png' alt="" /> */}
                    </div>
                    <div className="keen-slider__slide">
                      <Image
                        src="/artwork/collages/fineart18.png"
                        alt=""
                        width="500"
                        height="500"
                      />
                        {/* <img src='/artwork/collages/fineart18.png' alt="" /> */}
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
    )
}