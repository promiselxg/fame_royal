import { cn } from "@/lib/utils";
import { work_sans } from "@/lib/fonts";
import ToggleSideNav from "./_components/sidenav/toggle";
import SideNav from "./_components/sidenav/sidenav";
import "../globals.css";
import "./dashboard.css";

export const metadata = {
  title: "FAME ROYAL TRAVELS AND MULTISERVICES LIMITED",
  description:
    "Fame Royal Travels is a premier travel and tour company in Nigeria, renowned for its prominent status in the travel and tourism sector. Founded on 16th November 2012, we prioritize both individual and corporate travel needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${work_sans.className} w-full h-fit flex md:h-screen overflow-hidden`
        )}
      >
        <SideNav />
        <div className="bg-[whitesmoke] h-screen rounded-[8px] w-full overflow-hidden relative">
          <ToggleSideNav />
          {children}
        </div>
      </body>
    </html>
  );
}
