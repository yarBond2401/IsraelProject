import WelcomePage from "@/components/home"
import type { Metadata } from "next"
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://israel-project-six.vercel.app"
export const metadata: Metadata = {
  title: "תוכנית דיגיטלית לרשויות מקומיות | הבית",
  description:
    "הצטרפו לתוכנית שמחברת את העולם המוניציפלי לטכנולוגיות מתקדמות, כלים אבחוניים ופרקטיקות חדשניות לפיתוח הרשויות המקומיות.",
  openGraph: {
    title: "תוכנית דיגיטלית לרשויות מקומיות",
    description:
      "מחברים את העולם המוניציפלי לכלים, טכנולוגיות ולפרקטיקות המובילות בעולם.",
    url: baseUrl,
    siteName: "האתר שלך לרשויות מקומיות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: " תוכנית דיגיטלית לרשויות",
      },
    ],
  },
  metadataBase: new URL(baseUrl),
  keywords: [
    "רשות מקומית",
    "כלים דיגיטליים לרשויות",
    "פיתוח עירוני",
    "טכנולוגיה מוניציפלית",
    "אבחון דיגיטלי",
    "חדשנות מוניציפלית",
  ],
  category: "טכנולוגיה לרשויות",
  applicationName: "תוכנית דיגיטלית לרשויות",
  // creator: "",
  // publisher: "",
}

export default function Home() {
  return <WelcomePage />
}
