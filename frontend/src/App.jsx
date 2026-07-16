import Home from "./pages/Home";
import Listing from "./pages/Alllisting";
import Listingdetail from "./pages/Listingdetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<Listing />} />
      <Route path="/listing/:id" element={<Listingdetail />} />
    </Routes>
  );
}

export default App;