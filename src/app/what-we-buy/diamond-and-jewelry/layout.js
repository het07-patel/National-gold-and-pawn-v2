import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Sell Diamond Jewelry in Utica | Trusted Buyers";
const META_DESCRIPTION ="Get top cash offers for diamonds and fine jewelry in Utica. We buy rings, earrings, gold, and more.";
const META_KEYWORDS ="sell diamond jewelry Utica, cash for jewelry, gold buyers Utica, jewelry buyers near me, sell engagement ring Utica";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/diamond-and-jewelry`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});

export default function DiamondJewelryLayout({ children }) {
  return children
}
