
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft, Check, Send } from "lucide-react";
import AnimatedWrapper from "./AnimatedWrapper";
import { toast } from "sonner";
import { supabase } from '../supabaseClient';

interface FormStep {
  id: string;
  title: string;
  description: string;
}

interface FormData {
  projectType: string;
  projectFeatures: string[];
  budget: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const initialFormData: FormData = {
  projectType: "",
  projectFeatures: [],
  budget: "",
  timeline: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const formSteps: FormStep[] = [
  {
    id: "project-type",
    title: "Type de projet",
    description: "Quel type de projet souhaitez-vous réaliser ?",
  },
  {
    id: "project-details",
    title: "Détails du projet",
    description: "Parlez-nous des fonctionnalités que vous recherchez",
  },
  {
    id: "budget-timeline",
    title: "Budget et délais",
    description: "Quel est votre budget et délai souhaité ?",
  },
  {
    id: "contact-info",
    title: "Vos coordonnées",
    description: "Comment pouvons-nous vous contacter ?",
  },
];

const projectTypes = [
  { id: "website", label: "Site web" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "webapp", label: "Application web" },
  { id: "automation", label: "Automatisation" },
  { id: "ai-content", label: "Contenu IA" },
  { id: "other", label: "Autre" },
];

const projectFeatures = [
  { id: "responsive", label: "Design responsive" },
  { id: "cms", label: "Système de gestion de contenu" },
  { id: "user-auth", label: "Authentification utilisateur" },
  { id: "payment", label: "Intégration de paiement" },
  { id: "ai-images", label: "Génération d'images IA" },
  { id: "ai-videos", label: "Génération de vidéos IA" },
  { id: "automation", label: "Workflows automatisés" },
  { id: "api", label: "Intégrations API" },
  { id: "analytics", label: "Analytiques et rapports" },
];

const budgetRanges = [
  { id: "small", label: "< 2 000 €" },
  { id: "medium", label: "2 000 € - 5 000 €" },
  { id: "large", label: "5 000 € - 10 000 €" },
  { id: "enterprise", label: "> 10 000 €" },
  { id: "not-sure", label: "Je ne sais pas encore" },
];

const timelineOptions = [
  { id: "urgent", label: "< 2 semaines" },
  { id: "standard", label: "2 - 4 semaines" },
  { id: "relaxed", label: "1 - 2 mois" },
  { id: "long-term", label: "> 2 mois" },
  { id: "not-sure", label: "Pas encore défini" },
];

const QuoteForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, formSteps.length - 1));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const validateCurrentStep = (): boolean => {
    switch (currentStep) {
      case 0:
        if (!formData.projectType) {
          toast.error("Veuillez sélectionner un type de projet");
          return false;
        }
        return true;
      case 1:
        if (formData.projectFeatures.length === 0) {
          toast.error("Veuillez sélectionner au moins une fonctionnalité");
          return false;
        }
        return true;
      case 2:
        if (!formData.budget || !formData.timeline) {
          toast.error("Veuillez remplir tous les champs obligatoires");
          return false;
        }
        return true;
      case 3:
        if (!formData.firstName || !formData.lastName || !formData.email) {
          toast.error("Veuillez remplir tous les champs obligatoires");
          return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          toast.error("Veuillez entrer une adresse email valide");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleFeatureToggle = (featureId: string) => {
    setFormData((prev) => {
      if (prev.projectFeatures.includes(featureId)) {
        return {
          ...prev,
          projectFeatures: prev.projectFeatures.filter((id) => id !== featureId),
        };
      } else {
        return {
          ...prev,
          projectFeatures: [...prev.projectFeatures, featureId],
        };
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    
    try {
  // Affichez les données avant l'envoi
    console.log('Données du formulaire :', formData);
      
      const { data, error } = await supabase
        .from('devis')
        .insert([{
          project_type: formData.projectType,
          project_features: formData.projectFeatures,
          budget: formData.budget,
          timeline: formData.timeline,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          created_at: new Date().toISOString()
        }]);

      if (error) {
        console.error('Erreur lors de l\'envoi du devis :', error);
        toast.error('Une erreur est survenue lors de l\'envoi du devis.');
      } else {
        toast.success('Votre demande de devis a été envoyée avec succès !');
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du devis :', error);
      toast.error('Une erreur est survenue lors de l\'envoi du devis.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gogogo-yellow/10 dark:bg-gogogo-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gogogo-purple/10 dark:bg-gogogo-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedWrapper className="text-center mb-12">
          <h2 className="inline-block px-3 py-1 text-sm font-medium tracking-wide bg-gradient-to-r from-gogogo-yellow/20 to-gogogo-purple/20 rounded-full mb-4">
            Demande de devis
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Lancez votre<span className="text-transparent bg-clip-text bg-gradient-to-r from-gogogo-yellow to-gogogo-purple"> projet digital</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Remplissez ce formulaire pour recevoir un devis personnalisé pour votre projet.
          </p>
        </AnimatedWrapper>

        {submitted ? (
          <AnimatedWrapper animation="scale" className="glass-card p-10 rounded-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-gogogo-yellow/20 dark:bg-gogogo-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-gogogo-yellow" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Demande envoyée !</h3>
              <p className="text-muted-foreground mb-6">
                Nous avons bien reçu votre demande de devis. Notre équipe vous contactera dans les plus brefs délais.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(0);
                  setFormData(initialFormData);
                }}
                className="button-primary"
              >
                Nouvelle demande
              </button>
            </div>
          </AnimatedWrapper>
        ) : (
          <div className="glass-card rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-2 bg-muted">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-gogogo-yellow to-gogogo-purple transition-all duration-300 ease-out"
                style={{
                  width: `${((currentStep + 1) / formSteps.length) * 100}%`,
                }}
              ></div>
            </div>

            <div className="flex justify-between px-8 pt-6">
              {formSteps.map((step, index) => (
                <button
                  key={step.id}
                  className="relative flex flex-col items-center"
                  onClick={() => {
                    if (index <= currentStep) {
                      setCurrentStep(index);
                    }
                  }}
                  disabled={index > currentStep}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-all",
                      index === currentStep
                        ? "bg-gradient-to-r from-gogogo-yellow to-gogogo-purple text-black"
                        : index < currentStep
                        ? "bg-gogogo-purple/20 text-gogogo-purple dark:bg-gogogo-purple/30 dark:text-gogogo-purple"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {index < currentStep ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium hidden md:block",
                      index === currentStep
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {currentStep === 0 && (
                <AnimatedWrapper animation="fade-in" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {formSteps[currentStep].title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {formSteps[currentStep].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <div
                        key={type.id}
                        className={cn(
                          "p-4 border rounded-xl cursor-pointer transition-all hover:border-gogogo-purple/50 dark:hover:border-gogogo-yellow/50",
                          formData.projectType === type.id
                            ? "border-gogogo-purple dark:border-gogogo-yellow bg-gogogo-purple/5 dark:bg-gogogo-yellow/5"
                            : "border-border"
                        )}
                        onClick={() =>
                          setFormData({ ...formData, projectType: type.id })
                        }
                      >
                        <div className="flex items-center">
                          <div
                            className={cn(
                              "w-5 h-5 rounded-full border mr-3 flex items-center justify-center",
                              formData.projectType === type.id
                                ? "border-gogogo-purple dark:border-gogogo-yellow"
                                : "border-muted-foreground"
                            )}
                          >
                            {formData.projectType === type.id && (
                              <div className="w-3 h-3 rounded-full bg-gogogo-purple dark:bg-gogogo-yellow" />
                            )}
                          </div>
                          <span className="font-medium">{type.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedWrapper>
              )}

              {currentStep === 1 && (
                <AnimatedWrapper animation="fade-in" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {formSteps[currentStep].title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {formSteps[currentStep].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projectFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        className={cn(
                          "p-4 border rounded-xl cursor-pointer transition-all hover:border-gogogo-purple/50 dark:hover:border-gogogo-yellow/50",
                          formData.projectFeatures.includes(feature.id)
                            ? "border-gogogo-purple dark:border-gogogo-yellow bg-gogogo-purple/5 dark:bg-gogogo-yellow/5"
                            : "border-border"
                        )}
                        onClick={() => handleFeatureToggle(feature.id)}
                      >
                        <div className="flex items-center">
                          <div
                            className={cn(
                              "w-5 h-5 rounded border mr-3 flex items-center justify-center",
                              formData.projectFeatures.includes(feature.id)
                                ? "border-gogogo-purple dark:border-gogogo-yellow"
                                : "border-muted-foreground"
                            )}
                          >
                            {formData.projectFeatures.includes(feature.id) && (
                              <Check className="w-3 h-3 text-gogogo-purple dark:text-gogogo-yellow" />
                            )}
                          </div>
                          <span className="font-medium">{feature.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <label className="block text-sm font-medium mb-2">
                      Autres besoins spécifiques (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gogogo-purple/50 dark:focus:ring-gogogo-yellow/50"
                      rows={3}
                      placeholder="Décrivez d'autres fonctionnalités ou besoins spécifiques..."
                    ></textarea>
                  </div>
                </AnimatedWrapper>
              )}

              {currentStep === 2 && (
                <AnimatedWrapper animation="fade-in" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {formSteps[currentStep].title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {formSteps[currentStep].description}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Budget approximatif
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {budgetRanges.map((range) => (
                        <div
                          key={range.id}
                          className={cn(
                            "p-3 border rounded-xl cursor-pointer transition-all hover:border-gogogo-purple/50 dark:hover:border-gogogo-yellow/50",
                            formData.budget === range.id
                              ? "border-gogogo-purple dark:border-gogogo-yellow bg-gogogo-purple/5 dark:bg-gogogo-yellow/5"
                              : "border-border"
                          )}
                          onClick={() =>
                            setFormData({ ...formData, budget: range.id })
                          }
                        >
                          <div className="flex items-center">
                            <div
                              className={cn(
                                "w-4 h-4 rounded-full border mr-2 flex items-center justify-center",
                                formData.budget === range.id
                                  ? "border-gogogo-purple dark:border-gogogo-yellow"
                                  : "border-muted-foreground"
                              )}
                            >
                              {formData.budget === range.id && (
                                <div className="w-2 h-2 rounded-full bg-gogogo-purple dark:bg-gogogo-yellow" />
                              )}
                            </div>
                            <span className="font-medium text-sm">
                              {range.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Délai souhaité
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {timelineOptions.map((option) => (
                        <div
                          key={option.id}
                          className={cn(
                            "p-3 border rounded-xl cursor-pointer transition-all hover:border-gogogo-purple/50 dark:hover:border-gogogo-yellow/50",
                            formData.timeline === option.id
                              ? "border-gogogo-purple dark:border-gogogo-yellow bg-gogogo-purple/5 dark:bg-gogogo-yellow/5"
                              : "border-border"
                          )}
                          onClick={() =>
                            setFormData({ ...formData, timeline: option.id })
                          }
                        >
                          <div className="flex items-center">
                            <div
                              className={cn(
                                "w-4 h-4 rounded-full border mr-2 flex items-center justify-center",
                                formData.timeline === option.id
                                  ? "border-gogogo-purple dark:border-gogogo-yellow"
                                  : "border-muted-foreground"
                              )}
                            >
                              {formData.timeline === option.id && (
                                <div className="w-2 h-2 rounded-full bg-gogogo-purple dark:bg-gogogo-yellow" />
                              )}
                            </div>
                            <span className="font-medium text-sm">
                              {option.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedWrapper>
              )}

              {currentStep === 3 && (
                <AnimatedWrapper animation="fade-in" className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {formSteps[currentStep].title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {formSteps[currentStep].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gogogo-purple/50 dark:focus:ring-gogogo-yellow/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gogogo-purple/50 dark:focus:ring-gogogo-yellow/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gogogo-purple/50 dark:focus:ring-gogogo-yellow/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gogogo-purple/50 dark:focus:ring-gogogo-yellow/50"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-gogogo-purple/50 dark:focus:ring-gogogo-yellow/50"
                      />
                    </div>
                  </div>
                </AnimatedWrapper>
              )}

              <div className="flex justify-between mt-10">
                {currentStep > 0 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex items-center px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < formSteps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="flex items-center button-primary"
                  >
                    Suivant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center button-primary disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;
