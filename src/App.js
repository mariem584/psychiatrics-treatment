import AboutUs from "./pages/About Us/AboutUs";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Location from "./pages/location/Location";
import Services from "./pages/services/Services";
import SingleService from "./pages/single service/SingleService";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Account from "./pages/account/Account";

import Testiomoials from "./pages/Testimoials/Testiomoials";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about us" Component={AboutUs}></Route>
        <Route path="/team" Component={Team}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/location" Component={Location}></Route>
        <Route path="/testimonials" Component={Testiomoials}></Route>

        <Route path="/services" Component={Services}></Route>
        <Route path="/single service" Component={SingleService}></Route>
        <Route path="/product" Component={Products}></Route>
        <Route path="/cart" Component={Cart}></Route>
        <Route path="/checkout" Component={Checkout}></Route>
        <Route path="/my account" Component={Account}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
