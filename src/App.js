import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ProductDetail from "./components/ProductDetail";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";
import Board from "./components/Board";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/goods/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
}

export default App;
