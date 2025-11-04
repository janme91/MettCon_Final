import React from 'react';
import Hero from '../components/Hero';
import Services, { StaticService } from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  const pageContent = {
    heroHeadline: "Strategische <span class='text-primary'>Einkaufsberatung</span>, die Werte schafft.",
    heroSubheadline: "Als Ihr persönlicher Partner im Procurement optimiere ich Ihre Beschaffungsprozesse und realisiere nachhaltige Einsparungen – mit klarer Spezialisierung auf den Einkauf von Investitionsgütern (CAPEX).",
    servicesHeadline: "Mein <span class='text-primary'>Leistungsspektrum</span> für Ihren Erfolg.",
    servicesSubheadline: "Von der Analyse bis zur finalen Verhandlung – ich decke den gesamten strategischen Einkaufsprozess für Sie ab.",
    aboutHeadline: "Erfahrung & Expertise: <span class='text-primary'>Jan Mettang</span>.",
    aboutSubheadline: "Lernen Sie die Person hinter MettCon und meine Arbeitsweise kennen.",
    aboutPersonalDescription: (
      <p>
        Mit über 15 Jahren Erfahrung im strategischen Einkauf unterstütze ich Unternehmen dabei, ihre Beschaffung zu professionalisieren und signifikante Kostenvorteile zu erzielen. Meine Leidenschaft gilt komplexen technischen Projekten und dem CAPEX-Einkauf, wo ich durch analytische Tiefe und Verhandlungsgeschick messbare Erfolge für meine Kunden schaffe. Als Ihr direkter Ansprechpartner stehe ich für Transparenz, Zuverlässigkeit und eine partnerschaftliche Zusammenarbeit.
      </p>
    ),
    contactHeadline: "Lassen Sie uns <span class='text-primary'>sprechen</span>.",
    contactSubheadline: "Ich freue mich darauf, mehr über Ihre Herausforderungen zu erfahren und gemeinsam Lösungen zu entwickeln. Kontaktieren Sie mich für ein unverbindliches Erstgespräch.",
    contactEmail: "jan.mettang@mettcon.de",
    contactPhone: "+49 123 4567890",
  };

  const services: StaticService[] = [
    {
      id: '1',
      title: 'Strategische Einkaufsberatung',
      description: 'Umfassende Beratung für Investitionsgüter und komplexe technische Projekte, von der Bedarfsanalyse bis zur Strategieentwicklung.',
      icon: 'TrendingUp',
      color: 'primary',
    },
    {
      id: '2',
      title: 'Ausschreibungsmanagement',
      description: 'Professionelle Durchführung und Steuerung von Ausschreibungsprozessen (RFI/RFQ/RFP) zur Sicherstellung optimaler Ergebnisse.',
      icon: 'FileText',
      color: 'accent',
    },
    {
      id: '3',
      title: 'Vertrags- & Preisverhandlungen',
      description: 'Führung von Verhandlungen mit nationalen und internationalen Lieferanten, um bestmögliche Konditionen und Verträge zu sichern.',
      icon: 'Handshake',
      color: 'primary',
    },
    {
      id: '4',
      title: 'Lieferantenanalyse & -entwicklung',
      description: 'Systematische Bewertung, Auswahl und Entwicklung von Lieferanten zur Stärkung Ihrer Lieferkette und zur Risikominimierung.',
      icon: 'Users',
      color: 'accent',
    },
    {
      id: '5',
      title: 'Projektbegleitung bei Investitionen',
      description: 'Aktive Unterstützung bei Greenfield- und Modernisierungsprojekten, um eine termingerechte und budgetkonforme Umsetzung zu gewährleisten.',
      icon: 'ShoppingCart',
      color: 'primary',
    },
  ];

  return (
    <>
      <Hero
        headline={pageContent.heroHeadline}
        subheadline={pageContent.heroSubheadline}
      />
      <Services
        headline={pageContent.servicesHeadline}
        subheadline={pageContent.servicesSubheadline}
        services={services}
      />
      <About
        headline={pageContent.aboutHeadline}
        subheadline={pageContent.aboutSubheadline}
        personalDescription={pageContent.aboutPersonalDescription}
      />
      <Contact
        headline={pageContent.contactHeadline}
        subheadline={pageContent.contactSubheadline}
        email={pageContent.contactEmail}
        phone={pageContent.contactPhone}
      />
    </>
  );
};

export default HomePage;
