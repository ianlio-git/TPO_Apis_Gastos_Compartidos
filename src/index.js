import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//our components
// import App from "./app/App"; //testing component
import LandingPage from "./landing page/LandingPage";
import RegisterPage from "./register/RegisterPage";
import LoginPage from "./loging page/LoginPage";
import ErrorLogin from "./loging page/error page/LoginPageErr";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // comenta con ctrl + / para poder ver las otras pantallas
  <React.StrictMode>
    {/* <App /> */}
    <LandingPage />
    <RegisterPage />
    <LoginPage />
    <ErrorLogin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
