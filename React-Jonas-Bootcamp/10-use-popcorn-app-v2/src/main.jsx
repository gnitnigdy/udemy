import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import App from "./App-v1.jsx";
import StarRating from "./components/StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* // <StarRating maxRating={5}></StarRating>
  // <StarRating maxRating={10}></StarRating>
  // <StarRating maxRating={100} size={15} color="magenta"></StarRating> */}
  </StrictMode>
);
