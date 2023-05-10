import { Star, StartHalp } from "../../assets/svg";

import "./productInformation.css";

function CustomerReviews() {
  return (
    <div className="container">
      <div className="customerReviews_full">
        <div className="brand_full">
          <h1>Mijozlarning sharhlari.</h1>
          <button>Ko'rib chiqish</button>
        </div>

        <div className="customerReviews">
          <div className="customerReviews_star">
            <div className="customerReviews_star_text">
              <h1>4,1</h1>
              <div className="star_text_svg">
                <p>124 sharh</p>
                <div className="cart_star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StartHalp />
                </div>
              </div>
            </div>
            <div className="hr"></div>
            <img src={require("../../assets/img/reviews_star.png")} alt="" />
          </div>
          <div className="customerReviews_cart">
            <div className="customerReviews_cart_right">
              <img
                src={require("../../assets/img/caruselProfile.png")}
                alt=""
              />
              <div className="cus_cart_profile">
                <h2>Onlayn</h2>
                <span>12.09.2023</span>
              </div>
              <div className="carusel_svg">
                <Star />
                <Star />
                <Star />
                <Star />
                <StartHalp />
              </div>
            </div>
            <p>
              Model juda muvaffaqiyatli, chiroyli dizayn. Ekranning yuqori
              qismidagi qalqib chiquvchi menyu old kameradan ikkita maydonga
              bo'lingan
            </p>
            <div className="cus_cart_img">
              <img src={require("../../assets/img/cusproImg1.png")} alt="" />
              <img src={require("../../assets/img/cusproImgcart2.png")} alt="" />
            </div>
            <div className="hr"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
