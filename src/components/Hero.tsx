import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  headline: string;
  subheadline: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline }) => {
  return (
    <section id="home" className="relative bg-white pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="space-y-8 max-w-4xl">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary-50 border border-primary-200 text-primary-600 text-sm font-medium">
                Einkaufsberatung & Procurement
              </span>
            </div>
            
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              dangerouslySetInnerHTML={{ __html: headline }}
            />
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group px-8 py-4 bg-primary-500 text-white hover:bg-primary-600 transition-all duration-200 font-medium text-center flex items-center justify-center space-x-2"
              >
                <span>Jetzt Kontakt aufnehmen</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 transition-all duration-200 font-medium text-center"
              >
                Leistungen entdecken
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
