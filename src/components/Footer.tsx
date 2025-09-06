import { Instagram, MessageCircle, Phone, MapPin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-salon-purple text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Samaya Salon</h3>
            <p className="text-salon-purple-light mb-6 max-w-md">
              Your trusted destination for professional beauty services. We specialize in hair, nails, 
              makeup, and professional nail art training. Experience luxury and expertise at Samaya Salon.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/919328731878?text=Hi! I would like to book an appointment at Samaya Salon." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/samayasalonforher/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                target="_blank" 
                href="https://www.google.com/maps/place/Samaya+Salon+for+her/@20.950699,72.9223022,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0f703bf0c3251:0x73c5b0903e12f4d6!8m2!3d20.950699!4d72.9248771!16s%2Fg%2F11xv_8qysp?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-salon-purple-light hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-salon-purple-light hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-salon-purple-light hover:text-white transition-colors">About Us</a></li>
              <li><a href="#nail-classes" className="text-salon-purple-light hover:text-white transition-colors">Nail Classes</a></li>
              <li><a href="#reviews" className="text-salon-purple-light hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-salon-purple-light hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-salon-purple-light" />
                <div>
                  {/*  near Het physiotherapy, Dudhiya Talav, Asha Nagar, Navsari, Gujarat 396445 */}
                  <p className="text-sm">Straight from, Backside Sapphire Apt, Asha Nagar Circle</p>
                  <p className="text-sm">Near Het physiotherapy, Dudhiya Talav, Navsari, Gujarat 396445</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-salon-purple-light" />
                <div>
                  <p className="text-sm">+91 93287 31878</p>
                </div>
              </div>
               
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-salon-purple-light text-sm">
              © {currentYear} Samaya Salon. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-salon-purple-light">Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span className="text-salon-purple-light">for beautiful transformations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;