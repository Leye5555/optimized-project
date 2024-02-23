import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./errorboundary";
import ErrorPage from "./components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorPage />}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ErrorBoundary>
  </BrowserRouter>
);
