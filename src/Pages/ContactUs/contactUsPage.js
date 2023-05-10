import { Call, Message } from "../../assets/svg";
import "./contactUs.css";

function ContactUsPage() {
  return (
    <div className="container">
      <div className="contactUs_full">
        <div className="contact_us_text">
          <h1>Contact us</h1>
          <p>
            Bizga so'rovingizni yuboring va biz imkon qadar tezroq siz bilan
            bog'lanamiz
          </p>

          <div className="number_call_full">
            <div className="number_call">
              <Call />
              <input type="tel" placeholder="+99 891 123 45 67" />
            </div>
            <div className="number_call">
              <Message />
              <input type="email" placeholder="mail@gmail.com" />
            </div>
          </div>
        </div>
        <div className="contact_us_login">
            
          <div className="person_contact">
            <p>Ism</p>
            <input type="name" placeholder="Ismingiz" />
          </div>

          <div className="person_contact">
            <p>E-mail</p>
            <input type="email" placeholder="Sizning elektron manzilingiz" />
          </div>

          <div className="person_contact">
            <p>Xabar</p>
            {/* <input type="email" placeholder="Xabaringiz" /> */}
            <textarea placeholder="Xabaringiz"></textarea>
          </div>

          <div className="person_contact_button">
            <button>So'rov yuboring</button>
          </div>




        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
