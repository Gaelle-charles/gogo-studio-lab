
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
              className="button-primary"
            >
              Demander un devis
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
          <div className="relative w-full max-w-lg">
            {/* Fun illustration with animations */}
            <div className="aspect-square relative bg-white dark:bg-black rounded-2xl overflow-hidden shadow-2xl border border-border transition-all duration-700 hover:rotate-2 hover:scale-105">
              {/* Creative abstract illustration */}
              <svg 
                className="w-full h-full p-8" 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main circular elements */}
                <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" className="animate-spin-slow" />
                <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="2" className="animate-spin-slow animation-reverse" />
                
                {/* Decorative elements */}
                <rect x="175" y="100" width="50" height="50" fill="currentColor" fillOpacity="0.1" className="animate-bounce animation-delay-500">
                  <animate attributeName="y" values="100;110;100" dur="3s" repeatCount="indefinite" />
                </rect>
                <circle cx="200" cy="250" r="30" fill="currentColor" fillOpacity="0.1" className="animate-pulse-slow" />
                
                {/* Abstract pattern */}
                <path d="M100,200 Q200,100 300,200" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse-slow" />
                <path d="M100,220 Q200,320 300,220" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse-slow animation-delay-700" />
                
                {/* Techno elements */}
                <path d="M150,120 L180,120 L180,150 L210,150 L210,180 L150,180 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M220,220 L250,220 L250,250 L220,250 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                
                {/* Digital symbols */}
                <text x="140" y="140" className="text-sm" fill="currentColor">NoCode</text>
                <text x="230" y="270" className="text-sm" fill="currentColor">IA</text>
                
                {/* Connected nodes */}
                <circle cx="120" cy="200" r="8" fill="currentColor" />
                <circle cx="170" cy="230" r="8" fill="currentColor" />
                <circle cx="230" cy="170" r="8" fill="currentColor" />
                <circle cx="280" cy="200" r="8" fill="currentColor" />
                
                <line x1="120" y1="200" x2="170" y2="230" stroke="currentColor" strokeWidth="1" />
                <line x1="170" y1="230" x2="230" y2="170" stroke="currentColor" strokeWidth="1" />
                <line x1="230" y1="170" x2="280" y2="200" stroke="currentColor" strokeWidth="1" />
                
                {/* Animation paths for floating elements */}
                <path id="floatPath1" d="M150,100 Q200,50 250,100" stroke="none" fill="none" />
                <path id="floatPath2" d="M150,300 Q200,350 250,300" stroke="none" fill="none" />
                
                {/* Floating elements */}
                <g>
                  <circle cx="0" cy="0" r="10" fill="currentColor" fillOpacity="0.6">
                    <animateMotion path="M150,100 Q200,50 250,100 Q300,150 250,200 Q200,250 150,200 Q100,150 150,100" dur="20s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g>
                  <rect x="-7" y="-7" width="14" height="14" fill="currentColor" fillOpacity="0.6">
                    <animateMotion path="M250,200 Q300,250 250,300 Q200,350 150,300 Q100,250 150,200 Q200,150 250,200" dur="15s" repeatCount="indefinite" />
                  </rect>
                </g>
              </svg>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gogogo-yellow/30 dark:bg-gogogo-yellow/20 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gogogo-purple/30 dark:bg-gogogo-purple/20 animate-float animation-delay-1000"></div>
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
