import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "tailwindcss";
import React from "react";
import UserProvider from "./context/UserContext";
import ThemeProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ThemeProvider>
      <BrowserRouter basename="/E-learning-Project">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </UserProvider>

);