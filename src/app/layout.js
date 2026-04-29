import "./globals.css";
import ScrollToTop from "./components/Scroll";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://evolve.nitb.in"),
  title: { default: "Evolve - NIT Bhopal", template: "%s | EVOLVE NITB" },
  description:
    "Evolve is an interdisciplinary technical club at Maulana Azad National Institute of Technology, Bhopal, driven by hands-on learning and innovative problem-solving. It welcomes students passionate about robotics, mechanical, electrical, and software development, and has earned recognition beyond campus with numerous prizes and achievements.",
  icons: {
    icon: "https://evolve.nitb.in/Logo/Evolve-Logo-circle.ico",
  },
  keywords: [
    "Techincal Club of MANIT Bhopal",
    "EVOLVE NITB",
    "EVOLVE MANIT Bhopal",
    "EVOLVE NIT Bhopal",
    "EV ClUB MANIT BHOPAL",
    "EVOLVE",
    "INTERDISCIPLINARY CLUB NIT BHOPAL",
    "EV EXPO",
    "ROBOTICS NIT BHOPAL",
    "TECH TRACK",
    "ROBOFEST MANIT BHOPAL",
    "RETRO FITTING MANIT BHOPAL",
  ],
  authors: [
    {
      name: "Aadi Jain",
      url: "https://www.linkedin.com/in/aadi-jain-42a765319/",
    },
    {
      name: "Yatharth Upmanyu",
      url: "https://www.linkedin.com/in/yatharth-upmanyu-b85781320/",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://evolve.nitb.in",
    siteName: "Evolve - NIT Bhopal",
    description:
      "Evolve is an interdisciplinary technical club at Maulana Azad National Institute of Technology, Bhopal, driven by hands-on learning and innovative problem-solving. It welcomes students passionate about robotics, mechanical, electrical, and software development, and has earned recognition beyond campus with numerous prizes and achievements.",
    images: [
      {
        url: "https://evolve.nitb.in/Logo/Evolve-Logo-black.png",
        width: 512,
        height: 512,
        alt: "Evolve NITB Bhopal Logo",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Evolve - NIT Bhopal",
  url: "https://evolve.nitb.in",
  logo: "https://evolve.nitb.in/Logo/Evolve-Logo-circle.ico",
  sameAs: [
    "https://www.linkedin.com/company/evolve-nit-bhopal/",
    "https://www.instagram.com/evolve_nitb/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Y41EaDaFLEO5saXVvj-AZEwQMfnT4QoxRaS3RBz0-KU"
        />
        <meta
          name="google-site-verification"
          content="oW8s8LT-p6z2q1uFqVqK8ebu_YU7s0Q41aDSJN3Y9z0"
        />
        <link rel="canonical" href="https://evolve.nitb.in/" />
        <link rel="icon" href="https://evolve.nitb.in/Logo/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="antialiased h-dvh w-full">
        {children}
        <ScrollToTop />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}