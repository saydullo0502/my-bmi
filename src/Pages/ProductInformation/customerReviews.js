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
          <div className="customerReviews_cart"></div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
