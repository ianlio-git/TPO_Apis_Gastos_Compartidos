import React from "react";

function LoginErrorModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-60 backdrop-filter backdrop-blur-sm overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-xl bg-white bg-opacity-90">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Ingreso mal el usuario o la contraseña
          </h3>
          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="px-4 py-2 text-white bg-red-500 hover:bg-red-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginErrorModal;
