import React from "react";
import Weather from "./Weather";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
