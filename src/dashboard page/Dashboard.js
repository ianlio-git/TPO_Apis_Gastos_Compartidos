import React from "react";

export default function Dashboard() {
  const activities = [
    { name: "Ana", amount: 25, description: "Cena", date: "2023-05-15" },
    { name: "Carlos", amount: -15, description: "Taxi", date: "2023-05-14" },
    { name: "Elena", amount: 40, description: "Compras", date: "2023-05-13" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-green-600">Splitwise</h1>
        </div>
        <nav className="mt-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-200"
          >
            <i className="bi bi-house-door mr-3 text-xl"></i>
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <i className="bi bi-people mr-3 text-xl"></i>
            Grupos
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <i className="bi bi-gear mr-3 text-xl"></i>
            Configuración
          </a>
        </nav>
        <div className="absolute bottom-0 p-4 w-64">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold text-gray-700">Saldo total</h3>
            <p className="text-2xl font-bold text-green-600">$150.00</p>
            <p className="text-sm text-gray-500">Te deben</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Actividad reciente</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <i className="bi bi-plus-lg mr-2"></i>
            Agregar gasto
          </button>
        </div>

        {/* Recent activity */}
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 flex items-center"
            >
              <div className="bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center text-xl font-semibold">
                {activity.name[0]}
              </div>
              <div className="ml-4 flex-1">
                <p className="font-semibold">{activity.name}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
              <div className="text-right">
                <p
                  className={`font-semibold ${
                    activity.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {activity.amount > 0
                    ? `+$${activity.amount}`
                    : `-$${Math.abs(activity.amount)}`}
                </p>
                <p className="text-sm text-gray-500">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
