
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Effet d'apparition au chargement initial
  useEffect(() => {
    document.body.classList.add("loaded");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <BlogSection />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
