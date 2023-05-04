import CustomerReviews from "./customerReviews";
import ProductAbout from "./productAbout";
import ProductInformationpage from "./productInformationpage";
import Cart from "../../Components/Cart/CartFull";
import RelatedProducts from "./relatedProducts";

function ProductInformation() {
  return (
    <div className="container">
      <ProductInformationpage />
      <ProductAbout />
      <CustomerReviews />
      <RelatedProducts/>
      <Cart />
    </div>
  );
}

export default ProductInformation;
