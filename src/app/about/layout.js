import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Trusted Pawn Shop with Expert Service";
const META_DESCRIPTION =
  "Learn about our commitment to trust, transparency, and exceptional service. Discover why we’re the preferred choice for buying, selling, and pawning valuables.";
const META_KEYWORDS =
  "gold for Cash Utica, Cash for Gold Utica, Cash for Diamonds Utica, Diamond Buyers Utica, Watch Buyer Utica, Pawn Shop Utica, Coin Buyers Utica, Customized Jewelry Utica, cash for Diamonds Utica, pawn shop Utica, Wholesale Jewelry Utica, best pawn store Utica, gold buyers Utica, silver buyers Utica, coins buyers Utica, buy coins Utica, buy diamond jewelry Utica, sell jewelry Utica, sell bullions Utica, buy bullions Utica, sell antiques Utica, buy antiques Utica, buy electronics Utica, sell electronics Utica, sell games Utica, buy musical equipment Utica, sell musical equipment Utica ,buy sports memorabilia Utica, sell sports memorabilia Utica, sell coin Utica, Estate buyers Utica, Scrap Jewelry buyer Utica, Broken Jewelry Buyer Utica, Auctioneers Utica, Used car buyers Utica, Buy Here, Pay Here Utica";
const CANONICAL_URL = `${WebsiteUrl}/about`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});

export default function AboutUsLayout({ children }) {
  return children
}
