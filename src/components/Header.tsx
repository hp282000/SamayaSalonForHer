import { useState } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Nail Classes", href: "#nail-classes" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold bg-salon-gradient bg-clip-text text-transparent mb-8">
            Samaya Salon <span className="text-sm newclass">for her</span>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/919328731878?text=Hi! I would like to book an appointment at Samaya Salon."
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/samayasalon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button variant="default" className="bg-salon-gradient hover:bg-salon-gradient-dark">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://wa.me/919328731878?text=Hi! I would like to book an appointment at Samaya Salon."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/samayasalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <Button variant="default" className="bg-salon-gradient hover:bg-salon-gradient-dark">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;