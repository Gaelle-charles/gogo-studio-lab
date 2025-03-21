
import React from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, ArrowUpRight, Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 dark:bg-muted/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gogogo-yellow/10 dark:bg-gogogo-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-gogogo-purple/10 dark:bg-gogogo-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tighter flex items-center mb-6"
            >
              <span className="text-gogogo-yellow dark:text-gogogo-yellow">Go</span>
              <span className="text-gogogo-purple dark:text-gogogo-purple">Go</span>
              <span className="text-gogogo-yellow dark:text-gogogo-yellow mr-1">Go</span>
              <span className="text-foreground">Studio</span>
            </a>
            <p className="text-muted-foreground mb-6">
              Votre partenaire en solutions NoCode, LowCode et création de contenu IA pour des projets web innovants.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:border-gogogo-purple dark:hover:border-gogogo-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:border-gogogo-purple dark:hover:border-gogogo-yellow transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  Solutions NoCode
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  Développement LowCode
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  Automatisation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  Intégrations API
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  Contenu IA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#quote" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  Demander un devis
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gogogo-yellow mt-0.5" />
                <span className="text-muted-foreground">
                  20 Rue des Innovations<br />75001 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gogogo-yellow" />
                <a 
                  href="tel:+33123456789" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gogogo-yellow" />
                <a 
                  href="mailto:contact@gogogostudio.com" 
                  className="text-muted-foreground hover:text-gogogo-purple dark:hover:text-gogogo-yellow transition-colors"
                >
                  contact@gogogostudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GoGoGo Studio. Tous droits réservés.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <a 
              href="#hero" 
              className="flex items-center p-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Retour en haut
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
