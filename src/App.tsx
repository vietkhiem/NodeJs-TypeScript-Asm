import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Foooter from "./components/Footer";
import Banner from "./components/Banner";
import Product from "./pages/product/product";
import Review from "./components/Review";
import BannerBottom from "./components/BannerBottom";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Contact />
      <Signin />
      <Signup />
      <Banner />

      <Product />

      <BannerBottom />

      <Partners />

      <Review />

      <Foooter />
    </div>
  );
}

export default App;
