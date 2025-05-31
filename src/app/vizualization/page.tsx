import Visualization from "@/components/pages/Visualization"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "תצוגת תוצאות האבחון | תוכנית דיגיטלית לרשויות",
  description:
    "צפה בתוצאות השאלון שנענו על-ידי משתתפים ברשות המקומית. השוואה בין מצב קיים למצב רצוי לפי מימדי החדשנות.",
}

export default function CategoriesPage() {
  return <Visualization />
}
