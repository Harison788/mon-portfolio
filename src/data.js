// Données du portfolio — issues du CV d'Andriakotoharison Kanto Fitahiana

export const person = {
  firstName: "Kanto",
  lastName: "Fitahiana",
  fullName: "Andriakotoharison Kanto Fitahiana",
  title: "Développeuse web & logicielle",
  subtitle: "Étudiante en L3 Services Informatiques aux Organisations",
  tagline: "Motivée, curieuse et organisée — prête à contribuer à vos projets.",
  email: "andriaharisonkanto@gmail.com",
  phone: "+261 38 55 677 46",
  location: "Ankadivory, Antananarivo, Madagascar",
  address: "AKD I 55 Alakamisy, Ankadivory",
  available: "Disponible pour un stage à partir de décembre 2026",
  cv: `${import.meta.env.BASE_URL}cv.pdf`,
};

export const socials = [
  { label: "Email", href: "mailto:andriaharisonkanto@gmail.com", icon: "✉" },
  { label: "Téléphone", href: "tel:+261385567746", icon: "☎" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kanto-fitahiana-andriakotoharison-7a57b5361", icon: "in" },
  { label: "GitHub", href: "https://github.com/Harison788", icon: "GH" },
];

export const about = `Étudiante en L3 Services Informatiques aux Organisations, je souhaite mettre mes compétences en pratique dans le cadre d'un stage professionnalisant. Motivée, curieuse et organisée, je suis désireuse d'apprendre, de relever de nouveaux défis et de contribuer activement aux projets de votre entreprise.`;

export const skills = [
  {
    category: "Développement Front-end",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Développement Back-end",
    items: ["Node.js", "Express", "Spring Boot", "Java EE", "Django", "Laravel", "PHP"],
  },
  {
    category: "Langages",
    items: ["Python", "Java", "JavaScript", "PHP", "C"],
  },
  {
    category: "Bases de données",
    items: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    category: "Outils & Méthodes",
    items: ["Git", "GitHub", "Docker", "UML", "Merise", "Agile", "Android Studio", "VS Code", "Eclipse", "draw.io"],
  },
  {
    category: "Design & Création",
    items: ["Canva", "Figma", "CapCut"],
  },
];

export const projects = [
  {
    title: "SOPAC",
    role: "Développeur Full-Stack / Concepteur Logiciel",
    period: "Projet de fin d'études — Licence 2",
    description:
      "Conception d'une application web pour les pêcheurs artisanaux de Madagascar : modélisation du système avec des diagrammes UML, interface dynamique développée avec React, serveur d'API robuste avec Node.js, intégrant le calcul d'itinéraires maritimes et le suivi des captures. Gestion de projet organisée via Trello.",
    tech: ["React", "Node.js", "UML", "Trello", "API REST"],
  },
  {
    title: "TantsahaConnect",
    role: "Développeuse",
    period: "Projet académique",
    description:
      "Développement d'une plateforme de valorisation des produits agricoles, participation à la conception technique et au développement de la solution.",
    tech: ["Web", "Conception technique"],
  },
  {
    title: "AVE — Organisation d'événements",
    role: "Assistante à l'organisation",
    period: "Expérience associative",
    description:
      "Participation à la préparation, à la coordination et au bon déroulement des événements.",
    tech: ["Coordination", "Organisation"],
  },
];

export const education = [
  {
    degree: "3ème année de Licence — Services Informatiques aux Organisations",
    school: "ESMIA Innovation",
    period: "août 2026 – aujourd'hui",
  },
  {
    degree: "2ème année de Licence — Services Informatiques aux Organisations",
    school: "ESMIA Innovation",
    period: "sept. 2025 – juin 2026",
  },
  {
    degree: "1ère année de Licence — Services Informatiques aux Organisations",
    school: "ESMIA Innovation",
    period: "nov. 2024 – juin 2025",
  },
  {
    degree: "BACCALAURÉAT — Série Scientifique",
    school: "Lycée Fenoarivo",
    period: "2024",
  },
];

export const languages = [
  { name: "Français", level: "Courant" },
  { name: "Malgache", level: "Langue maternelle" },
  { name: "Anglais", level: "Intermédiaire" },
  { name: "Allemand", level: "Intermédiaire" },
];

export const interests = ["Jeux vidéo", "Photographie", "Lecture", "Écriture", "Voyage"];

export const qualities = ["Adaptabilité", "Communication", "Travail d'équipe", "Curiosité", "Autonomie"];

export const navLinks = [
  { id: "hero", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "education", label: "Parcours" },
  { id: "contact", label: "Contact" },
];
