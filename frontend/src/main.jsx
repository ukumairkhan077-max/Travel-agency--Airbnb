import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/footer.css"
import "./styles/navbar.css"
import "./styles/searchbar.css"
import "./styles/Listingcard.css"
import "./styles/listingdetail.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);