export type ArchiveLink = {
  label: string;
  href: string;
};

export type ArchiveImage = {
  src?: string;
  alt: string;
  label: string;
};

export type ArchiveSection = {
  title: string;
  items: string[];
};

export type ArchiveEntry = {
  id: string;
  slug: string;
  title: string;
  date: string;
  dateSort: string;
  location: string;
  summary: string;
  description: string[];
  flyerImage: ArchiveImage;
  galleryImages: ArchiveImage[];
  sections: ArchiveSection[];
  links: ArchiveLink[];
  tags: string[];
  soundcloudUrl?: string;
};

const gallerySlots = (title: string): ArchiveImage[] =>
  Array.from({ length: 6 }, (_, index) => ({
    alt: `Placeholder gallery slot ${index + 1} for ${title}`,
    label: `Gallery ${String(index + 1).padStart(2, "0")}`
  }));

export const events: ArchiveEntry[] = [
  {
    id: "nightspacer-x-perspex",
    slug: "nightspacer-x-perspex",
    title: "Nightspacer x Perspex",
    date: "22-24 August 2025",
    dateSort: "2025-08-22",
    location: "Ciherang, Tanjungsari, West Java",
    summary: "Three days and two nights of sound without limits.",
    description: ["Join us for 3 days & 2 nights of sound without limits."],
    flyerImage: {
      src: "/archive/nightspacer-x-perspex.png",
      alt: "Nightspacer x Perspex — event flyer, Ciherang August 2025",
      label: "Event Flyer"
    },
    galleryImages: [],
    sections: [
      { title: "Lighting & Multimedia", items: ["Convert"] },
      { title: "Live Visual Installation", items: ["Glasoon"] },
      {
        title: "Collectively Organized With",
        items: ["Black O Society", "Convert", "Obscura Signal", "Para Studio", "Ruang Bavr"]
      }
    ],
    links: [],
    soundcloudUrl: "https://soundcloud.com/prspx-909/sets/nightspacer-x-perspex-ciherang",
    tags: ["campout", "collaboration", "sound", "visual installation"]
  },
  {
    id: "campout-vol-ii",
    slug: "campout-vol-ii",
    title: "Campout Vol. II",
    date: "1 November 2025",
    dateSort: "2025-11-01",
    location: "Tibuan Waterfall Campground, Buleleng",
    summary: "The ritual returns to the forest, from sunset to sunrise.",
    description: ["The ritual returns to the forest.", "From sunset to sunrise."],
    flyerImage: {
      alt: "Placeholder flyer scan for Campout Vol. II",
      label: "Flyer scan"
    },
    galleryImages: gallerySlots("Campout Vol. II"),
    sections: [
      {
        title: "Featuring",
        items: [
          "AK-DUB",
          "DR. YEZ",
          "SAN GONDEZ",
          "GET THE GAT",
          "HATAGARAH",
          "NOOR",
          "MASAGI × MASAYU × DJ BASICCC",
          "SAM FUTURA",
          "SEABASS",
          "TODJON × KASEM",
          "SU66EN9"
        ]
      },
      { title: "Visual & Lighting Installation", items: ["Obscura Signal"] },
      {
        title: "Built By",
        items: ["Nightspacer Bali", "Pure! Records", "Perspex", "Obscura Signal"]
      }
    ],
    links: [],
    tags: ["campout", "forest", "buleleng", "collaboration"]
  },
  {
    id: "entering-2026-portal",
    slug: "entering-2026-portal",
    title: "Entering 2026 Portal",
    date: "31 December 2025",
    dateSort: "2025-12-31",
    location: "New Year's Eve collaboration",
    summary: "Two stages, different tempos, and Perspex sound inside a larger festival environment.",
    description: [
      "Two stages. Different tempos.",
      "This New Year's Eve collaboration brought Perspex sound into a larger festival environment while maintaining experimental roots, underground culture and emotional intensity."
    ],
    flyerImage: {
      alt: "Placeholder flyer scan for Entering 2026 Portal",
      label: "Flyer scan"
    },
    galleryImages: gallerySlots("Entering 2026 Portal"),
    sections: [
      {
        title: "Sumbu Stage",
        items: ["Alkahfa (Hybrid Set)", "Paradata (A/V Set)", "Su66en9 (Hybrid Set)"]
      },
      {
        title: "Detak Stage",
        items: ["Ambrukt (DJ Set)"]
      }
    ],
    links: [],
    tags: ["festival", "new year", "collaboration", "live"]
  }
];

export const getArchiveEntryBySlug = (slug: string) =>
  events.find((entry) => entry.slug === slug);
