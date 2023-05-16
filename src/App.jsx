import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Index";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;