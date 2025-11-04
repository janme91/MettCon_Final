import React from 'react';
import { 
  ShoppingCart, 
  FileText, 
  Handshake, 
  Users, 
  TrendingUp, 
  Calculator,
  Icon as LucideIcon
} from 'lucide-react';

const icons: { [key: string]: LucideIcon } = {
  ShoppingCart,
  FileText,
  Handshake,
  Users,
  TrendingUp,
  Calculator,
};

export interface StaticService {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof icons;
  color: 'primary' | 'accent';
}

interface ServicesProps {
  headline: string;
  subheadline: string;
  services: StaticService[];
}

const Services: React.FC<ServicesProps> = ({ headline, subheadline, services }) => {
  return (
    <section id="services" className="py-16 md:py-24 relative bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-primary-100 border border-primary-200 text-primary-600 text-sm font-medium">
            Leistungsspektrum
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4"
            dangerouslySetInnerHTML={{ __html: headline }}
          />
          <p className="text-lg text-gray-600">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = icons[service.icon];
            const colorClass = service.color === 'primary' ? 'bg-primary-500' : 'bg-accent-500';

            return (
              <div
                key={service.id}
                className="group relative bg-white p-6 lg:p-8 border border-gray-200 hover:border-primary-500 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="relative">
                  <div className={`w-16 h-16 ${colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {Icon && <Icon size={32} />}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
