import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NoPage from "./pages/NoPage"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="Products" element={ <Products />} />
        <Route path="*" element={ <NoPage/> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
