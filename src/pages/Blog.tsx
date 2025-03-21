import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from '../supabaseClient'; // Importez le client Supabase

const blogCategories = [
  "Tous", "NoCode", "LowCode", "Automatisation", "IA Créative", "Intégrations", "Conseils"
];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [blogPosts, setBlogPosts] = useState([]); // État pour stocker les articles
  const [loading, setLoading] = useState(true); // État pour gérer le chargement

  // Récupérer les articles depuis Supabase
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .order('date', { ascending: false }); // Trier par date décroissante

        if (error) {
          console.error('Erreur lors de la récupération des articles :', error);
        } else {
          setBlogPosts(data); // Mettre à jour l'état avec les articles récupérés
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      } finally {
        setLoading(false); // Arrêter le chargement
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = activeCategory === "Tous" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 w-1/2 h-1/2 bg-gogogo-yellow/10 dark:bg-gogogo-yellow/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gogogo-purple/10 dark:bg-gogogo-purple/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedWrapper className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-gogogo-yellow to-gogogo-purple">GoGoGo Studio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Des articles, tutoriels et conseils sur le NoCode, l'automatisation et la création de contenu IA.
              </p>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Category filter */}
        <section className="px-6 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {blogCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "dark:bg-gogogo-yellow bg-gogogo-purple text-black"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog posts grid */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <AnimatedWrapper
                  key={post.id}
                  animation="slide-up"
                  delay={index * 100}
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
                        <div className="text-sm text-muted-foreground mb-2">
                          {new Date(post.date).toLocaleDateString()}
                        </div>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
