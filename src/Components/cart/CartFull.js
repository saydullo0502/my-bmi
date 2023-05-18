import { useNavigate, NavLink } from "react-router-dom";
import { Basketcart, LikeTop, Star, StartHalp } from "../../assets/svg";
import "./cart.css";
import { useDispatch } from "react-redux";
import { setProduct } from "../../redux/cart";
import { useCart } from "../../redux/selectors";
import { useMemo } from "react";

function Cart({ item = { id: 8 } }) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const dataProducts = useCart();
  const isBuyedProduct = useMemo(
    () => dataProducts.find((product) => product?.id === item?.id),
    [dataProducts]
  );

  console.log(isBuyedProduct);

  return (
    <div className="container">
      <div className="cart_full">
        <div className="cart">
          <div className="cart_like">
            <LikeTop />
          </div>
          <NavLink to={"/yourCart"}>
            <img src={require("../../assets/img/cartOneImg.png")} alt="" />
          </NavLink>

          <div className="cart_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StartHalp />
            <p>(123)</p>
          </div>
          <h4>Apple iPhone 11 128GB,Slimbox</h4>
          <div
            className="cart_basket"
            onClick={() =>
              isBuyedProduct
                ? navigate("/yourCart")
                : setProduct(item, dispatch, "+")
            }
          >
            <span>$12.56</span>
            {isBuyedProduct ? "BUYED" : <Basketcart />}
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
          <div
            className="cart_basket"
            onClick={() => setProduct(item, dispatch, "+")}
          >
            <span>$12.56</span>
            {isBuyedProduct ? "BUYED" : <Basketcart />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
