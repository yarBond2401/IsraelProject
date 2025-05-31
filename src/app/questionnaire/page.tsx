import Questionnaire from "@/components/pages/Questionnaire"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "שאלון אבחון - חדשנות מוניציפאלית | תוכנית דיגיטלית לרשויות",
  description:
    "ענה על שאלון האבחון בשבעת מימדי החדשנות המוניציפאלית כדי להעריך את מצב הרשות המקומית ולקבל תובנות מותאמות.",
}
export default function QuestionnairePage() {
  return <Questionnaire />
}
