import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Laurence Deroche, soins énergétiques, hypnose, massage ventouses Tui Na",
  description:
    "Laurence Deroche, soins énergétiques, hypnose, massage ventouses Tui Na",
  favicon: "./favicon.ico",
  keywords:
    "Soins énergétiques, Reiki, Lahochi, Hypnose, Massages ventouses Tui Na ",
  author: "Éric Castets",
  ogTitle:
    "Laurence Deroche, soins énergétiques, hypnose, massage ventouses Tui Na",
  ogDescription:
    "Laurence Deroche, soins énergétiques, hypnose, massage ventouses Tui Na",
  ogType: "website",
  ogUrl: "https://laurence-deroche.vercel.app/",
  ogLocale: "fr_FR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.favicon} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:locale" content={metadata.ogLocale} />
        <meta property="og:image" content="./opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="screen Laurence Deroche" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://laurence-deroche.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Laurence Deroche, soins énergétiques, hypnose, massage ventouses Tui Na"
        />
        <meta
          property="twitter:description"
          content="Laurence Deroche, soins énergétiques (Reiki et Lahochi), hypnose, massage ventouses Tui Na"
        />
        <meta property="twitter:image" content="../opengraph-image.png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
