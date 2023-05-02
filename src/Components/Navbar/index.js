import { NavLink } from "react-router-dom";
import { Basketcart, Like, Logo, Search, Telegram } from "../../assets/svg";
import "./navbar.css";

function Navbar() {
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
            <NavLink>
              <span>Biz haqimizda</span>
            </NavLink>
            <NavLink>
              <span>Blogimiz</span>
            </NavLink>
            <NavLink>
              <span>Aloqalar</span>
            </NavLink>
          </nav>
          <div className="nav_search">
            <Telegram />
            <div className="nav_search_inp">
              <Search />
              <input type="search" placeholder="Search" />
            </div>
            <Like />
            <Basketcart />
          </div>
        </header>
      </div>
    </div>
  );
}
export default Navbar;
