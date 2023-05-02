import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/footer";
import SelectProduct from "./Pages/SelectPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectProduct" element={<SelectProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
