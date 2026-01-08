export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Antipsyché",
  description: "Da un account Instagram dedicato alla critica letteraria e alla discussione sui libri, è nata un'ambizione più profonda: colmare piccoli vuoti nel panorama editoriale italiano. Siamo Claudio e Valentina, e questo sito è il nostro laboratorio. La nostra missione è individuare, tradurre e pubblicare testi brevi di valore - saggi di scienze politiche e filosofia, opuscoli, racconti - che non siano mai stati editi in italiano e che oggi, essendo fuori dal diritto d'autore, appartengono a tutti. Ogni testo che proponiamo è il frutto di una doppia cura: la selezione accurata di un'opera meritevole di essere riscoperta e il lavoro artigianale della sua traduzione. Non siamo solo recensori; siamo ponti verso un patrimonio di conoscenze e storie che rischiava di rimanere silenzioso. Questo spazio è dedicato a chi, come noi, crede che la cultura sia fatta anche di voci marginali, inattese e per questo preziose.",
  author: {
    name: "Antipsyché",
    bio: "Curatori, traduttori e archeologi di tesori inattesi.",
    avatar: "images/avatar.jpg"
  },
  social: {
    instagram: "https://instagram.com/antipsyche",
    twitter: "https://twitter.com/antipsyche",
    linkedin: "https://linkedin.com/in/antipsyche",
    email: "antipsyche2@gmail.com"
  },
  siteUrl: "https://antipsyche.com"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;