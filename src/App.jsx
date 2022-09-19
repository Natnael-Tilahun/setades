import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Product/Products";
import ProductDetail from "./pages/Product/ProductDetail";
import About_us from "./pages/About_us";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="/Products/:productId" element={<ProductDetail />} />
        <Route path="About_us" element={<About_us />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
