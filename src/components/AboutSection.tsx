
import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import { CheckCircle, Award, Users } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedWrapper animation="slide-in-left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gogogo-yellow/20 dark:bg-gogogo-yellow/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gogogo-purple/20 dark:bg-gogogo-purple/10 rounded-full blur-xl"></div>
              
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-lg p-4 flex items-center justify-center">
                    <span className="text-3xl font-bold">130+</span>
                  </div>
                  <div className="aspect-square bg-black/5 dark:bg-white/5 rounded-lg p-4 flex items-center justify-center">
                    <span className="text-3xl font-bold">95%</span>
                  </div>
                  <div className="col-span-2 aspect-video bg-black/5 dark:bg-white/5 rounded-lg p-4 flex items-center justify-center">
                    <span className="text-3xl font-bold">24/7</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-gogogo-yellow" size={20} />
                    <span>Plus de 20 projets livrés</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-gogogo-purple" size={20} />
                    <span>Clients satisfaits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-gogogo-yellow" size={20} />
                    <span>Support disponible 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
          
          <AnimatedWrapper animation="slide-in-right" delay={200}>
            <h2 className="inline-block px-3 py-1 text-sm font-medium tracking-wide bg-gradient-to-r from-gogogo-yellow/20 to-gogogo-purple/20 rounded-full mb-4">
              À propos de nous
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-gogogo-yellow to-gogogo-purple">partenaire digital</span> de confiance
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8">
              Chez GoGoGo Studio, nous croyons que la technologie devrait être accessible à tous. Notre mission est de démocratiser le développement web en proposant des solutions nocode et lowcode performantes, permettant à chacun de concrétiser ses projets digitaux sans expertise technique préalable.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gogogo-yellow/20 dark:bg-gogogo-yellow/10 flex items-center justify-center">
                  <Award className="text-gogogo-yellow" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Expertise</h4>
                  <p className="text-muted-foreground text-sm">
                    Une équipe de spécialistes en solutions nocode et IA à votre service.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gogogo-purple/20 dark:bg-gogogo-purple/10 flex items-center justify-center">
                  <Users className="text-gogogo-purple" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Approche personnalisée</h4>
                  <p className="text-muted-foreground text-sm">
                    Chaque projet est unique et mérite une solution sur mesure.
                  </p>
                </div>
              </div>
            </div>
            
            <a
              href="#quote"
              className="inline-flex items-center bg-gradient-to-r from-gogogo-yellow to-gogogo-purple text-black font-bold px-8 py-3.5 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Travaillons ensemble
            </a>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
