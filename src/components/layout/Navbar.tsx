import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Boiler Info
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Главная
            </Link>
            <Link
              to="/admin"
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Админ панель
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
