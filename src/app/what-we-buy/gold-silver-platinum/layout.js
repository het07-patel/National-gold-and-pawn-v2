import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "";
const META_DESCRIPTION =
  "";
const META_KEYWORDS =
  "";
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
