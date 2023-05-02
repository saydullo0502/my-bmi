import { NavLink } from "react-router-dom";
import { Logo, Telegram } from "../../assets/svg";
import "./footer.css";

function Footer() {
  return (
    <div className="footer_full">
      <div className="container">
        <div className="footer_link">
          <NavLink>
            <span>Mahsulotlar</span>
          </NavLink>

          <NavLink>
            <span>Biz haqimizda</span>
          </NavLink>
          <NavLink to={"/"}>
              <div className="logo">
            <Logo />
          </div> 
          </NavLink>

          <NavLink>
            <span>Blogimiz</span>
          </NavLink>
          <NavLink>
            <span>Aloqalar</span>
          </NavLink>
        </div>
        <div className="hr"></div>

        <div className="footer_blog">
          <Telegram />
          <p>Barcha huquqlar himoyalangan</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
