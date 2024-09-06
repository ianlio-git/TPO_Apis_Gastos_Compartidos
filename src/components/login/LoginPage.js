import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Asegúrate de importar Bootstrap Icons
import { Route } from "react-router-dom";

function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de inicio de sesión
    console.log(
      "Inicio de sesión con:",
      email,
      password,
      "Recuérdame:",
      rememberMe
    );

    <link to="../pages/Dashboard"></link>;
  };

  const buttonClass =
    "px-4 py-2 text-white text-base font-medium rounded-lg w-full shadow-md focus:outline-none focus:ring-2";

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-60 backdrop-filter backdrop-blur-sm overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-xl bg-white bg-opacity-90">
        <button
          className="absolute top-2 right-3 flex items-center justify-center text-pink-500 hover:text-pink-700 focus:outline-none"
          style={{ width: "2rem", height: "2rem" }}
          onClick={onClose}
        >
          <i className="bi bi-x-circle-fill text-3xl"></i>
        </button>
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Bienvenido a Split-it!
          </h3>
          {/* Aca esta el form  */}
          <form className="mt-4 px-7 py-3 space-y-4" onSubmit={handleSubmit}>
            {" "}
            <input
              type="email"
              className="w-full px-4 py-2 text-gray-700 border rounded-3xl focus:outline-none shadow-md hover:border-blue-600"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full px-4 py-2 text-gray-700 border rounded-3xl focus:outline-none shadow-md hover:border-blue-600"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded "
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Recuérdame
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
                onClick={() => {
                  // Lógica para recuperación de contraseña
                  console.log("Recuperar contraseña");
                }}
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <button
              type="submit"
              className={`${buttonClass} bg-blue-500 hover:bg-blue-700 focus:ring-blue-300`}
            >
              Iniciar Sesión
            </button>
          </form>
          <div className="mt-13 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta?{" "}
              <a
                href="#"
                className="font-bold text-blue-600 hover:underline"
                onClick={() => {
                  // Lógica para redirigir al registro
                  console.log("Redirigir a registro");
                }}
              >
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
