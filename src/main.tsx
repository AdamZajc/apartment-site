import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";

// Routing Components
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Footer } from "./components";

// Error Components
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "./pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <ErrorBoundary fallback={<ErrorPage />}>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
    <Footer />
  </React.StrictMode>
);
