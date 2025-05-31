import Participants from "@/components/pages/Participants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "רישום משתתפים | תוכנית דיגיטלית לרשויות",
  description:
    "הזן את שמותיהם ותפקידיהם של המשתתפים שיקחו חלק בשאלון האבחון. מומלץ לצרף מגוון בעלי תפקידים לקבלת תובנות מדויקות.",
}
export default function ParticipantsPage() {
  return <Participants />
}
