import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "../../assets/Bitmap (8).png";
import { Phone, Home, Info, Settings } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-background/95 border-b backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center p-4">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              className="w-24 object-cover hover:scale-105 transition-transform duration-300" 
              src={logo} 
              alt="Логотип" 
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home size={18} />} text="Главная" />
            <NavLink to="/info" icon={<Info size={18} />} text="О нас" />
            <NavLink to="/services" icon={<Settings size={18} />} text="Услуги" />
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Phone className="mr-2 h-4 w-4" />
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link 
    to={to}
    className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-300"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Header;
