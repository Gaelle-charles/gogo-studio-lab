
import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import { Code, Rocket, Zap, MonitorSmartphone, Image, Video } from "lucide-react";

const serviceCards = [
  {
    icon: <Code className="w-6 h-6 text-gogogo-yellow" />,
    title: "Solutions NoCode",
    description: "Créez des applications web sans écrire une ligne de code. Idéal pour les sites vitrines, e-commerces et plateformes personnalisées.",
    delay: 0,
  },
  {
    icon: <Rocket className="w-6 h-6 text-gogogo-purple" />,
    title: "Développement LowCode",
    description: "Un équilibre parfait entre la simplicité du NoCode et la flexibilité du code personnalisé pour des solutions sur mesure.",
    delay: 150,
  },
  {
    icon: <Zap className="w-6 h-6 text-gogogo-yellow" />,
    title: "Automatisation",
    description: "Optimisez vos processus métier en automatisant vos tâches répétitives et connectant vos outils favoris.",
    delay: 300,
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-gogogo-purple" />,
    title: "Intégrations API",
    description: "Connectez vos applications préférées et assurez une communication fluide entre vos différents services.",
    delay: 450,
  },
  {
    icon: <Image className="w-6 h-6 text-gogogo-yellow" />,
    title: "Génération d'Images IA",
    description: "Créez des visuels uniques et professionnels pour votre marque grâce à l'intelligence artificielle.",
    delay: 600,
  },
  {
    icon: <Video className="w-6 h-6 text-gogogo-purple" />,
    title: "Vidéo IA",
    description: "Transformez vos idées en contenu vidéo captivant avec notre technologie de génération vidéo par IA.",
    delay: 750,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1/2 h-1/2 bg-gogogo-yellow/10 dark:bg-gogogo-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gogogo-purple/10 dark:bg-gogogo-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedWrapper className="text-center mb-16">
          <h2 className="inline-block px-3 py-1 text-sm font-medium tracking-wide bg-gradient-to-r from-gogogo-yellow/20 to-gogogo-purple/20 rounded-full mb-4">
            Nos Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Solutions digitales<span className="text-transparent bg-clip-text bg-gradient-to-r from-gogogo-yellow to-gogogo-purple"> innovantes</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment GoGoGo Studio peut transformer votre présence numérique avec des solutions adaptées à vos besoins.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <AnimatedWrapper
              key={index}
              animation="slide-up"
              delay={service.delay}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-xl hover:border-gogogo-purple/30 dark:hover:border-gogogo-yellow/30 transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-background mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-gogogo-purple dark:group-hover:text-gogogo-yellow transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper className="mt-16 text-center">
          <a
            href="#quote"
            className="inline-flex items-center bg-gradient-to-r from-gogogo-yellow to-gogogo-purple text-black font-bold px-8 py-3.5 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Demander un devis personnalisé
          </a>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default ServicesSection;
