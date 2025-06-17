import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Buy & Sell Gold, Silver, Platinum in Utica";
const META_DESCRIPTION ="Trusted local buyer of gold, silver, and platinum bullion and jewelry in Utica. Get instant, fair payouts.";
const META_KEYWORDS ="sell gold Utica, buy silver Utica, platinum buyer, bullion Utica, gold silver exchange near me";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/gold-silver-platinum`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});

export default function GoldSilverPlatinumLayout({ children }) {
  return children
}
