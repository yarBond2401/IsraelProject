import SignIn from "@/components/pages/SignIn"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "כניסה למערכת",
  description: "התחברות לרשויות המקומיות והמשך שימוש בתוכנית.",
}
export default function SignInPage() {
  return <SignIn />
}
