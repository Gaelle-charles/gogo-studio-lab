
import React from "react";
import { ArrowRight } from "lucide-react";
import AnimatedWrapper from "./AnimatedWrapper";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Les avantages du NoCode pour les startups",
    excerpt: "Découvrez comment le NoCode peut accélérer le développement de votre startup sans compromettre la qualité.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    date: "15 Mai 2023",
    category: "NoCode",
    slug: "avantages-nocode-startups"
  },
  {
    id: 2,
    title: "Automatiser vos tâches marketing avec des outils LowCode",
    excerpt: "Explorez les solutions d'automatisation marketing qui ne nécessitent que peu de codage.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    date: "3 Juin 2023",
    category: "Automatisation",
    slug: "automatisation-marketing-lowcode"
  },
  {
    id: 3,
    title: "L'IA générative pour la création de contenu visuel",
    excerpt: "Comment utiliser l'IA pour créer des visuels de qualité professionnelle pour votre entreprise.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
    date: "22 Juillet 2023",
    category: "IA Créative",
    slug: "ia-generative-creation-contenu-visuel"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/2 bg-gogogo-yellow/10 dark:bg-gogogo-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1/3 h-1/3 bg-gogogo-purple/10 dark:bg-gogogo-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedWrapper className="text-center mb-16">
          <h2 className="inline-block px-3 py-1 text-sm font-medium tracking-wide bg-gradient-to-r from-gogogo-yellow/20 to-gogogo-purple/20 rounded-full mb-4">
            Notre Blog
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Actualités et <span className="text-transparent bg-clip-text bg-gradient-to-r from-gogogo-yellow to-gogogo-purple">ressources</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos derniers articles sur le NoCode, l'automatisation et l'IA créative.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedWrapper
              key={post.id}
              animation="slide-up"
              delay={index * 150}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="h-full rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-gogogo-purple/30 dark:hover:border-gogogo-yellow/30 transition-all duration-500 hover:-translate-y-1 flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-gogogo-purple dark:group-hover:text-gogogo-yellow transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center text-sm font-medium group-hover:text-gogogo-purple dark:group-hover:text-gogogo-yellow transition-colors">
                      Lire l'article <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper className="mt-12 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center dark:bg-gogogo-yellow bg-gogogo-purple text-black font-bold px-8 py-3.5 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Voir tous les articles
          </Link>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default BlogSection;
