import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Basketcart,
  Eye,
  Like,
  Logo,
  Search,
  Telegram,
} from "../../assets/svg";
import "./navbar.css";
import { useCart } from "../../redux/selectors";

function Navbar() {
  const dataCart = useCart();
  const [isInverted, setInverted] = useState(false);

  const toggleInverted = () => {
    setInverted(!isInverted);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (isInverted) {
      body.classList.add("inverted");
    } else {
      body.classList.remove("inverted");
    }
  }, [isInverted]);

  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <NavLink to={"/"}>
            <div className="logo">
              <Logo />
            </div>
          </NavLink>

          <nav>
            <NavLink to={"/selectProduct"}>
              <span>Mahsulotlar</span>
            </NavLink>
            <NavLink to={"/productInformation"}>
              <span>Biz haqimizda</span>
            </NavLink>
            <NavLink to={"/"}>
              <span>Blogimiz</span>
            </NavLink>
            <NavLink to={"/contactUs"}>
              <span>Aloqalar</span>
            </NavLink>
          </nav>
          <div className="nav_search">
            <Eye onClick={toggleInverted} />

            <Telegram />
            <div className="nav_search_inp">
              <Search />
              <input type="search" placeholder="Search" />
            </div>
            <Like />
            <Basketcart />
            {dataCart?.length || ""}
          </div>
        </header>
      </div>
    </div>
  );
}
export default Navbar;
