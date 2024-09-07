import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// Importa tus componentes
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./components/register/RegisterPage";
import LoginPage from "./components/login/LoginPage";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define las rutas aquí */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// Para medir el rendimiento en tu app
reportWebVitals();
