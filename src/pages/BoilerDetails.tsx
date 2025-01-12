import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import boilersData from '../data/boilers.json';

export const BoilerDetails = () => {
  const { id } = useParams();
  const boiler = boilersData.boilers.find(b => b.id === Number(id));

  if (!boiler) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-gray-600">Котел не найден</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="relative h-64 bg-gray-200"
        >
          <img
            src={boiler.image}
            alt={boiler.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="p-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-4"
          >
            {boiler.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-6"
          >
            {boiler.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            {Object.entries(boiler.specifications).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded">
                <h3 className="text-sm font-medium text-gray-500 capitalize">{key}</h3>
                <p className="text-lg font-semibold">{value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-3">Особенности</h2>
            <ul className="list-disc list-inside space-y-2">
              {boiler.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-gray-600"
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {boiler.manual_url && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6"
            >
              <a
                href={boiler.manual_url}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Скачать инструкцию
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
