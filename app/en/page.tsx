import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("en");

export default function Page() {
  return <HomePage lang="en" />;
}
