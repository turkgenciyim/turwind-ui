import "./globals.css";
import Navigation from "@/app/components/Navigation";
import classNames from "classnames";
import { IBM_Plex_Sans, Roboto } from "next/font/google";

// Font files can be colocated inside of `app`

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const ibmPlex = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={classNames(
          roboto.className,
          roboto.variable,
          ibmPlex.variable,
          "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] bg-black from-black via-blue-950/50 to-black"
        )}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
