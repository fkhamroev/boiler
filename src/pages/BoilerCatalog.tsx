import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { boilers } from '../data/boilers';

const BoilerCatalog: React.FC = () => {
  return (
    <div className=" mx-auto p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {boilers.map((boiler, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{boiler.name}</h2>
              <p className="text-gray-600 mb-4">{boiler.description}</p>
              
              <div className="space-y-3">
                {boiler.models.map((model, modelIndex) => (
                  <Link
                    key={modelIndex}
                    to={`/boiler/${index}/${modelIndex}`}
                    className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">{model.model}</h3>
                      <span className="text-blue-600 font-medium">{model.powerOutput.CH} кВт</span>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                      <span>КПД: {model.efficiency}</span>
                      <span>•</span>
                      <span>{model.flowRate}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BoilerCatalog;
