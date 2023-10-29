import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//https://blog.naver.com/PostView.naver?blogId=jaeeun_98&logNo=222835174514  참고한 사이트

export default function SimpleSlider() {
  const [sliderInitialized, setSliderInitialized] = useState(false);
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    autoplay: true,
  };

  useEffect(() => {
    setSliderInitialized(true);
  }, []);

  return (
    <div className="slidediv">
      {sliderInitialized && (
        <Slider {...settings}>
          <div>
            <img src="/images/cat.jpg" alt="img" />
          </div>
          <div>
            <img src="/images/eva.jpg" alt="img" />
          </div>
          <div>
            <img src="/images/hockney.jpg" alt="img" />
          </div>
          <div>
            <img src="/images/lux.jpg" alt="img" />
          </div>
          <div>
            <img src="/images/still.jpg" alt="img" />
          </div>
          <div>
            <img src="/images/van.jpg" alt="img" />
          </div>
        </Slider>
      )}
    </div>
  );
}
