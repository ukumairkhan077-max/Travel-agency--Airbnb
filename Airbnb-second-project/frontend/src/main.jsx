import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
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
      <App />
    </BrowserRouter>
  </StrictMode>
);