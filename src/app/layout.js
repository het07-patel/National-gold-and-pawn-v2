import "./globals.css";
import Layout from "@/components/layout";
import { generateCurrentTimeAndDate } from "@/utils/common";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  googleAnalyticsId,
  googleSiteVerification,
} from "@/utils/environments";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://nationalgoldandpawn.com";

const META_TITLE = "Reliable Pawn Shop – Buy, Sell, or Pawn with Confidence";
const META_DESCRIPTION =
  "Discover our trusted pawn services for jewelry, electronics, tools, and more. Get fair appraisals, instant cash, and exceptional customer service today!";
const META_KEYWORDS =
  "gold for Cash Utica, Cash for Gold Utica, Cash for Diamonds Utica, Diamond Buyers Utica, Watch Buyer Utica, Pawn Shop Utica, Coin Buyers Utica, Customized Jewelry Utica, cash for Diamonds Utica, pawn shop Utica, Wholesale Jewelry Utica, best pawn store Utica, gold buyers Utica, silver buyers Utica, coins buyers Utica, buy coins Utica, buy diamond jewelry Utica, sell jewelry Utica, sell bullions Utica, buy bullions Utica, sell antiques Utica, buy antiques Utica, buy electronics Utica, sell electronics Utica, sell games Utica, buy musical equipment Utica, sell musical equipment Utica ,buy sports memorabilia Utica, sell sports memorabilia Utica, sell coin Utica, Estate buyers Utica, Scrap Jewelry buyer Utica, Broken Jewelry Buyer Utica, Auctioneers Utica, Used car buyers Utica, Buy Here, Pay Here Utica";
const CANONICAL_URL = "https://nationalgoldandpawn.com";
const OPEN_GRAPH_IMAGE = "/opengraph-image.png";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  viewport: "width=device-width, initial-scale=1",
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "National Gold and Pawn | Pawn Shop",
    images: [
      {
        url: OPEN_GRAPH_IMAGE,
        width: 1200,
        height: 630,
        alt: "National Gold & Pawn",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [OPEN_GRAPH_IMAGE],
  },
  verification: {
    google: googleSiteVerification,
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-title": "National Gold & Pawn",
    "article:modified_time": generateCurrentTimeAndDate(),
    profile: "https://gmpg.org/xfn/11",
    generator:
      "Elementor 3.18.3; features: e_dom_optimization, e_optimized_assets_loading, additional_custom_breakpoints, block_editor_assets_optimize, e_image_loading_optimization; settings: css_print_method-external, google_font-enabled, font_display-auto",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="National Gold and Pawn"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter?.className} `}>
        <Layout>{children}</Layout>
      </body>
      <GoogleAnalytics gaId={googleAnalyticsId} />
    </html>
  );
}
