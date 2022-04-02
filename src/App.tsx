import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Foooter from "./components/Footer";
import Banner from "./components/Banner";
import Product from "./pages/product/product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />

      <Banner />

      <Product />

      <Foooter />
    </div>
  );
}

export default App;
