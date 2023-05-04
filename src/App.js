import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/footer";
import SelectProduct from "./Pages/SelectPage";
import ProductInformation from "./Pages/ProductInformation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectProduct" element={<SelectProduct />} />
        {/* <Route path="/productInformation" element={<ProductInformation />} /> */}
        <Route path="/productInformation" element={<ProductInformation/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
