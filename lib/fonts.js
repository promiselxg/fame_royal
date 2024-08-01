import {
  Inter,
  Barlow,
  Montserrat,
  Open_Sans,
  Syne,
  Raleway,
  Playfair_Display,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
});

export const syne = Syne({
  subsets: ["latin"],
});

export const raleway = Raleway({
  subsets: ["latin"],
});

export const playfair = Playfair_Display({
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
});
