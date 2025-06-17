import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Buy & Sell Bullion in Utica | Gold, Silver, Platinum";
const META_DESCRIPTION ="Deal in trusted bullion with real-time prices. Buy or sell gold, silver, or platinum securely in Utica.";
const META_KEYWORDS ="buy bullion Utica, sell bullion Utica, gold bars Utica, silver coins, platinum dealer Utica";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/bullion`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});

export default function BullionLayout({ children }) {
  return children
}
