import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProduct } from "../../redux/cart";
import { useCart } from "../../redux/selectors";
import { Remove } from "../../assets/svg";
import "./yourCart.css";

function YourCartPage() {
  const dispatch = useDispatch();
  const dataCart = useCart();

  return (
    <div className="container">
      <div className="yourCartPag_full">
        <div className="your_cart_page_text">
          <h1>Sizning savatingiz.</h1>
          <p>
            {dataCart?.length ? `${dataCart?.length}ta mahsulot` : "Savatcha bo'sh"}
          </p>
        </div>
        <div className="hr_bot"></div>

        <div className="your_cart_full">
          <div className="your_cart_left">
            {/* <div className="card_res_full">
              <div className="card_full_img">
                <img src={require("../../assets/img/cardIphone2.png")} alt="" />
                <p className="card_p">
                  Smartfon Apple iPhone 13 Pro 256 GB, grafitovy
                  <br />
                  <span>ID: 45463424</span>
                </p>
              </div>

              <div className="score">
                <span onClick={()=> setProduct(products[1],'-')}>-</span>
                <p>2</p>
                <span onClick={()=> setProduct(products[1],'+')}>+</span>
              </div>
              <div className="your_price">
                <span>$24.56</span>
              </div>
              <span>
                <Remove />
              </span>
            </div> */}

            {dataCart.map((item) => {
              return (
                <div key={item.id} className="card_res_full">
                  <div className="card_full_img">
                    <img
                      src={require("../../assets/img/cardRedmi1.png")}
                      alt=""
                    />
                    <p className="card_p">
                      Smartfon Xiaomi Redmi 9 4/64GB (NFC), yashil <br />
                      <span>ID: 12543645</span>
                    </p>
                  </div>

                  <div className="score">
                    <span onClick={() => setProduct(item, dispatch, "-")}>
                      -
                    </span>
                    <p>{(item.count && item.count) || 1}</p>
                    <span onClick={() => setProduct(item, dispatch, "+")}>
                      +
                    </span>
                  </div>
                  <div className="your_price">
                    <span>$12.56</span>
                  </div>
                  <span onClick={() => setProduct(item, dispatch, "x")}>
                    <Remove />
                  </span>
                </div>
              );
            })}

            <div className="keep_shop">
              <NavLink to={"/checkout"}>
                <button>Xarid qilishda davom eting</button>
              </NavLink>
            </div>
          </div>

          <div className="your_cart_right">
            <div className="your_cart_right_cost">
              <p>Narxi:</p>
              <span>$24.56</span>
            </div>
            <div className="your_cart_right_cost">
              <p>Chegirma:</p>
              <span>$2.00</span>
            </div>
            <div className="your_cart_right_cost">
              <p>Yetkazib berish narxi:</p>
              <span>0</span>
            </div>
            <div className="your_hr"></div>
            <div className="your_cart_right_cost">
              <p>Jami:</p>
              <span>$22.56</span>
            </div>
            <div className="your_cart_right_button">
              <button>Ro'yxatdan o'chirilish</button>
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
              </div>
            </div>

            <div className="your_cart_right_cost">
              <p>Oylik to'lov:</p>
              <span>$3.76</span>
            </div>

            <div className="your_cart_right_button_click">
              <button>Bo'lib-bo'lib sotib oling</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourCartPage;
