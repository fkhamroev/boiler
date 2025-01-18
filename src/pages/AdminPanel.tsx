import { useState } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { boilers } from "../data/boilers";

const ADMIN_CREDENTIALS = {
  login: "admin@mail.ru",
  password: "adminjon",
};

export const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedBoiler, setSelectedBoiler] = useState<{
    boilerId: number;
    modelId: number;
  } | null>(null);
  const [loginError, setLoginError] = useState("");
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setLoginError("");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.login === ADMIN_CREDENTIALS.login &&
      formData.password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      toast.success("Вы успешно вошли в админ панель");
      setLoginError("");
    } else {
      setLoginError("Неверный логин или пароль");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-gray-100 h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Вход в админ панель
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Логин
            </label>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              placeholder="Введите логин"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              placeholder="Введите пароль"
            />
          </div>
          {loginError && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-2"
            >
              {loginError}
            </motion.p>
          )}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Войти
          </button>
        </form>
      </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto mt-8 p-6"
    >
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Админ панель</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
          >
            Выйти
          </button>
        </div>

        <div className="grid gap-6">
          <Link
            to="/catalog"
            className="block p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Каталог котлов
            </h2>
            <p className="text-blue-600">
              Управление каталогом котлов, просмотр деталей и редактирование
              информации
            </p>
          </Link>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Список котлов</h2>
            <div className="grid grid-cols-1 gap-6">
              {boilers.map((boiler, boilerIndex) => (
                <div key={boilerIndex} className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">{boiler.name}</h2>
                  <div className="grid gap-4">
                    {boiler.models.map((model, modelIndex) => (
                      <div
                        key={modelIndex}
                        className="bg-white p-4 rounded-lg shadow"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">{model.model}</h3>
                          <button
                            onClick={() =>
                              setSelectedBoiler({
                                boilerId: boilerIndex,
                                modelId: modelIndex,
                              })
                            }
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                          >
                            Сгенерировать QR
                          </button>
                        </div>

                        {selectedBoiler?.boilerId === boilerIndex &&
                          selectedBoiler?.modelId === modelIndex && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="mt-4"
                            >
                              <QRCodeSVG
                                value={`${window.location.origin}/boiler/${boilerIndex}/${modelIndex}`}
                                size={128}
                                level="H"
                                includeMargin={true}
                              />
                            </motion.div>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
