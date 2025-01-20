import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { boilers } from "@/data/boilers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Printer, QrCode, Lock } from "lucide-react";
import { toast } from "react-hot-toast";

const ADMIN_CREDENTIALS = {
  login: "megastroy",
  password: "1515",
};

// Функция для получения базового URL в зависимости от окружения
const getBaseUrl = () => {
  // В production используем реальный домен
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_BASE_URL || window.location.origin;
  }
  // В development используем localhost
  return window.location.origin;
};

export const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });
  const [selectedBoiler, setSelectedBoiler] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [showQR, setShowQR] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const boiler = boilers.find((b) => b.id === selectedBoiler);
  const model = boiler?.models.find((m) => m.id === selectedModel);

  // const handlePrint = useReactToPrint({
  //   content: () => printRef.current,
  //   documentTitle: `QR Code - ${boiler?.brand}${model ? ` - ${model.name}` : ""}`,
  //   removeAfterPrint: true,
  //   onAfterPrint: () => {
  //     toast.success("QR-код успешно отправлен на печать");
  //   },
  //   onPrintError: () => {
  //     toast.error("Ошибка при печати QR-кода");
  //   },
  // });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      loginData.login === ADMIN_CREDENTIALS.login &&
      loginData.password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      toast.success("Вы успешно вошли в систему");
    } else {
      toast.error("Неверный логин или пароль");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Генерация URL для QR-кода
  const generateQrUrl = () => {
    if (!selectedBoiler || !selectedModel) return "";
    
    const baseUrl = getBaseUrl();
    return `${baseUrl}/catalog/${selectedBoiler}/${selectedModel}`;
  };

  const qrUrl = generateQrUrl();

  // Функция для тестирования URL
  const handleTestUrl = () => {
    if (!qrUrl) {
      toast.error("Выберите модель бойлера");
      return;
    }

    try {
      window.open(qrUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      toast.error("Ошибка при открытии URL");
      console.error("Error opening URL:", error);
    }
  };

  const handleGenerateQR = () => {
    if (!selectedBoiler || !selectedModel) {
      toast.error("Выберите бойлер и модель");
      return;
    }
    setShowQR(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-8 mt-20">
          <div className="container max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Вход в админ панель
                  </CardTitle>
                  <CardDescription>
                    Введите ваши учетные данные для входа
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login">Логин</Label>
                      <Input
                        id="login"
                        name="login"
                        type="text"
                        value={loginData.login}
                        onChange={handleInputChange}
                        placeholder="Введите логин"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Пароль</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        placeholder="Введите пароль"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Войти
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
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
            <div className="text-center">
              <h1 className="text-4xl font-bold">Админ панель</h1>
              <p className="text-muted-foreground mt-2">
                Управление QR-кодами для бойлеров
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Генерация QR-кода</CardTitle>
                <CardDescription>
                  Выберите производителя и модель для создания QR-кода
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Производитель</Label>
                    <Select
                      value={selectedBoiler}
                      onValueChange={(value) => {
                        setSelectedBoiler(value);
                        setSelectedModel("");
                        setShowQR(false);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите производителя" />
                      </SelectTrigger>
                      <SelectContent>
                        {boilers.map((boiler) => (
                          <SelectItem key={boiler.id} value={boiler.id}>
                            {boiler.brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Модель</Label>
                    <Select
                      value={selectedModel}
                      onValueChange={(value) => {
                        setSelectedModel(value);
                        setShowQR(false);
                      }}
                      disabled={!selectedBoiler}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите модель" />
                      </SelectTrigger>
                      <SelectContent>
                        {boiler?.models.map((model) => (
                          <SelectItem key={model.id} value={model.id}>
                            {model.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    type="button"
                    onClick={handleGenerateQR}
                    disabled={!selectedBoiler || !selectedModel}
                  >
                    <QrCode className="w-4 h-4 mr-2" />
                    Сгенерировать QR-код
                  </Button>
                </div>

                {showQR && qrUrl && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center space-y-4"
                  >
                    <div
                      ref={printRef}
                      className="p-8 bg-white rounded-lg shadow-lg"
                    >
                      <div className="text-center mb-4">
                        <h3 className="font-bold">{boiler?.brand}</h3>
                        {model && (
                          <p className="text-sm text-muted-foreground">
                            {model.name}
                          </p>
                        )}
                      </div>
                      <QRCodeSVG
                        value={qrUrl}
                        size={200}
                        level="H"
                        includeMargin
                      />
                      <p className="mt-4 text-xs text-muted-foreground break-all">
                        {qrUrl}
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        // onClick={() => {
                        //   if (printRef.current) {
                        //     handlePrint();
                        //   }
                        // }}
                      >
                        <Printer className="w-4 h-4 mr-2" />
                        Печать QR-кода
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleTestUrl}
                      >
                        <QrCode className="w-4 h-4 mr-2" />
                        Тестировать QR-код
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
