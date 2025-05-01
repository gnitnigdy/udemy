import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Calendar from "./CodeChallenge1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Calendar></Calendar> */}
  </StrictMode>
);
