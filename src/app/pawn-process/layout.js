import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Our Pawn Process – Quick, Easy, and Transparent";
const META_DESCRIPTION =
  "Learn about our simple pawn process. Get fair appraisals, instant cash offers, and secure transactions for your valuables with no hassle or hidden fees.";
const META_KEYWORDS =
  "gold for Cash Utica, Cash for Gold Utica, Cash for Diamonds Utica, Diamond Buyers Utica, Watch Buyer Utica, Pawn Shop Utica, Coin Buyers Utica, Customized Jewelry Utica, cash for Diamonds Utica, pawn shop Utica, Wholesale Jewelry Utica, best pawn store Utica, gold buyers Utica, silver buyers Utica, coins buyers Utica, buy coins Utica, buy diamond jewelry Utica, sell jewelry Utica, sell bullions Utica, buy bullions Utica, sell antiques Utica, buy antiques Utica, buy electronics Utica, sell electronics Utica, sell games Utica, buy musical equipment Utica, sell musical equipment Utica ,buy sports memorabilia Utica, sell sports memorabilia Utica, sell coin Utica, Estate buyers Utica, Scrap Jewelry buyer Utica, Broken Jewelry Buyer Utica, Auctioneers Utica, Used car buyers Utica, Buy Here, Pay Here Utica";
const CANONICAL_URL = `${WebsiteUrl}/pawn-process`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});

export default function PawnProcessLayout({ children }) {
  return children
}
