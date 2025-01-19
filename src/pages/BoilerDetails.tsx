import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { boilers } from "@/data/boilers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Ruler, Settings, Info } from "lucide-react";
import { toast } from "react-hot-toast";

export const BoilerDetails = () => {
  const { brandId, modelId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("specifications");

  // Находим бойлер и модель
  const boiler = boilers.find((b) => b.id === brandId);
  const model = boiler?.models.find((m) => m.id === modelId);

  useEffect(() => {
    if (!boiler || !model) {
      toast.error("Бойлер не найден");
      navigate("/catalog");
    }
  }, [boiler, model, navigate]);

  if (!boiler || !model) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 mt-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="p-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold">{boiler.brand}</h1>
                <p className="text-muted-foreground">{model.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-4">
                  <img
                    src={boiler.img}
                    alt={`${boiler.brand} ${model.name}`}
                    className="w-full h-auto rounded-lg"
                  />
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Tabs
                  defaultValue="specifications"
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="specifications">
                      <Info className="h-4 w-4 mr-2" />
                      Характеристики
                    </TabsTrigger>
                    <TabsTrigger value="features">
                      <Settings className="h-4 w-4 mr-2" />
                      Функции
                    </TabsTrigger>
                    <TabsTrigger value="dimensions">
                      <Ruler className="h-4 w-4 mr-2" />
                      Размеры
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="specifications" className="space-y-4">
                    <Card className="p-6">
                      <dl className="space-y-4">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Мощность</dt>
                          <dd className="font-medium">{model.power}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">КПД</dt>
                          <dd className="font-medium">{model.efficiency}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">
                            Расход воды
                          </dt>
                          <dd className="font-medium">{model.flowRate}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Вес</dt>
                          <dd className="font-medium">{model.weight}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Гарантия</dt>
                          <dd className="font-medium">{model.warranty}</dd>
                        </div>
                      </dl>
                    </Card>
                  </TabsContent>

                  <TabsContent value="features" className="space-y-4">
                    <Card className="p-6">
                      <ul className="space-y-2">
                        {model.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-muted-foreground"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </TabsContent>

                  <TabsContent value="dimensions" className="space-y-4">
                    <Card className="p-6">
                      <dl className="space-y-4">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Высота</dt>
                          <dd className="font-medium">
                            {model.dimensions.height}
                          </dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Ширина</dt>
                          <dd className="font-medium">
                            {model.dimensions.width}
                          </dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Глубина</dt>
                          <dd className="font-medium">
                            {model.dimensions.depth}
                          </dd>
                        </div>
                      </dl>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Описание</h2>
              <p className="text-muted-foreground">{boiler.description}</p>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
