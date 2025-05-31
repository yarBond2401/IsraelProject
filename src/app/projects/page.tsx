import Projects from "@/components/pages/Projects"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "בחירת פרויקטים מותאמים | תוכנית דיגיטלית לרשויות",
  description:
    "עיינו בפרויקטים המותאמים לצרכי הרשות המקומית שלכם לפי קטגוריות ותחומי עניין. לחצו על פרויקט להמשך תהליך האבחון או ההבנה.",
}
export default function ParticipantsPage() {
  return <Projects />
}
