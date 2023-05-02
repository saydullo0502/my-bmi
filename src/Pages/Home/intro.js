import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay,Navigation } from "swiper";
import "swiper/css/navigation";

import "./home.css";
import { Diskont } from "../../assets/svg";

function Intro() {
  return (
    <div className="container">
      <div className="intro">
        <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
            <SwiperSlide>
              <div className="intro_swiper">
                <div className="intro_text">
                  <h1>Online Shop</h1>
                  <h3>Sizning onlayn do'koningiz</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsa assumenda sit, quod dolore ducimus maiores rerum
                    possimus consectetur amet maxime quos laborum? Perspic
                    quibusdam.
                  </p>
                  <div className="intro_sum_diskont">
                    <span>
                      <Diskont />
                    </span>
                    <h3>$500</h3>
                    <h4>$45.99</h4>
                  </div>
                  <div className="intro_btn">
                    <button>Add to card</button>
                    <button>Discover</button>
                  </div>
                </div>
                <div className="intro_product">
                  <img src={require("../../assets/img/intro_one.png")} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="intro_swiper">
                <div className="intro_text">
                  <h1>Online Shop</h1>
                  <h3>Sizning onlayn do'koningiz</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsa assumenda sit, quod dolore ducimus maiores rerum
                    possimus consectetur amet maxime quos laborum? Perspic
                    quibusdam.
                  </p>
                  <div className="intro_sum_diskont">
                    <span>
                      <Diskont />
                    </span>
                    <h3>$500</h3>
                    <h4>$45.99</h4>
                  </div>
                  <div className="intro_btn">
                    <button>Add to card</button>
                    <button>Discover</button>
                  </div>
                </div>
                <div className="intro_product">
                  <img src={require("../../assets/img/intro_one.png")} alt="" />
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="intro_swiper">
                <div className="intro_text">
                  <h1>Online Shop</h1>
                  <h3>Sizning onlayn do'koningiz</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsa assumenda sit, quod dolore ducimus maiores rerum
                    possimus consectetur amet maxime quos laborum? Perspic
                    quibusdam.
                  </p>
                  <div className="intro_sum_diskont">
                    <span>
                      <Diskont />
                    </span>
                    <h3>$500</h3>
                    <h4>$45.99</h4>
                  </div>
                  <div className="intro_btn">
                    <button>Add to card</button>
                    <button>Discover</button>
                  </div>
                </div>
                <div className="intro_product">
                  <img src={require("../../assets/img/intro_one.png")} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}

export default Intro;
