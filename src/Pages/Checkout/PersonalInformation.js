import { NavLink } from "react-router-dom";
import "./personalInformation.css";

function PersonalInformation() {
  return (
    <div className="container">
      <div className="personalInformation_full">
        <h1>Checkout</h1>
        <div className="personalInformation">
          <h2>Shaxsiy ma'lumotlar</h2>

          <div className="personalInformation_inp">
            <div className="person_address">
              <p>Ism</p>
              <input type="name" placeholder="Ismingiz" />
            </div>

            <div className="person_address">
              <p>Telefon raqami</p>
              <input type="tel" placeholder="99 123 45 67" required />
            </div>
          </div>
        </div>

        <div className="personalInformation">
          <h2>Manzil</h2>

          <div className="personalInformation_inp">
            <div className="person_address">
              <p>Viloyat</p>
              <input type="name" placeholder="Viloyat nomi" />
            </div>

            <div className="person_address">
              <p>Tuman</p>
              <input type="name" placeholder="Tuman nomi" required />
            </div>
          </div>
        </div>

        <div className="person_address_address">
          <p>Manzil</p>
          <input type="name" placeholder="Manzil nomi" required />
        </div>

        <div className="person_address_address_button">
          <NavLink to={"/payment"}>
            <button>Davom eting</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
