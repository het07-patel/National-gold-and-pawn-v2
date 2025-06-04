import "./globals.css";
import Layout from "@/components/layout";
import { generateMetadata } from "@/utils/metaConfig";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  googleAnalyticsId,
} from "@/utils/environments";

const inter = Inter({ subsets: ["latin"] });

export const metadata = generateMetadata();

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
