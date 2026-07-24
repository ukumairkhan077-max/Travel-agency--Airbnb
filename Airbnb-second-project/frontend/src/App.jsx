import Home from "./pages/Home";
import Listing from "./pages/Alllisting";
import Login from "./pages/Login";
import Listingdetail from "./pages/Listingdetail";
import ServicePage from "./pages/ServicePage";
import ServiceDetail from "./pages/ServiceDetail";
import ConfirmPay from "./pages/ConfirmPay/ConfirmPay";

import BecomeHost from "./pages/Host/BecomeHost";
import HostSignup from "./pages/Host/HostSignup";
import HostDashboard from "./pages/Host/HostDashboard";
import CreateHome from "./pages/Host/CreateHome";
import EditHome from "./pages/Host/EditHome";
import MyHomes from "./pages/Host/MyHomes";
import CreateService from "./pages/Host/CreateService";
import EditService from "./pages/Host/EditService";
import MyServices from "./pages/Host/MyServices";
import HostBookings from "./pages/Host/HostBookings";
import HostProfile from "./pages/Host/HostProfile";

import BookingDetails from "./pages/Booking/BookingDetails";
import BookingQuestion from "./pages/Booking/BookingQuestion";
import ThankYou from "./pages/Booking/ThankYou";

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

      {/* Become a Host */}
      <Route path="/become-host" element={<BecomeHost />} />
      <Route path="/host/signup" element={<HostSignup />} />
      <Route path="/host/dashboard" element={<HostDashboard />} />
      <Route path="/host/create-home" element={<CreateHome />} />
      <Route path="/host/edit-home/:id" element={<EditHome />} />
      <Route path="/host/my-homes" element={<MyHomes />} />
      <Route path="/host/create-service" element={<CreateService />} />
      <Route path="/host/edit-service/:id" element={<EditService />} />
      <Route path="/host/my-services" element={<MyServices />} />
      <Route path="/host/bookings" element={<HostBookings />} />
      <Route path="/host/profile" element={<HostProfile />} />

      {/* Booking flow: Reserve -> Booking Details -> Question -> (Service) -> Confirm & Pay -> Thank You */}
      <Route path="/booking/:id/details" element={<BookingDetails />} />
      <Route path="/booking/:id/question" element={<BookingQuestion />} />
      <Route path="/thank-you/:bookingId" element={<ThankYou />} />
      <Route path="/booking/view/:bookingId" element={<ThankYou />} />

    </Routes>
  );
}

export default App;