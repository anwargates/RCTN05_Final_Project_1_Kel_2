import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Indonesia from './pages/Indonesia'
// import Covid from './pages/COVID-19'
// import Programming from './pages/Programming'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import { CartProvider } from "react-use-cart";
import Routes from "./Router";

function App() {
  return (
    <>
      <div className="">
        <CartProvider>
          <Navbar />
          <Routes />
          <Footer />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
