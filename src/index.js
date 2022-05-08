import React from "react";
import Search from "./Weather";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
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
