import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const bgColors = [
  'bg-gradient-to-r from-blue-100 to-cyan-100',
  'bg-gradient-to-r from-gray-100 to-blue-100',
  'bg-gradient-to-r from-cyan-100 to-teal-100',
];

export const ClientLayout = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState(bgColors[0]);

  // Change background color based on route
  useEffect(() => {
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    setBgColor(randomColor);
  }, [location.pathname]);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${bgColor}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 py-8"
      >
        <Outlet />
      </motion.div>
    </div>
  );
};
