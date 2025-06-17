import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Buy & Sell Electronics and Tools in Utica";
const META_DESCRIPTION ="Get top value for electronics and tools near Utica. Fair prices, fast deals, and trusted local service.";
const META_KEYWORDS ="sell electronics Utica, buy tools Utica, used electronics buyer, electronic tools Utica, pawn electronics Utica";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/electronics-and-tools`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});

export default function ElectronicsLayout({ children }) {
  return children
}
