import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  headline: string;
  subheadline: string;
  email: string;
  phone: string;
}

const Contact: React.FC<ContactProps> = ({ headline, subheadline, email, phone }) => {
  return (
    <section id="contact" className="py-16 md:py-24 relative bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 bg-primary-100 border border-primary-200 text-primary-600 text-sm font-medium">
            Kontakt
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4"
            dangerouslySetInnerHTML={{ __html: headline }}
          />
          <p className="text-lg text-gray-600">
            {subheadline}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">E-Mail</p>
                  <a href={`mailto:${email}`} className="text-gray-800 hover:text-primary-500 transition-colors font-medium">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Telefon</p>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-800 hover:text-accent-500 transition-colors font-medium">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Standort</p>
                  <p className="text-gray-800 font-medium">Deutschland</p>
                  <p className="text-gray-500 text-sm mt-1">Bundesweit & International tätig</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
