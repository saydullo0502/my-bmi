import { Star, StartHalp } from "../../assets/svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./home.css";

function Carusel() {
  return (
    <>
      <div className="container">
        <div className="carusel_text">
          <h1>Mijozlar nima deyishadi</h1>
        </div>

        <div className="carusel_full">
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
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="carusel">
                <div className="carusel_profile">
                  <img
                    src={require("../../assets/img/caruselProfile.png")}
                    alt=""
                  />
                  <div className="car_pro_name">
                    <h2>Onlayn</h2>
                    <span>12.09.2023</span>
                  </div>
                </div>
                <div className="carusel_svg">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StartHalp />
                </div>

                <p>
                  Model juda muvaffaqiyatli, chiroyli dizayn. Ekranning yuqori
                  qismidagi qalqib chiquvchi menyu old kameradan ikkita maydonga
                  bo'lingan
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="carusel">
                <div className="carusel_profile">
                  <img
                    src={require("../../assets/img/caruselProfile.png")}
                    alt=""
                  />
                  <div className="car_pro_name">
                    <h2>Onlayn</h2>
                    <span>12.09.2023</span>
                  </div>
                </div>
                <div className="carusel_svg">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StartHalp />
                </div>

                <p>
                  Model juda muvaffaqiyatli, chiroyli dizayn. Ekranning yuqori
                  qismidagi qalqib chiquvchi menyu old kameradan ikkita maydonga
                  bo'lingan
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carusel">
                <div className="carusel_profile">
                  <img
                    src={require("../../assets/img/caruselProfile.png")}
                    alt=""
                  />
                  <div className="car_pro_name">
                    <h2>Onlayn</h2>
                    <span>12.09.2023</span>
                  </div>
                </div>
                <div className="carusel_svg">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StartHalp />
                </div>

                <p>
                  Model juda muvaffaqiyatli, chiroyli dizayn. Ekranning yuqori
                  qismidagi qalqib chiquvchi menyu old kameradan ikkita maydonga
                  bo'lingan
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carusel">
                <div className="carusel_profile">
                  <img
                    src={require("../../assets/img/caruselProfile.png")}
                    alt=""
                  />
                  <div className="car_pro_name">
                    <h2>Onlayn</h2>
                    <span>12.09.2023</span>
                  </div>
                </div>
                <div className="carusel_svg">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StartHalp />
                </div>

                <p>
                  Model juda muvaffaqiyatli, chiroyli dizayn. Ekranning yuqori
                  qismidagi qalqib chiquvchi menyu old kameradan ikkita maydonga
                  bo'lingan
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carusel">
                <div className="carusel_profile">
                  <img
                    src={require("../../assets/img/caruselProfile.png")}
                    alt=""
                  />
                  <div className="car_pro_name">
                    <h2>Onlayn</h2>
                    <span>12.09.2023</span>
                  </div>
                </div>
                <div className="carusel_svg">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StartHalp />
                </div>

                <p>
                  Model juda muvaffaqiyatli, chiroyli dizayn. Ekranning yuqori
                  qismidagi qalqib chiquvchi menyu old kameradan ikkita maydonga
                  bo'lingan
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Carusel;
