import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Sell Antiques & Collectibles in Utica | Get Paid";
const META_DESCRIPTION =
  "We buy vintage collectibles, art, toys, books, and estate antiques. Honest value, expert appraisals in Utica.";
const META_KEYWORDS =
  "sell antiques Utica, collectible buyers Utica, estate buyers, vintage toy buyer, antique appraisal Utica";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/antiques`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});

export default function AntiquesLayout({ children }) {
  return children
}
