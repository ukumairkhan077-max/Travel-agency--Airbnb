import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";
import "leaflet/dist/leaflet.css";
import "./styles/footer.css"
import "./styles/navbar.css"
import "./styles/searchbar.css"
import "./styles/Listingcard.css"
import "./styles/listingdetail.css"
import "./styles/login.css";
import "./styles/ServiceCard.css";
import "./styles/ServicePage.css";
import "./styles/ServiceDetail.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <AuthProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </AuthProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
