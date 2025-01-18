import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { boilers } from "../data/boilers";
import { motion } from "framer-motion";

const BoilerDetails: React.FC = () => {
  const { boilerId, modelId } = useParams();
  const navigate = useNavigate();

  if (!boilerId || !modelId || !boilers[parseInt(boilerId)]) {
    navigate("/");
    return null;
  }

  const boiler = boilers[parseInt(boilerId)];
  const model = boiler.models[parseInt(modelId)];

  if (!model) {
    navigate("/");
    return null;
  }

  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-8 h-screen">
      <motion.div>

      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-start mt-5"
      >
        <img
          src={boiler.img}
          alt="boiler-img"
          width="300"
          height="300"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default BoilerDetails;
