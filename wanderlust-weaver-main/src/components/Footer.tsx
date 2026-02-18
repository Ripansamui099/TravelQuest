import { Link } from "react-router-dom";
import { Plane, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80 py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-background mb-4">
            <Plane className="h-6 w-6" />
            Wanderlust
          </Link>
          <p className="text-sm leading-relaxed opacity-70">
            Crafting unforgettable travel experiences to the world's most stunning destinations since 2020.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-background mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/destinations" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Destinations</Link>
            <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-background mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm opacity-70">
              <Mail className="h-4 w-4" /> hello@wanderlust.com
            </div>
            <div className="flex items-center gap-2 text-sm opacity-70">
              <Phone className="h-4 w-4" /> +1 (555) 123-4567
            </div>
            <div className="flex items-center gap-2 text-sm opacity-70">
              <MapPin className="h-4 w-4" /> New York, NY
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm opacity-50">
        © 2026 Wanderlust Travel. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
