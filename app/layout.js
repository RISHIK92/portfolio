import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Rishik",
  description: "Rishik is a Software Engineer based in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
        {children}
      </body>
    </html>
  );
}
