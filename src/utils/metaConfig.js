import { WebsiteUrl } from "./environments";
import { generateCurrentTimeAndDate } from "@/utils/common";

const DEFAULT_META = {
  title: "Reliable Pawn Shop – Buy, Sell, or Pawn with Confidence",
  description:
    "Discover our trusted pawn services for jewelry, electronics, tools, and more. Get fair appraisals, instant cash, and exceptional customer service today!",
  keywords:
    "gold for Cash Utica, Cash for Gold Utica, Cash for Diamonds Utica, Diamond Buyers Utica, Watch Buyer Utica, Pawn Shop Utica, Coin Buyers Utica, Customized Jewelry Utica, cash for Diamonds Utica, pawn shop Utica, Wholesale Jewelry Utica, best pawn store Utica, gold buyers Utica, silver buyers Utica, coins buyers Utica, buy coins Utica, buy diamond jewelry Utica, sell jewelry Utica, sell bullions Utica, buy bullions Utica, sell antiques Utica, buy antiques Utica, buy electronics Utica, sell electronics Utica, sell games Utica, buy musical equipment Utica, sell musical equipment Utica ,buy sports memorabilia Utica, sell sports memorabilia Utica, sell coin Utica, Estate buyers Utica, Scrap Jewelry buyer Utica, Broken Jewelry Buyer Utica, Auctioneers Utica, Used car buyers Utica, Buy Here, Pay Here Utica",
  url: WebsiteUrl,
  openGraphImage: "/opengraph-image.png",
};

export const generateMetadata = (customMeta = {}) => {
  const meta = { ...DEFAULT_META, ...customMeta };

  return {
    metadataBase: new URL(meta?.url),
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    viewport: "width=device-width, initial-scale=1",
    title: meta?.title,
    description: meta?.description,
    keywords: meta?.keywords,
    alternates: {
      canonical: meta?.url,
    },
    openGraph: {
      locale: "en_US",
      type: "website",
      title: meta?.title,
      description: meta?.description,
      url: meta?.url,
      siteName: meta?.title,
      images: [
        {
          url: meta?.openGraphImage,
          width: 1200,
          height: 630,
          alt: meta?.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title,
      description: meta?.description,
      images: [meta?.openGraphImage],
    },
    other: {
      "apple-mobile-web-app-title": "Treasure trove",
      "article:modified_time": generateCurrentTimeAndDate(),
      profile: "https://gmpg.org/xfn/11",
      generator:
        "Elementor 3.18.3; features: e_dom_optimization, e_optimized_assets_loading, additional_custom_breakpoints, block_editor_assets_optimize, e_image_loading_optimization; settings: css_print_method-external, google_font-enabled, font_display-auto",
    },
  };
};
