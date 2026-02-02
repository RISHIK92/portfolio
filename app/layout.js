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
  title: {
    default: "Rishik | Software Engineer & Creator",
    template: "%s | Rishik",
  },
  description:
    "Rishik is a Software Engineer based in India, specializing in Next.js, Firebase, AWS, and building scalable systems. Co-creator of Ripplex and passionate about AI integration.",
  applicationName: "Rishik Portfolio",
  authors: [{ name: "Rishik", url: "https://github.com/rishik92" }],
  generator: "Next.js",
  keywords: [
    "Rishik",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "AWS",
    "Devops",
    "Firebase",
    "Portfolio",
    "Ripplex",
    "Web Development",
  ],
  creator: "Rishik",
  publisher: "Rishik",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rishik | Software Engineer & Creator",
    description:
      "Curiosity leads the way. I build, break, and rebuild scalable systems.",
    // url: "https://rishik.dev", // Update with your actual domain
    siteName: "Rishik Portfolio",
    images: [
      {
        url: "/assets/profile-img.jpeg",
        width: 800,
        height: 800,
        alt: "Rishik Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishik | Software Engineer & Creator",
    description:
      "Curiosity leads the way. I build, break, and rebuild scalable systems.",
    images: ["/assets/profile-img.jpeg"],
    creator: "@prebuiltui", // From footer, x.com/prebuiltui
  },
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
