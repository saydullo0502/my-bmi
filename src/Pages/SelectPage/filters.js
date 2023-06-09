import { ArrowTop } from "../../assets/svg";
import Cart from "../../Components/cart/CartFull";
import "./selectProduct.css";

function Filter() {
  return (
    <div className="container">
      <div className="filter_full">

        <div className="filter_left">

          <div className="Category">
            <div className="category_text">
              <p>Kategoriyalar</p>
              <ArrowTop />
            </div>
            <div className="category_inp">
              <input type="text" placeholder="search" />
            </div>

            <div className="category_check_text">
              <label className="category_checked">
                <input type="checkbox" />
                <p>Samsung (45)</p>
              </label>

              <label className="category_checked">
                <input type="checkbox" />
                <p>Apple (173)</p>
              </label>

              <label className="category_checked">
                <input type="checkbox" />
                <p>Xiaomi (478)</p>
              </label>
              <label className="category_checked">
                <input type="checkbox" />
                <p>Logitech (724)</p>
              </label>
            </div>
          </div>

          <div className="filter_price">
            <div className="price_text">
              <p> Narxi, so'm</p>
              <ArrowTop />
            </div>
            <div className="input_range">
              <input type="range" />
            </div>
          </div>

          <div className="filter_discount">
          <div className="discount_radio_text">
              <p>Chegirma</p>
              <ArrowTop />
            </div>
            <label className="discount_radio">
              <input type="radio"  name="sale"/>
              <p>10% va undan yuqori</p>
            </label>
            <label className="discount_radio">
              <input type="radio"  name="sale"/>
              <p>30% va undan yuqori</p>
            </label>
            <label className="discount_radio">
              <input type="radio"  name="sale"/>
              <p>50% va undan yuqori</p>
            </label>
          </div>
        </div>

        <div className="filter_right">
            <Cart/>
        </div>
      </div>
    </div>
  );
}

export default Filter;
