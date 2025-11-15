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
  title: "Rishik Portfolio - PrebuiltUI",
  description:
    "Rishik  is a frontend web developer based in London, UK. I am a self-taught developer with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
        {children}
      </body>
    </html>
  );
}
