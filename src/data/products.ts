export type ProductImage = {
  src?: string;
  alt: string;
  label: string;
  credit?: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  artifactType: string;
  catalogCode: string;
  availability: string;
  priceLabel: string;
  summary: string;
  description: string[];
  heroImage: ProductImage;
  reviewPhotos: ProductImage[];
  userPhotos: ProductImage[];
  specs: {
    label: string;
    value: string;
  }[];
  credits: {
    label: string;
    value: string;
  }[];
  editionNotes: string[];
  whatsappUrl: string;
};

export const products: Product[] = [
  {
    id: "limited-unisex-prspx-tee",
    slug: "limited-unisex-prspx-tee",
    title: "Limited Unisex \"PRSPX\" Tee",
    artifactType: "Apparel",
    catalogCode: "PRSPX-TEE-01",
    availability: "Limited run",
    priceLabel: "350,000 IDR",
    summary:
      "A limited unisex PRSPX tee for bodies moving through club rooms, campouts, and archive photographs.",
    description: [
      "The shop opens with a single wearable artifact: a black PRSPX tee treated as field uniform, not seasonal merch.",
      "No checkout is implemented here. Orders move directly through WhatsApp so sizing, stock, and delivery can be handled person to person."
    ],
    heroImage: {
      src: "/archive/shirt1-1.jpg",
      alt: "Limited Unisex PRSPX Tee — product photo",
      label: "Product photo"
    },
    reviewPhotos: [
      {
        src: "/archive/shirt1-2.jpg",
        alt: "PRSPX Tee — review photo 01",
        label: "Review 01"
      },
      {
        src: "/archive/shirt1-3.jpg",
        alt: "PRSPX Tee — review photo 02",
        label: "Review 02"
      }
    ],
    userPhotos: [
      {
        src: "/archive/shirt1-4.jpg",
        alt: "PRSPX Tee — fit photo 01",
        label: "Fit 01"
      },
      {
        src: "/archive/shirt1-5.jpg",
        alt: "PRSPX Tee — fit photo 02",
        label: "Fit 02"
      },
      {
        src: "/archive/shirt1-6.jpg",
        alt: "PRSPX Tee — fit photo 03",
        label: "Fit 03"
      }
    ],
    specs: [
      { label: "Price", value: "350,000 IDR" },
      { label: "Fit", value: "Unisex" },
      { label: "Item", value: "PRSPX Tee" },
      { label: "Checkout", value: "Direct WhatsApp order" }
    ],
    credits: [
      { label: "Photo", value: "@guampardd" },
      { label: "Model", value: "@6rutal6rat" }
    ],
    editionNotes: [
      "Six field photographs by @guampardd featuring @6rutal6rat.",
      "Orders are handled person to person via WhatsApp — sizing, stock, and delivery details confirmed before shipping."
    ],
    whatsappUrl:
      "https://wa.me/000000000000?text=Hi%20Perspex%2C%20I%20want%20to%20order%20the%20Limited%20Unisex%20PRSPX%20Tee."
  }
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
