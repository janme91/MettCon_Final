import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ImpressumPage: React.FC = () => {
  return (
    <section id="impressum" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Impressum</h1>
        <div className="prose max-w-none bg-gray-50 p-8 border border-gray-200">
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>
            Jan Mettang<br />
            MettCon - Strategische Einkaufsberatung<br />
            Musterstra&szlig;e 111<br />
            12345 Musterstadt
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 4567890<br />
            E-Mail: jan.mettang@mettcon.de
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
            DE123456789
          </p>

          <h2>Redaktionell verantwortlich</h2>
          <p>Jan Mettang</p>

          <h3>Haftungsausschluss</h3>
          <p>
            Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter Sorgfalt erstellt. F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte k&ouml;nnen wir jedoch keine Gew&auml;hr &uuml;bernehmen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpressumPage;
