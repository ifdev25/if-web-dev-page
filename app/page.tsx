import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("fr");

export default function Page() {
  return <HomePage lang="fr" />;
}
