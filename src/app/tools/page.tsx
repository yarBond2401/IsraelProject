import Tools from "@/components/pages/Tools"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "הכלים המומלצים עבורך | תוכנית דיגיטלית לרשויות",
  description:
    "עיין ברשימת כלים מותאמים אישית לרשות המקומית שלך בהתאם לתשובות שהוזנו בשאלון האבחון.",
}
export default function ToolsPage() {
  return <Tools />
}
