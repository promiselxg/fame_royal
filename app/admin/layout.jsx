import { raleway } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "../(client)/globals.css";
import "./dashboard.css";

import SideNav from "./_components/sidenav/sidenav";
import { AuthContextProvider } from "@/context/authContext";
import ToggleSideNav from "./_components/sidenav/toggle";
import { ImageProvider } from "@/context/imageUpload.context";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Dashboard |  Rofad91 logistic services ltd",
  description: "Rofad91 logistic services ltd",
};

export const fetchCache = "force-no-store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <ImageProvider>
          <body
            className={cn(
              `${raleway.className} w-full h-fit flex md:h-screen overflow-hidden`
            )}
          >
            <SideNav />
            <div className="bg-[whitesmoke] h-screen rounded-[8px] w-full overflow-hidden relative">
              <ToggleSideNav />
              {children}
            </div>
            <Toaster />
          </body>
        </ImageProvider>
      </AuthContextProvider>
    </html>
  );
}
