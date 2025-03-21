
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Les avantages du NoCode pour les startups",
    excerpt: "Découvrez comment le NoCode peut accélérer le développement de votre startup sans compromettre la qualité.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    date: "15 Mai 2023",
    category: "NoCode",
    slug: "avantages-nocode-startups",
    author: "Marie Laurent",
    content: `
      <p class="mb-4">Dans l'écosystème technologique actuel, les startups font face à un défi de taille : développer rapidement des produits fonctionnels avec des ressources limitées. Le NoCode apparaît comme une solution révolutionnaire à ce problème.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Qu'est-ce que le NoCode?</h2>
      
      <p class="mb-4">Le NoCode est une approche de développement qui permet de créer des applications sans écrire de code traditionnel. En utilisant des interfaces visuelles et des composants préfabriqués, même les personnes sans compétences en programmation peuvent construire des solutions digitales complètes.</p>
      
      <div class="my-8 rounded-xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1600&q=80" alt="Interface NoCode" class="w-full h-auto" />
      </div>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5 avantages clés pour les startups</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Rapidité de développement</h3>
      <p class="mb-4">Les plateformes NoCode permettent de développer des applications jusqu'à 10 fois plus rapidement que les méthodes de codage traditionnelles. Cette accélération s'explique par l'utilisation de composants préfabriqués et l'absence de besoin de déboguer du code complexe.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Réduction des coûts</h3>
      <p class="mb-4">Sans nécessiter une équipe de développeurs spécialisés, le NoCode permet de réduire considérablement les coûts de développement et de maintenance. Les startups peuvent ainsi allouer leurs ressources financières à d'autres aspects critiques de leur croissance.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">3. Accessibilité et démocratisation</h3>
      <p class="mb-4">Le NoCode démocratise la création d'applications. Les fondateurs non-techniques et les équipes pluridisciplinaires peuvent participer activement au développement de produits numériques, favorisant ainsi l'innovation.</p>
      
      <div class="my-8 p-6 bg-muted rounded-xl">
        <blockquote class="text-lg italic">
          "Le NoCode a transformé notre façon de penser le développement de produits. En trois mois, nous avons lancé une plateforme complète qui aurait pris au moins un an avec des méthodes traditionnelles."
          <footer class="mt-2 font-medium">— Thomas Mercier, fondateur de TechStartup</footer>
        </blockquote>
      </div>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">4. Itération et adaptation rapides</h3>
      <p class="mb-4">Dans un environnement où le product-market fit est crucial, le NoCode permet d'itérer rapidement. Les startups peuvent tester différentes fonctionnalités, recueillir des retours utilisateurs et adapter leur produit en temps réel, sans longues phases de redéveloppement.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">5. Évolutivité progressive</h3>
      <p class="mb-4">Contrairement aux idées reçues, les solutions NoCode modernes sont évolutives. Elles peuvent accompagner la croissance de votre startup et, si nécessaire, être progressivement complétées par des composants code pour des fonctionnalités plus spécifiques.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Les limites à considérer</h2>
      
      <p class="mb-4">Bien que révolutionnaire, le NoCode n'est pas une solution universelle. Certaines applications hautement spécialisées ou nécessitant des performances exceptionnelles pourraient encore nécessiter des approches de développement traditionnelles. Cependant, pour la majorité des besoins des startups en phase initiale, les plateformes NoCode offrent une solution idéale.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">Le NoCode représente un changement de paradigme dans le développement d'applications. Pour les startups cherchant à optimiser leurs ressources tout en accélérant leur mise sur le marché, cette approche offre des avantages compétitifs significatifs. En embrassant le NoCode, les entrepreneurs peuvent se concentrer sur ce qui compte vraiment : résoudre les problèmes de leurs clients et faire croître leur entreprise.</p>
    `
  },
  {
    id: 2,
    title: "Automatiser vos tâches marketing avec des outils LowCode",
    excerpt: "Explorez les solutions d'automatisation marketing qui ne nécessitent que peu de codage.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    date: "3 Juin 2023",
    category: "Automatisation",
    slug: "automatisation-marketing-lowcode",
    author: "Alexandre Dubois",
    content: `
      <p class="mb-4">L'automatisation marketing est devenue incontournable pour toute entreprise souhaitant optimiser ses campagnes et maximiser son ROI. Grâce aux outils LowCode, cette automatisation est désormais accessible à tous.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Pourquoi automatiser vos processus marketing?</h2>
      
      <p class="mb-4">L'automatisation permet non seulement de gagner un temps précieux, mais aussi d'améliorer la personnalisation, le ciblage et l'efficacité globale de vos campagnes marketing.</p>
      
      <div class="my-8 rounded-xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80" alt="Marketing automation" class="w-full h-auto" />
      </div>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Les principales tâches marketing à automatiser</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Email marketing personnalisé</h3>
      <p class="mb-4">Configurez des séquences d'emails déclenchées par le comportement de vos utilisateurs, avec une personnalisation dynamique du contenu selon leurs préférences et interactions précédentes.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Gestion des médias sociaux</h3>
      <p class="mb-4">Planifiez et publiez automatiquement du contenu sur plusieurs plateformes sociales, tout en analysant les performances pour optimiser votre stratégie.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">3. Nurturing de leads</h3>
      <p class="mb-4">Créez des parcours clients automatisés qui guident vos prospects à travers l'entonnoir de conversion avec du contenu adapté à chaque étape de leur parcours d'achat.</p>
      
      <div class="my-8 p-6 bg-muted rounded-xl">
        <blockquote class="text-lg italic">
          "Depuis que nous avons implémenté des automatisations LowCode pour notre marketing, nous avons augmenté notre taux de conversion de 43% tout en réduisant le temps consacré aux tâches répétitives de 70%."
          <footer class="mt-2 font-medium">— Sophie Martin, CMO de GrowthDigital</footer>
        </blockquote>
      </div>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">4. Analyse de données en temps réel</h3>
      <p class="mb-4">Configurez des tableaux de bord automatisés qui agrègent vos données marketing de différentes sources, permettant une prise de décision rapide et informée.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">5. Personnalisation du site web</h3>
      <p class="mb-4">Adaptez dynamiquement le contenu de votre site en fonction du profil, de la localisation ou du comportement de navigation de chaque visiteur.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Les meilleurs outils LowCode pour l'automatisation marketing</h2>
      
      <p class="mb-4">Plusieurs plateformes permettent aujourd'hui d'implémenter ces automatisations sans expertise technique approfondie. Make (anciennement Integromat), Zapier, et n8n se distinguent par leur facilité d'utilisation et leur puissance.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Comment démarrer avec l'automatisation LowCode</h2>
      
      <p class="mb-4">Commencez par identifier les tâches répétitives qui consomment le plus de temps dans votre workflow marketing. Choisissez ensuite une plateforme LowCode adaptée à vos besoins et commencez par automatiser ces processus prioritaires. L'approche progressive est souvent la plus efficace pour une transition réussie vers l'automatisation.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">L'automatisation marketing via des outils LowCode représente une opportunité majeure pour les entreprises de toutes tailles. En réduisant les tâches manuelles tout en améliorant la personnalisation et l'efficacité, ces solutions vous permettent de vous concentrer sur la stratégie et la créativité, les aspects véritablement humains du marketing.</p>
    `
  },
  {
    id: 3,
    title: "L'IA générative pour la création de contenu visuel",
    excerpt: "Comment utiliser l'IA pour créer des visuels de qualité professionnelle pour votre entreprise.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1600&q=80",
    date: "22 Juillet 2023",
    category: "IA Créative",
    slug: "ia-generative-creation-contenu-visuel",
    author: "Claire Fontaine",
    content: `
      <p class="mb-4">La création de contenu visuel de qualité est devenue essentielle dans toute stratégie de communication digitale. L'émergence des technologies d'IA générative révolutionne aujourd'hui ce domaine en permettant de créer des visuels personnalisés en quelques minutes seulement.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">L'ère de l'IA dans la création visuelle</h2>
      
      <p class="mb-4">L'intelligence artificielle générative utilise des modèles entraînés sur des millions d'images pour créer du contenu visuel original à partir de simples descriptions textuelles. Cette technologie ouvre des possibilités créatives sans précédent pour les entreprises de toutes tailles.</p>
      
      <div class="my-8 rounded-xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80" alt="IA générative" class="w-full h-auto" />
      </div>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Applications pratiques pour votre entreprise</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Création d'images pour les réseaux sociaux</h3>
      <p class="mb-4">Générez facilement des dizaines de visuels uniques pour vos publications sociales, parfaitement alignés avec votre identité de marque et adaptés aux différentes plateformes.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Illustrations personnalisées</h3>
      <p class="mb-4">Créez des illustrations sur mesure pour votre site web, vos articles de blog ou vos présentations, sans avoir recours à des banques d'images génériques ou à des graphistes freelance.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">3. Prototypage de produits</h3>
      <p class="mb-4">Visualisez rapidement de nouveaux concepts de produits ou d'emballages grâce à des rendus photoréalistes générés par IA.</p>
      
      <div class="my-8 p-6 bg-muted rounded-xl">
        <blockquote class="text-lg italic">
          "L'IA générative a transformé notre processus créatif. Ce qui prenait auparavant des jours avec des ressources externes peut maintenant être réalisé en interne en quelques minutes, avec une qualité souvent supérieure."
          <footer class="mt-2 font-medium">— Lucas Renard, Directeur Créatif chez ImagePlus</footer>
        </blockquote>
      </div>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">4. Génération de mock-ups</h3>
      <p class="mb-4">Créez des mock-ups réalistes pour présenter vos designs dans des contextes d'utilisation variés, sans avoir besoin de compétences avancées en retouche photo.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">5. Production de bannières publicitaires</h3>
      <p class="mb-4">Générez et testez rapidement plusieurs variations de bannières publicitaires pour optimiser vos campagnes marketing.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Outils d'IA générative à découvrir</h2>
      
      <p class="mb-4">Plusieurs outils se démarquent par leur puissance et leur facilité d'utilisation. DALL-E, Midjourney et Stable Diffusion sont parmi les plus populaires, chacun avec ses forces spécifiques. Des solutions plus spécialisées comme Canva avec Magic Studio ou Runway proposent également des fonctionnalités d'IA intégrées dans des interfaces familières.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Considérations éthiques et meilleures pratiques</h2>
      
      <p class="mb-4">Si l'IA générative offre d'immenses possibilités, elle soulève également des questions éthiques importantes. Assurez-vous de comprendre les droits d'utilisation associés aux images générées et soyez transparent sur l'utilisation de l'IA dans votre processus créatif. Privilégiez également les modèles qui respectent les droits d'auteur et la diversité dans leurs résultats.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">L'IA générative représente une avancée majeure pour la création de contenu visuel professionnel. En intégrant ces outils à votre workflow créatif, vous pouvez non seulement réduire vos coûts et délais de production, mais aussi explorer de nouvelles possibilités créatives qui auraient été inaccessibles auparavant.</p>
    `
  }
];

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    // Scroll to top when post loads
    window.scrollTo(0, 0);
    
    // Redirect to blog page if post not found
    if (!post && slug) {
      navigate('/blog');
    }
  }, [post, slug, navigate]);
  
  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="relative px-6 pt-12 pb-16 mb-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover opacity-20 dark:opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <AnimatedWrapper>
              <Link 
                to="/blog" 
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux articles
              </Link>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  {post.category}
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </section>
        
        {/* Feature image */}
        <section className="px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <AnimatedWrapper className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto"
              />
            </AnimatedWrapper>
          </div>
        </section>
        
        {/* Content */}
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <AnimatedWrapper className="prose dark:prose-invert prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </AnimatedWrapper>
            
            <div className="mt-16 flex justify-between border-t border-border pt-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center dark:text-gogogo-yellow text-gogogo-purple hover:underline"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux articles
              </Link>
              
              <Link
                to="#quote"
                className="inline-flex items-center dark:bg-gogogo-yellow bg-gogogo-purple text-black font-medium px-5 py-2 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
