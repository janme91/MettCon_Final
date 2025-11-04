import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = 2025;

  return (
    <footer className="relative bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="MettCon Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-gray-900">MettCon</span>
            </div>
            <p className="text-gray-500 mb-4 max-w-md">
              Ihr Partner für strategische Einkaufsberatung und Beschaffungsoptimierung. 
              Professionell, erfahren und zielorientiert.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:kontakt@mettcon.de"
                aria-label="E-Mail an MettCon"
                className="group w-10 h-10 bg-white hover:bg-primary-500 border border-gray-300 hover:border-primary-500 flex items-center justify-center transition-all"
              >
                <Mail className="text-gray-500 group-hover:text-white" size={20} />
              </a>
              <a
                href="tel:+491234567890"
                aria-label="MettCon anrufen"
                className="group w-10 h-10 bg-white hover:bg-primary-500 border border-gray-300 hover:border-primary-500 flex items-center justify-center transition-all"
              >
                <Phone className="text-gray-500 group-hover:text-white" size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MettCon auf LinkedIn"
                className="group w-10 h-10 bg-white hover:bg-primary-500 border border-gray-300 hover:border-primary-500 flex items-center justify-center transition-all"
              >
                <Linkedin className="text-gray-500 group-hover:text-white" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/#home" className="text-gray-500 hover:text-primary-500 transition-colors">Start</a></li>
              <li><a href="/#services" className="text-gray-500 hover:text-primary-500 transition-colors">Leistungen</a></li>
              <li><a href="/#about" className="text-gray-500 hover:text-primary-500 transition-colors">Über mich</a></li>
              <li><a href="/#contact" className="text-gray-500 hover:text-primary-500 transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} MettCon - Jan Mettang. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4">
            <Link to="/impressum" className="text-gray-500 hover:text-primary-500 transition-colors text-sm">Impressum</Link>
            <Link to="/datenschutz" className="text-gray-500 hover:text-primary-500 transition-colors text-sm">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
