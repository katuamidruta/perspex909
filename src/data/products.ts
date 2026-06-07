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
      alt: "Placeholder slot for the Limited Unisex PRSPX Tee hero product photo",
      label: "Product hero image"
    },
    reviewPhotos: [
      {
        alt: "Placeholder slot for PRSPX tee review photo 1",
        label: "Review photo 01"
      },
      {
        alt: "Placeholder slot for PRSPX tee review photo 2",
        label: "Review photo 02"
      }
    ],
    userPhotos: [
      {
        alt: "Placeholder slot for user-submitted PRSPX tee photo 1",
        label: "User photo 01"
      },
      {
        alt: "Placeholder slot for user-submitted PRSPX tee photo 2",
        label: "User photo 02"
      },
      {
        alt: "Placeholder slot for user-submitted PRSPX tee photo 3",
        label: "User photo 03"
      },
      {
        alt: "Placeholder slot for user-submitted PRSPX tee photo 4",
        label: "User photo 04"
      },
      {
        alt: "Placeholder slot for user-submitted PRSPX tee photo 5",
        label: "User photo 05"
      }
    ],
    specs: [
      { label: "Price", value: "350,000 IDR" },
      { label: "Fit", value: "Unisex" },
      { label: "Item", value: "PRSPX Tee" },
      { label: "Checkout", value: "Direct WhatsApp order" }
    ],
    credits: [
      { label: "Photo", value: "Photo by @guampardd" },
      { label: "Model", value: "Model @6rutal6rat" }
    ],
    editionNotes: [
      "Gallery support is prepared for one hero image, review photographs, and up to five user-submitted photos.",
      "Drop final product and fit photos into the existing image fields without changing the page layout."
    ],
    whatsappUrl:
      "https://wa.me/000000000000?text=Hi%20Perspex%2C%20I%20want%20to%20order%20the%20Limited%20Unisex%20PRSPX%20Tee."
  }
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
