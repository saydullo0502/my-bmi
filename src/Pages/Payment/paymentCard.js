import { NavLink } from "react-router-dom";
import "./paymentCard.css";

function PaymentCard() {
  return (
    <div className="container">
      <div className="payment_full_card_pay">
        <div className="paymeCard_full">
          <h1>To'lov usulini tanlang</h1>
          <div className="card_tape_full">
            <p>Karta turi</p>
            <div className="card_type">
              <a href="https://payme.uz/">
                <img src={require("../../assets/img/payme.png")} alt="" />
              </a>
              <a href="https://click.uz">
                <img src={require("../../assets/img/click.png")} alt="" />
              </a>
              <img src={require("../../assets/img/visa.png")} alt="" />
            </div>
          </div>
          <div className="card_number">
            <p>Karta raqami</p>
            <input type="number" placeholder="0000 0000 0000 0000" />
          </div>
          <div className="expiry_date">
            <p>Yaroqlilik muddati</p>
            <input type="number" placeholder="01/01" />
          </div>
          <div className="hr_card_payment"></div>
          <div className="total_amount">
            <p>Umumiy hisob</p>
            <span>$12.56</span>
          </div>

          <NavLink to={"/contactUs"}>
            <div className="payment_button_card">
              <span>$12.56</span>
              <p>Davom eting</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
