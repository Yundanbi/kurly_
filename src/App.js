import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ProductDetail from "./components/ProductDetail";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";
<<<<<<< HEAD
import Board from "./components/Board";
=======
>>>>>>> b290e75fd9c51aabf55e6835013a82df54b8e2cd

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/goods/:id" element={<ProductDetail />} />
<<<<<<< HEAD
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/board" element={<Board />} />
=======
      <Route path="/cart" element={<Cart />} /> {/* ✅ 장바구니 경로 추가 */}
      <Route path="/login" element={<Login />} />
>>>>>>> b290e75fd9c51aabf55e6835013a82df54b8e2cd
    </Routes>
  );
}

export default App;
