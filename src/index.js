import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { CategoryProvider } from "./Components/Context/CategoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </React.StrictMode>
);
