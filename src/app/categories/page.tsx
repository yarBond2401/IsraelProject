import Categories from "@/components/pages/Categories"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "מימדי חדשנות מוניציפאלית | תוכנית דיגיטלית לרשויות",
  description:
    "הכר את שבעת מימדי החדשנות המוניציפאלית לקראת מילוי שאלון האבחון. הבנת המימדים תסייע לך לאפיין את רמת החדשנות ברשות המקומית.",
}

export default function CategoriesPage() {
  return <Categories />
}
