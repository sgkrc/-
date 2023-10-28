import React from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
const Home = () => {
  return (
    <div>
      <h1>메인 홈페이지</h1>
      <Button href="/AdminPage">관리자 페이지</Button>

      <Carousel>
        <Carousel.Item>
          <div className="slidercontents">
            <div className="wrapText">
              <h1>Organic fresh fruits for your health</h1>
              <div className="d-none d-md-block">
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor
                  gravida aliquet
                </p>
              </div>
              <button>SHOP NOW</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slidercontents2">
            <div className="wrapText">
              <h1>aaaaaaaaaaaauits for your health</h1>
              <div className="d-none d-md-block">
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor
                  gravida aliquet
                </p>
              </div>
              <button>SHOP NOW</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
