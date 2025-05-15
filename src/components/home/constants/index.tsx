export const LINKS = [
  {
    text: "רשויות מקומיות",
    bgColor: "rgba(76, 111, 142, 0.6)",
  },
  {
    text: "ספקי שירות",
    bgColor: "rgba(51, 110, 116, 0.6)",
  },
  {
    text: "סטארטאפים",
    bgColor: "rgba(84, 106, 121, 0.6)",
  },
]
export const FOOTER_LINKS = [
  { value: "אודות" },
  { value: "יצירת קשר" },
  { value: "תקנון" },
]
export interface MainSlide {
  id: string
  redirectTo: string
  imageSrc: string
  title: string
}
export const MAIN_SLIDES: MainSlide[] = [
  {
    id: "public-engagement",
    redirectTo: "/project/public-engagement",
    imageSrc: "/images/webp/projects/slider/public-eng-1.png",
    title: "מערכת לקיום הליכי שיתוף ציבור בכלל שלבי עיצוב המועצה",
  },
  {
    id: "bi-system",
    redirectTo: `/project/bi-system`,
    imageSrc: "/images/webp/projects/project-6.png",
    title: "מערכת לניהול משימות מתוך תכנית עבודה",
  },
  {
    id: "contractor-tracking",
    redirectTo: "/project/contractor-tracking",
    imageSrc: "/images/webp/projects/slider/contr-tracking-1.png",
    title: "מערכת לניהול משימות מתוך תכנית עבודה",
  },
]
