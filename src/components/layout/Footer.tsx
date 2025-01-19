import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "О компании",
      links: [
        { label: "О нас", href: "/about" },
        { label: "Наша команда", href: "/team" },
        { label: "Вакансии", href: "/careers" },
      ],
    },
    {
      title: "Услуги",
      links: [
        { label: "Установка", href: "/services/installation" },
        { label: "Ремонт", href: "/services/repair" },
        { label: "Обслуживание", href: "/services/maintenance" },
      ],
    },
    {
      title: "Поддержка",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Контакты", href: "/contacts" },
        { label: "Сервисные центры", href: "/service-centers" },
      ],
    },
  ];

  const contacts = [
    {
      icon: <Phone className="h-4 w-4" />,
      label: "+998 90 123 45 67",
      href: "tel:+998901234567",
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: "info@boilers.uz",
      href: "mailto:info@boilers.uz",
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "г. Ташкент, ул. Примерная, 123",
      href: "https://maps.google.com",
    },
  ];

  const socials = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Контактная информация */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {contact.icon}
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>
            <div className="pt-4 flex items-center space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Ссылки */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Нижняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            {currentYear} Boiler Info. Все права защищены
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="link" size="sm">
              Политика конфиденциальности
            </Button>
            <Button variant="link" size="sm">
              Условия использования
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
