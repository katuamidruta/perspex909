export const site = {
  name: "Perspex909",
  displayName: "PERSPEX909",
  description: "Independent electronic transmissions from Indonesia.",
  url: "https://perspex909.com",
  bandcampUrl: "https://perspex.bandcamp.com/",
  instagramUrl: "https://www.instagram.com/prspx.909/",
  soundcloudUrl: "https://soundcloud.com/prspx-909"
};

// The site is one document, so the nav points into it rather than away.
// "/" is the logo's job; keeping it here would only repeat the mark.
// Document order: the label chapter opens the page, the shop closes it —
// so the numbers count in the same direction the page scrolls.
export const navItems = [
  { label: "ABOUT", href: "#label" },
  { label: "ARCHIVE", href: "#archive" },
  { label: "RELEASE", href: "#release" },
  { label: "SHOP", href: "#artifact" }
];
