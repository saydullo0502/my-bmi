import { Star, StartHalp } from "../../assets/svg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";

import "./productInformation.css";

function ProductInformationpage() {
  return (
    <div className="container">
      <div className="product_information_full">
        <div className="product_information_slider">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="product_information_slider_img">
                <img
                  src={require("../../assets/img/productInformation1.png")}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product_information_slider_img">
                <img src={require("../../assets/img/cartOneImg.png")} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product_information_slider_img">
                <img src={require("../../assets/img/cartThreeImg.png")} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product_information_slider_img">
                <img src={require("../../assets/img/cart6img.png")} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="product_information_text">
          <h1>Смартфон Apple iPhone 13 Pro 256 ГБ</h1>

          <div className="cart_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StartHalp />
            <p>(123)</p>
          </div>

          <div className="select_memory">
            <h4>Xotira hajmini tanlang</h4>
            <div className="memory_months">
              <div className="memory_month">
                <button>64 GB</button>
              </div>
              <div className="memory_month">
                <button>128 GB</button>
              </div>
              <div className="memory_month">
                <button>256 GB</button>
              </div>
            </div>
          </div>

          <div className="product_price_total">
            <div className="price_total_one">
              <h2>$12.56</h2>
              <p>$45.99</p>
            </div>
            <div className="price_total_button">
              <button>Sotib oling</button>
              <button>Savatch qo'shish</button>
            </div>

            <div className="payment_plan">
              <p>To'lov rejasi</p>
              <div className="payment_plan_full">
                <div className="memory_months">
                  <div className="memory_month">
                    <button>64 GB</button>
                  </div>
                  <div className="memory_month">
                    <button>128 GB</button>
                  </div>
                  <div className="memory_month">
                    <button>256 GB</button>
                  </div>
                </div>
                <h3>$4.56</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInformationpage;
