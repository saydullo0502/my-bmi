import Brand from "../Home/brand";
import Filter from "./filters";
import SearchProduct from "./searchProduct";

function SelectProduct() {
  return (
    <div className="container">
      <SearchProduct />
      <Brand />
      <Filter/>
    </div>
  );
}

export default SelectProduct;
