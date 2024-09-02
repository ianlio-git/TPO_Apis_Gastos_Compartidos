import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Asegúrate de importar Bootstrap Icons

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro
    console.log("Registro con:", name, email, password);
  };

  const buttonClass =
    "px-4 py-2 text-white text-base font-medium rounded-lg w-full shadow-md focus:outline-none focus:ring-2";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-60 backdrop-filter backdrop-blur-sm overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-xl bg-white bg-opacity-90">
        <button
          className="absolute top-2 right-3 flex items-center justify-center text-pink-500 hover:text-pink-700 focus:outline-none"
          style={{ width: "2rem", height: "2rem" }}
          onClick={() => {
            /* Aquí iría la lógica para cerrar el registro */
          }}
        >
          <i className="bi bi-x-circle-fill text-3xl"></i>
        </button>
        <div className="mt-3 text-center">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Crea tu cuenta en Split-it
          </h2>
          <form className="mt-4 px-7 py-3 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre completo"
              className="w-full px-4 py-2 text-gray-700 border rounded-3xl focus:outline-none shadow-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 text-gray-700 border rounded-3xl focus:outline-none shadow-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              className="w-full px-4 py-2 text-gray-700 border rounded-3xl focus:outline-none shadow-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirmar contraseña"
              className="w-full px-4 py-2 text-gray-700 border rounded-3xl focus:outline-none shadow-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className={`${buttonClass} bg-blue-500 hover:bg-blue-700 focus:ring-blue-300`}
            >
              Registrarse
            </button>
          </form>
          <div className="mt-8 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full" />
              </div>
              <div className="relative flex justify-center ">
                <span className="text-gray-500 ">¿Ya tienes una cuenta?</span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => {
                  /* Aquí iría la lógica para volver a la página de inicio */
                }}
                className={`${buttonClass} bg-white text-blue-600 border border-blue-600 hover:bg-gray-50`}
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
