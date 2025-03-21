
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import AnimatedWrapper from "./AnimatedWrapper";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  category, 
  link, 
  index 
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <AnimatedWrapper 
      animation={isEven ? "slide-in-left" : "slide-in-right"} 
      delay={index * 100}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-background hover:shadow-xl transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`order-2 ${isEven ? 'md:order-2' : 'md:order-1'} p-6 flex flex-col justify-center`}>
            <span className="text-xs font-medium text-muted-foreground mb-2">
              {category}
            </span>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-gogogo-purple dark:group-hover:text-gogogo-yellow transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {description}
            </p>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium group-hover:text-gogogo-purple dark:group-hover:text-gogogo-yellow transition-colors"
              >
                Voir le projet <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <div className={`order-1 ${isEven ? 'md:order-1' : 'md:order-2'} aspect-video overflow-hidden`}>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
};

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  
  const projects = [
    {
      title: "Plateforme de réservation NoCode",
      description: "Développement d'une solution complète de réservation pour un salon de beauté, incluant paiement en ligne et rappels automatisés.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      category: "NoCode",
      link: "#"
    },
    {
      title: "Générateur de visuels IA",
      description: "Création d'un outil personnalisé permettant de générer des visuels marketing à partir de simples descriptions textuelles.",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=800&q=80",
      category: "IA Créative",
      link: "#"
    },
    {
      title: "Automatisation workflow marketing",
      description: "Mise en place d'un système d'automatisation complet pour les campagnes email, SMS et réseaux sociaux d'une marque e-commerce.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      category: "Automatisation",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gogogo-yellow/10 dark:bg-gogogo-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gogogo-purple/10 dark:bg-gogogo-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedWrapper className="text-center mb-16">
          <h2 className="inline-block px-3 py-1 text-sm font-medium tracking-wide bg-gradient-to-r from-gogogo-yellow/20 to-gogogo-purple/20 rounded-full mb-4">
            Nos réalisations
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Projets <span className="text-transparent bg-clip-text bg-gradient-to-r from-gogogo-yellow to-gogogo-purple">réalisés</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nous avons aidé nos clients à transformer leurs idées en solutions digitales concrètes.
          </p>
        </AnimatedWrapper>

        <div className="space-y-12 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              link={project.link}
            />
          ))}
        </div>

        <AnimatedWrapper animation="fade-in" className="text-center mt-16">
          <Link 
            to="/projets" 
            className="inline-flex items-center button-primary"
          >
            Voir tous nos projets <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default ProjectsSection;
