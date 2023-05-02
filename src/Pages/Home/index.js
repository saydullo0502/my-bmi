import Cart from "../../Components/Cart/CartFull";
import Blog from "./blog";
import Brand from "./brand";
import Carusel from "./carusel";
import Intro from "./Intro";


function Home() {
  return (
    <div className="container">
      <Intro />
      <Brand />
      <Cart/>
      <Blog/>
      <Carusel/>
    </div>
  );
}

export default Home;

