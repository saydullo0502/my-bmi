import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/footer";
import SelectProduct from "./Pages/SelectPage";
import ProductInformation from "./Pages/ProductInformation";
import YourCart from "./Pages/YourCart";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <div className="App">
    <div>
    <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectProduct" element={<SelectProduct />} />
        <Route path="/productInformation" element={<ProductInformation />} />
        <Route path="/yourCart" element={<YourCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
