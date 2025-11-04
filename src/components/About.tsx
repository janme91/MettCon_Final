import React from 'react';
import { Award, Target, Globe, Lightbulb } from 'lucide-react';

interface AboutProps {
  headline: string;
  subheadline: string;
  personalDescription: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ headline, subheadline, personalDescription }) => {
  const values = [
    {
      icon: <Award size={24} />,
      title: 'Expertise',
      description: 'Langjährige Erfahrung in strategischem Einkauf, mit Spezialisierung auf CAPEX.',
    },
    {
      icon: <Target size={24} />,
      title: 'Zielorientiert',
      description: 'Fokussierung auf messbare Ergebnisse und nachhaltige Kostenoptimierung',
    },
    {
      icon: <Globe size={24} />,
      title: 'International',
      description: 'Erfahrung mit nationalen und internationalen Lieferanten und Projekten',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation',
      description: 'Moderne Methoden und bewährte Best Practices für Ihren Erfolg',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col gap-12 items-center">
          <div className="space-y-8 text-center flex flex-col items-center w-full max-w-3xl">
            <div>
              <span className="px-4 py-2 bg-primary-100 border border-primary-200 text-primary-600 text-sm font-medium">
                Über MettCon
              </span>
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4"
                dangerouslySetInnerHTML={{ __html: headline }}
              />
              <p className="text-lg text-gray-600 leading-relaxed">
                {subheadline}
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-3xl">
            <div className="relative bg-gray-50 p-8 lg:p-12 border border-gray-200">
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="/portrait.png" 
                    alt="Portrait von Jan Mettang"
                    className="w-[300px] h-[300px] object-cover bg-gray-200 flex-shrink-0 rounded-lg shadow-md"
                  />
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-gray-900">Jan Mettang</h3>
                    <p className="text-primary-500 font-medium">Inhaber & Berater</p>
                  </div>
                </div>

                <div className="h-px bg-primary-200" />

                <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                  {personalDescription}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-50 flex items-center justify-center flex-shrink-0 border border-primary-200">
                        <div className="text-primary-500">
                          {value.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">{value.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
