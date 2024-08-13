import "../../globals.css";
import { cn } from "@/lib/utils";
import { playfair } from "@/lib/fonts";
import Header from "../_components/header/header";
import Footer from "../_components/footer/footer";

export const metadata = {
  title: "FAME ROYAL TRAVELS AND MULTISERVICES LIMITED",
  description:
    "Fame Royal Travels is a premier travel and tour company in Nigeria, renowned for its prominent status in the travel and tourism sector. Founded on 16th November 2012, we prioritize both individual and corporate travel needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(`${playfair.className}`)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
