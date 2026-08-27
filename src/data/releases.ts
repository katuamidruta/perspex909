export type Track = {
  number: number;
  artist: string;
  title: string;
  duration?: string;
};

export type Release = {
  id: string;
  slug: string;
  title: string;
  artist: string;
  catalogCode: string;
  releaseDate: string;
  format: string;
  trackCount: number;
  /* Required: the chronicle draws it and srcset() reads it. */
  coverImage: string;
  coverAlt: string;
  summary: string;
  notes: string[];
  /* role reads dim, names read bright — split so the markup can tell them
     apart. */
  credits: Array<{ role: string; names: string[] }>;
  links: {
    bandcamp: string;
    preview: string;
  };
  galleryImages?: Array<{ src: string; alt: string }>;
  relatedProducts: string[];
  tracklist: Track[];
};

export const releases: Release[] = [
  {
    id: "va01",
    slug: "various-artists-vol-01",
    title: "Various Artists Vol. 01",
    artist: "Various Artists",
    catalogCode: "VA01",
    releaseDate: "2024-12-09",
    format: "Digital compilation",
    trackCount: 36,
    coverImage: "/archive/prod1-3.webp",
    coverAlt: "Various Artists Vol. 01 — release artwork",
    galleryImages: [
      { src: "/archive/random1-14.webp", alt: "VA01 — release documentation" },
      { src: "/archive/random1-13.webp", alt: "VA01 — release documentation" },
      { src: "/archive/prod1-4.webp", alt: "VA01 — release documentation" },
      { src: "/archive/prod1-6.webp", alt: "VA01 — release documentation" },
      { src: "/archive/prod1-7.webp", alt: "VA01 — release documentation" },
    ],
    summary:
      "Thirty-six tracks from the Perspex orbit club pressure, rupture, rebuild, and post-floor transmissions, documented as VA01.",
    notes: [
      "More than a compilation, VA01 is a time capsule: a document of sound, vision, and emotion shaped through experimentation, transformation, and collective energy.",
      "The first volume exists as a physical artifact—a hard-covered printed zine with an embossed 16GB USB 3.0 containing all 36 tracks. Made to be held, kept, and returned to.",
      "VA01 brings together artists from different corners of the scene without forcing them into a single sound or direction. Each contribution stands on its own, while the collection becomes a wider document of a particular moment.",
      "Available online and offline.",
    ],
    credits: [
      { role: "Published by", names: ["Studio Pancaroba"] },
      { role: "Printed by", names: ["Kape Hood Connection"] },
      { role: "Logo Design by", names: ["Tekknovoid"] },
      { role: "Photography by", names: ["Gloria Stephanie"] },
      { role: "Layout by", names: ["Calfskinmack", "Pu.ra.ssu"] },
      { role: "Mastered by", names: ["The Pandora Labs"] },
    ],
    links: {
      bandcamp: "https://perspex.bandcamp.com/album/various-artists-vol-01",
      preview: "https://soundcloud.com/prspx-909/sets/va-01-compilation",
    },
    relatedProducts: [],
    tracklist: [
      { number: 1, artist: "Ambrukt", title: "Roboh", duration: "05:17" },
      {
        number: 2,
        artist: "Anton Rekov",
        title: "Sound Ashram",
        duration: "05:24",
      },
      {
        number: 3,
        artist: "Asylum Uniform",
        title: "Revival",
        duration: "04:01",
      },
      {
        number: 4,
        artist: "Barbara Pleaser",
        title: "444 Ether",
        duration: "07:05",
      },
      {
        number: 5,
        artist: "Beau Mahadev",
        title: "Mudslide",
        duration: "03:29",
      },
      {
        number: 6,
        artist: "Bwah:Spatium Feat Ajanaya",
        title: "Gully",
        duration: "02:41",
      },
      {
        number: 7,
        artist: "Caprithy",
        title: "What It Was",
        duration: "04:45",
      },
      {
        number: 8,
        artist: "Cloud Sector",
        title: "Accelerator",
        duration: "05:40",
      },
      { number: 9, artist: "Commoner", title: "T-Race", duration: "05:21" },
      {
        number: 10,
        artist: "Cristal No.5",
        title: "Imm0rT4L P4ri$$$",
        duration: "04:00",
      },
      {
        number: 11,
        artist: "D-Black",
        title: "Soft Bounce",
        duration: "04:56",
      },
      {
        number: 12,
        artist: "Funtime",
        title: "2002 Hot Import Nights",
        duration: "05:03",
      },
      {
        number: 13,
        artist: "Gato San Gondez",
        title: "Gopala",
        duration: "08:22",
      },
      { number: 14, artist: "Gatra", title: "Sahur Jam", duration: "05:59" },
      { number: 15, artist: "Glibly Ninja", title: "Tegak", duration: "04:02" },
      {
        number: 16,
        artist: "Grintabachan",
        title: "Nightclub Massacre",
        duration: "06:35",
      },
      { number: 17, artist: "Gvng.Yoga", title: "Maloz", duration: "05:08" },
      {
        number: 18,
        artist: "Jagajaga",
        title: "Act, React!",
        duration: "03:35",
      },
      { number: 19, artist: "Kimoji", title: "Axid Reflux", duration: "05:39" },
      {
        number: 20,
        artist: "Loudmouth",
        title: "Halt+Catch A Fire",
        duration: "04:40",
      },
      {
        number: 21,
        artist: "Mairakilla & Gozal",
        title: "Yoshimitsu Stage (PlayStation 2 Version) Remix",
        duration: "02:13",
      },
      {
        number: 22,
        artist: "Misanthropy Club",
        title: "Avaritia Greed Feat. Nai'X",
        duration: "02:28",
      },
      {
        number: 23,
        artist: "N5FR2",
        title: "Kage No Odoriko",
        duration: "09:14",
      },
      {
        number: 24,
        artist: "Paradata",
        title: "Dusty Dreams",
        duration: "06:29",
      },
      {
        number: 25,
        artist: "Psy Priestess",
        title: "Aliens Do Exist",
        duration: "04:40",
      },
      {
        number: 26,
        artist: "Sanjonas",
        title: "Epicenter Museum II",
        duration: "03:55",
      },
      {
        number: 27,
        artist: "Su66en9",
        title: "Cloudsss Pt.1",
        duration: "07:16",
      },
      { number: 28, artist: "Tasima", title: "Arus Suite", duration: "04:54" },
      {
        number: 29,
        artist: "Torturewave",
        title: "Fourth Miasma",
        duration: "02:24",
      },
      {
        number: 30,
        artist: "Vocabot-P & Angger Lengkara",
        title: "Candramawa",
        duration: "03:17",
      },
      { number: 31, artist: "Xin Lie", title: "Weaker", duration: "05:26" },
      { number: 32, artist: "Xyarim", title: "Zulmat", duration: "04:21" },
      { number: 33, artist: "Yoyo", title: "Inflammation", duration: "05:30" },
      { number: 34, artist: "Yuga", title: "Breaking Dawn", duration: "04:58" },
      {
        number: 35,
        artist: "동물 Sato",
        title: "Bred For Combat",
        duration: "06:26",
      },
      {
        number: 36,
        artist: "寒旭Hanxuhaux",
        title: "月满东阁Full Moon East Pavilion",
        duration: "05:36",
      },
    ],
  },
];
