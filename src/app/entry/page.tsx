import Entry from "@/components/pages/Entry"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "בחירת כלי העבודה | תוכנית דיגיטלית לרשויות",
  description:
    "בחרו בין כלי האבחון לכלי ההבנה שלי – בהתאם לצורכי הרשות המקומית שלכם בתחום החדשנות המוניציפלית או העיר החכמה.",
}

export default function EntryPage() {
  return <Entry />
}
