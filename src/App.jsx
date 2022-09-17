import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"

function App() {


  return (
<>
<Link to="/">Home</Link>
<Link to="/product">Products</Link>

    {/* <Navbar /> */}
    <Routes>
    <Route path="/" element={<Home />} />
    <Route exact path="/Product" element={<Product />} />
  </Routes>
  {/* <div className="App">
  <Navbar />
  <Hero />
  <Footer />
  </div> */}
    </>
  )
}

export default App
