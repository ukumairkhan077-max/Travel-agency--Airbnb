import Home from "./pages/Home";
import Listing from "./pages/Alllisting";
import Login from "./pages/Login";
import Listingdetail from "./pages/Listingdetail";
import ServicePage from "./pages/ServicePage";
import ServiceDetail from "./pages/ServiceDetail";
import ConfirmPay from "./pages/ConfirmPay/ConfirmPay";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<Listing />} />
      <Route path="/listing/:id" element={<Listingdetail />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirm-pay/:id" element={<ConfirmPay />} />

    </Routes>
  );
}

export default App;