import "./globals.css";
import { cn } from "@/lib/utils";
import { playfair } from "@/lib/fonts";
import Header from "./(home)/_components/header/header";
import Footer from "./(home)/_components/footer/footer";

export const metadata = {
  title: "Royal Fame Travels",
  description: "Generated by create next app",
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
