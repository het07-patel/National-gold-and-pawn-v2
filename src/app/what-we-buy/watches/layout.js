import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Trusted Watch Buyers in Utica | Sell Watches";
const META_DESCRIPTION ="Sell your watch with ease in Utica. Get quick cash for luxury, vintage, and everyday timepieces.";
const META_KEYWORDS ="sell watches Utica, watch buyers near me, luxury watch buyer Utica, used watches for sale, Rolex buyer Utica";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/watches`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});

export default function WatchesLayout({ children }) {
  return children
}
