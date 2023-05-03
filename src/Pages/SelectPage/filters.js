import { ArrowTop } from "../../assets/svg";
import Cart from "../../Components/Cart/CartFull";
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
              <div className="category_checked">
                <input type="checkbox" />
                <p>Samsung (45)</p>
              </div>

              <div className="category_checked">
                <input type="checkbox" />
                <p>Apple (173)</p>
              </div>

              <div className="category_checked">
                <input type="checkbox" />
                <p>Xiaomi (478)</p>
              </div>
              <div className="category_checked">
                <input type="checkbox" />
                <p>Logitech (724)</p>
              </div>
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
            <div className="discount_radio">
              <input type="radio" />
              <p>10% va undan yuqori</p>
            </div>
            <div className="discount_radio">
              <input type="radio" />
              <p>30% va undan yuqori</p>
            </div>
            <div className="discount_radio">
              <input type="radio" />
              <p>50% va undan yuqori</p>
            </div>
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
