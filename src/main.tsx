import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Footer } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <App />
    </Router>
    <Footer />
  </React.StrictMode>
);
