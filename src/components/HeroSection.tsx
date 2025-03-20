
import React, { useEffect, useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import { ArrowDown, Code, Zap, Monitor } from "lucide-react";

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gogogo-yellow/20 dark:bg-gogogo-yellow/10 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gogogo-purple/20 dark:bg-gogogo-purple/10 rounded-full blur-3xl opacity-70 animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        <AnimatedWrapper
          animation="slide-in-left"
          className="flex flex-col items-start text-left"
        >
          <div className="inline-block mb-4 px-3 py-1 bg-gradient-to-r from-gogogo-yellow/20 to-gogogo-purple/20 backdrop-blur-sm rounded-full">
            <span className="text-sm font-medium tracking-wide">
              NoCode, LowCode & Automatisation
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-headline font-bold leading-tight mb-6">
            <span className="block">Donnez vie à vos</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gogogo-yellow to-gogogo-purple">
              idées numériques
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-xl">
            GoGoGo Studio transforme vos concepts en solutions web performantes, 
            sans code complexe et avec le pouvoir de l'intelligence artificielle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="bg-gradient-to-r from-gogogo-yellow to-gogogo-purple hover:shadow-lg hover:shadow-gogogo-purple/20 text-black font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              Demander un devis
            </a>
            <a
              href="#services"
              className="group flex items-center justify-center gap-2 border-2 border-border hover:border-gogogo-purple dark:hover:border-gogogo-yellow font-medium px-8 py-3.5 rounded-full transition-all"
            >
              Découvrir nos services
              <ArrowDown className="group-hover:translate-y-1 transition-transform" size={18} />
            </a>
          </div>
          
          <div className="mt-12 flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gogogo-purple/10 text-gogogo-purple">
                <Code size={20} />
              </div>
              <span className="text-sm font-medium">NoCode</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gogogo-yellow/10 text-gogogo-yellow">
                <Zap size={20} />
              </div>
              <span className="text-sm font-medium">Automatisation</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gogogo-purple/10 text-gogogo-purple">
                <Monitor size={20} />
              </div>
              <span className="text-sm font-medium">Solutions IA</span>
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper
          animation="slide-in-right"
          className="relative flex justify-center"
          delay={300}
        >
          <div className="relative w-full max-w-lg aspect-square">
            {/* Illustration en noir et blanc dans un cadre avec animation */}
            <div className="absolute inset-0 bg-white dark:bg-black rounded-2xl overflow-hidden shadow-2xl border border-border transform transition-transform duration-700 hover:rotate-1">
              {/* Image en noir et blanc */}
              <svg 
                className="w-full h-full" 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M200 50C117.2 50 50 117.2 50 200C50 282.8 117.2 350 200 350C282.8 350 350 282.8 350 200C350 117.2 282.8 50 200 50Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M200 80C134.1 80 80 134.1 80 200C80 265.9 134.1 320 200 320C265.9 320 320 265.9 320 200C320 134.1 265.9 80 200 80Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M200 120C156.9 120 120 156.9 120 200C120 243.1 156.9 280 200 280C243.1 280 280 243.1 280 200C280 156.9 243.1 120 200 120Z" fill="currentColor" fillOpacity="0.1"/>
                <path d="M200 150C173.5 150 150 173.5 150 200C150 226.5 173.5 250 200 250C226.5 250 250 226.5 250 200C250 173.5 226.5 150 200 150Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M130 100L270 300" stroke="currentColor" strokeWidth="2"/>
                <path d="M270 100L130 300" stroke="currentColor" strokeWidth="2"/>
                <path d="M100 200L300 200" stroke="currentColor" strokeWidth="2"/>
                <path d="M200 100L200 300" stroke="currentColor" strokeWidth="2"/>
                <circle cx="200" cy="200" r="10" fill="currentColor"/>
                <circle cx="200" cy="150" r="5" fill="currentColor"/>
                <circle cx="200" cy="250" r="5" fill="currentColor"/>
                <circle cx="150" cy="200" r="5" fill="currentColor"/>
                <circle cx="250" cy="200" r="5" fill="currentColor"/>
                <rect x="180" y="180" width="40" height="40" stroke="currentColor" strokeWidth="2"/>
                <path d="M100 150C100 150 150 120 200 150C250 180 300 150 300 150" stroke="currentColor" strokeWidth="2"/>
                <path d="M100 250C100 250 150 280 200 250C250 220 300 250 300 250" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            
            {/* Éléments décoratifs autour */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gogogo-yellow/30 dark:bg-gogogo-yellow/20 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gogogo-purple/30 dark:bg-gogogo-purple/20 animate-float animation-delay-1000"></div>
            
            {/* Ligne pointillée stylisée */}
            <div className="absolute top-1/2 left-0 w-full h-1 flex justify-between">
              {Array.from({ length: 15 }).map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 rounded-full bg-gogogo-yellow"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? 'scale(1)' : 'scale(0)',
                    transition: `all 0.5s ${i * 0.1}s ease-out`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </AnimatedWrapper>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center">
          <ArrowDown size={18} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
