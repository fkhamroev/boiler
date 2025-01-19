import { useState } from "react";
import { motion } from "framer-motion";
import { boilers } from "@/data/boilers";
import { BoilerCard } from "@/components/boiler/BoilerCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  // Получаем уникальные бренды
  const brands = ["all", ...new Set(boilers.map((boiler) => boiler.id))];

  // Фильтруем бойлеры
  const filteredBoilers = boilers.filter((boiler) => {
    const matchesBrand = selectedBrand === "all" || boiler.id === selectedBrand;
    const matchesSearch = boiler.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      boiler.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      boiler.models.some(model => 
        model.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 mt-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-72">
                <Select
                  value={selectedBrand}
                  onValueChange={setSelectedBrand}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите бренд" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">Все бренды</SelectItem>
                      {brands.filter(brand => brand !== "all").map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {boilers.find(b => b.id === brand)?.brand || brand}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <Input
                type="search"
                  placeholder="Поиск по названию или описанию..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBoilers.map((boiler) => (
                <BoilerCard
                  key={boiler.id}
                  id={boiler.id}
                  brand={boiler.brand}
                  description={boiler.description}
                  img={boiler.img}
                  models={boiler.models}
                />
              ))}

              {filteredBoilers.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">
                    По вашему запросу ничего не найдено
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
