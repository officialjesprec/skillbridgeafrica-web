import React from "react";
import ReactDOM from "react-dom/client";
// 1. Move CSS to the top
import './index.css';
import App from "./App";

// 2. Add a small safety check for the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element. Check your index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);