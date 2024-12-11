import { cn } from "@/lib/utils";
import { barlow } from "@/lib/fonts";
import { Toaster } from "@/components/ui/toaster";
import { AuthContextProvider } from "@/context/authContext";
import "../admin/dashboard.css";
export const metadata = {
  title: "Login |  Fame Royal Travels",
  description: "Fame Royal Travels | Authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={cn(`${barlow.className} bg-[#000]`)}>
          {children}
          <Toaster />
        </body>
      </AuthContextProvider>
    </html>
  );
}
