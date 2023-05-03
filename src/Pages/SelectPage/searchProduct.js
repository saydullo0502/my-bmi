import { Search } from "../../assets/svg";
import "./selectProduct.css";

function SearchProduct() {
  return (
    <div className="container">
      <div className="search_center">
        <div className="search_center_inp">
          <Search />
          <input type="search" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
