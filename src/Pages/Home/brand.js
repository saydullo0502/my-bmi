import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function Brand() {
  return (
    <div className="container">
      <>
        <div className="brand_full">
          <h1>Bizning mahsulotlarimiz.</h1>
          <button>Hammasini ko'rish</button>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            "@2.0": {
              slidesPerView: 5,
              spaceBetween: 60,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="brand_model">
              <img src={require("../../assets/img/bosch-logo-slider 1.png")} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="brand_model">
              <img src={require("../../assets/img/indesit-logo-slider.png")} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="brand_model">
              <img src={require("../../assets/img/samsung-logo-slider.png")} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="brand_model">
              <img src={require("../../assets/img/LG_logo.png")} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="brand_model">
              <img src={require("../../assets/img/mi-logo-slider.png")} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="brand_model">
              <img src={require("../../assets/img/Philips-Wordmark.png")} alt="" />
            </div>
          </SwiperSlide>

        </Swiper>

      </>
    </div>
  );
}

export default Brand;
