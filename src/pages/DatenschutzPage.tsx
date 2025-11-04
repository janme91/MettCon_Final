import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DatenschutzPage: React.FC = () => {
  return (
    <section id="datenschutz" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Datenschutzerklärung</h1>
        <div className="prose max-w-none bg-white p-8 border border-gray-200">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.</p>
          
          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p>
          
          <h3>Verantwortliche Stelle</h3>
          <p>
            Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:<br />
            Jan Mettang<br />
            Musterstra&szlig;e 111<br />
            12345 Musterstadt<br />
            Telefon: +49 (0) 123 4567890<br />
            E-Mail: jan.mettang@mettcon.de
          </p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</p>
        </div>
      </div>
    </section>
  );
};

export default DatenschutzPage;
