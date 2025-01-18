import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { boilers } from '../data/boilers';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Каталог котлов
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {boilers.map((boiler, boilerIndex) => (
          <motion.div
            key={boilerIndex}
            variants={item}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{boiler.name}</h2>
              <p className="text-gray-600 mb-6">{boiler.description}</p>
              
              <div className="space-y-3">
                {boiler.models.map((model, modelIndex) => (
                  <Link
                    key={modelIndex}
                    to={`/boiler/${boilerIndex}/${modelIndex}`}
                    className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{model.model}</span>
                      <span className="text-blue-600">{model.powerOutput.CH} кВт</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      КПД: {model.efficiency} • {model.flowRate}
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
