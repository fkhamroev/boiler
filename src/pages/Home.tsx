import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { boilers } from "@/data/boilers";
import { BoilerCard } from "@/components/boiler/BoilerCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bg from "@/assets/bg.png";

export const Home = () => {
  const featuredBoilers = boilers.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={bg} 
            alt="background" 
            className="w-full h-full object-cover opacity-40 dark:opacity-20"
          />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Найдите идеальный бойлер для вашего дома
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Широкий выбор современных и эффективных бойлеров от ведущих производителей
            </p>
            <Button asChild size="lg">
              <Link to="/catalog">
                Перейти в каталог
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Boilers Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Популярные модели</h2>
            <p className="text-muted-foreground">
              Ознакомьтесь с нашими лучшими предложениями
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBoilers.map((boiler) => (
              <BoilerCard
                key={boiler.id}
                id={boiler.id}
                brand={boiler.brand}
                description={boiler.description}
                img={boiler.img}
                models={boiler.models}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/catalog">
                Смотреть все бойлеры
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
