import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home/Intro"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
