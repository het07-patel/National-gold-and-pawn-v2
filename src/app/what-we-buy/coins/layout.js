import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = " Buy & Sell Coins in Utica | Coin Experts";
const META_DESCRIPTION ="We buy and sell rare coins, silver dollars, and collectibles. Fair evaluations and expert service in Utica.";
const META_KEYWORDS =" coin buyers Utica, sell rare coins, buy coins near Utica, silver dollars Utica, coin dealer near me";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/coins`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});

export default function CoinsLayout({ children }) {
  return children
}
