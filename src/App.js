import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h />} />
      </Routes>
    </div>
  );
}

export default App;
