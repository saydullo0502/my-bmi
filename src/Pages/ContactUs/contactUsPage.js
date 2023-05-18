import { toast } from "react-hot-toast";
import { Call, Message } from "../../assets/svg";
import "./contactUs.css";
import Services from "../../services/request";
import { useForm } from "react-hook-form";
import CONSTANTS from "../../config/constants";

function ContactUsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const errorsStyle = {
    true: {
      border: "1px solid red",
    },
    false: {},
  };

  const { TELEGRAM_API, BOT_TOKEN, CHAT_ID, BOT_CHAT_TYPE } = CONSTANTS;

  const onSubmit = (data) => {
    const [w, f, e, m] = [
      `@online_react_shop_bot 🎯%0A`,
      `Name: ${data.first_name}%0A`,
      `Email: ${data.email}%0A`,
      `Telfon: ${data.telfon}%0A`,
    ];
    const botMessege = w + f + e + m;
    // setLoader(true);
    Services.getRequest(
      `${TELEGRAM_API}/${BOT_TOKEN}/sendMessage?${CHAT_ID}&text=${botMessege}&${BOT_CHAT_TYPE}`
    ).then(({ data }) => {
      if (data?.ok) {
        toast.success("Muvaffaqiyatli");
        // setLoader(false);
        reset();
      }
      if (!data?.ok) {
        toast.error("Muvaffaqiyatsiz");
        // setLoader(false);
      }
    });
  };

  return (
    <div className="container" id="contact-us">
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
              <input disabled type="tel" placeholder="+99 891 123 45 67" />
            </div>
            <div className="number_call">
              <Message />
              <input disabled type="email" placeholder="mail@gmail.com" />
            </div>
          </div>
        </div>
        <div className="contact_us_login">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="person_contact">
              <p>Ism</p>
              <input
                type="name"
                placeholder="Ismingiz"
                {...register("first_name", { required: true })}
                style={errorsStyle[!!errors.first_name]}
              />
            </div>

            <div className="person_contact">
              <p>E-mail</p>
              <input
                type="email"
                placeholder="Sizning elektron manzilingiz"
                {...register("email", { required: true })}
                style={errorsStyle[!!errors.email]}
              />
            </div>

        
              {/* <p>Xabar</p> */}
              {/* <input type="email" placeholder="Xabaringiz" /> */}
              {/* <textarea
                {...register("message", { required: true })}
                placeholder="Xabaringiz"
              ></textarea> */}
              <div className="person_contact">
                <p>Telefon raqami</p>
                <input
                  type="tel"
                  placeholder="Sizning raqamingiz"
                  required
                  {...register("telfon", { required: true })}
                />
              </div>
           

            <div className="person_contact_button">
              <button>So'rov yuboring</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
