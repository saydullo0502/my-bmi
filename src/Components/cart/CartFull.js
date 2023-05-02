import { Basketcart, LikeTop, Star, StartHalp } from "../../assets/svg";
import "./cart.css";

function Cart() {
  return (
    <div className="container">
      <div className="cart_full">
        <div className="cart">
          <div className="cart_like">
            <LikeTop />
          </div>
          <img src={require("../../assets/img/cartOneImg.png")} alt="" />

          <div className="cart_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StartHalp />
            <p>(123)</p>
          </div>
          <h4>Apple iPhone 11 128GB,Slimbox</h4>
          <div className="cart_basket">
            <span>$12.56</span>
            <Basketcart />
          </div>
        </div>

        <div className="cart">
          <div className="cart_like">
            <LikeTop />
          </div>
          <img src={require("../../assets/img/cartTwoImg.png")} alt="" />

          <div className="cart_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StartHalp />
            <p>(123)</p>
          </div>
          <h4>Xiaomi Haylou Solar LS05</h4>
          <div className="cart_basket">
            <span>$12.56</span>
            <Basketcart />
          </div>
        </div>

        <div className="cart">
          <div className="cart_like">
            <LikeTop />
          </div>
          <img src={require("../../assets/img/cartThreeImg.png")} alt="" />

          <div className="cart_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StartHalp />
            <p>(123)</p>
          </div>
          <h4>Apple iPhone 13 128GB,Slimbox</h4>
          <div className="cart_basket">
            <span>$12.56</span>
            <Basketcart />
          </div>
        </div>

        <div className="cart">
          <div className="cart_like">
            <LikeTop />
          </div>
          <img src={require("../../assets/img/cart4img.png")} alt="" />

          <div className="cart_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StartHalp />
            <p>(123)</p>
          </div>
          <h4>Wood lamp, Floor Lamp</h4>
          <div className="cart_basket">
            <span>$12.56</span>
            <Basketcart />
          </div>
        </div>
        <div className="cart">
          <div className="cart_like">
            <LikeTop />
          </div>
          <img src={require("../../assets/img/cart5img.png")} alt="" />

          <div className="cart_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StartHalp />
            <p>(123)</p>
          </div>
          <h4>Vonna Neva Walnut Sandalye</h4>
          <div className="cart_basket">
            <span>$12.56</span>
            <Basketcart />
          </div>
        </div>
        <div className="cart">
          <div className="cart_like">
            <LikeTop />
          </div>
          <img src={require("../../assets/img/cart6img.png")} alt="" />

          <div className="cart_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StartHalp />
            <p>(123)</p>
          </div>
          <h4>Xiaomi Mi simsiz naushniklar</h4>
          <div className="cart_basket">
            <span>$12.56</span>
            <Basketcart />
          </div>
        </div>
        <div className="cart">
          <div className="cart_like">
            <LikeTop />
          </div>
          <img src={require("../../assets/img/cartOneImg.png")} alt="" />

          <div className="cart_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StartHalp />
            <p>(123)</p>
          </div>
          <h4>Apple iPhone 11 128GB,Slimbox</h4>
          <div className="cart_basket">
            <span>$12.56</span>
            <Basketcart />
          </div>
        </div>

        <div className="cart">
          <div className="cart_like">
            <LikeTop />
          </div>
          <img src={require("../../assets/img/cartTwoImg.png")} alt="" />

          <div className="cart_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StartHalp />
            <p>(123)</p>
          </div>
          <h4>Xiaomi Haylou Solar LS05</h4>
          <div className="cart_basket">
            <span>$12.56</span>
            <Basketcart />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;
