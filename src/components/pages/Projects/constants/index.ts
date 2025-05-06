interface ButtonsProps {
  title: string
  filterKey: string
}

export interface CardsProps {
  id: string
  filterKey: string
  button: string
  title: string
  imageSrc: string
}
export const FILTER_BUTTONS: ButtonsProps[] = [
  { title: "הכל", filterKey: "all" },
  { title: "מערכות בינה עסקית וקבלת החלטות", filterKey: "business" },
  { title: "מערכות לניהול משימות ופרויקטים", filterKey: "public" },
  { title: "שיתוף ציבור", filterKey: "management" },
  { title: "ניהול אשפה", filterKey: "waste" },
]

export const CARDS: CardsProps[] = [
  {
    id: "public-engagement",
    filterKey: "management",
    button: " שיתוף ציבור",
    title: " מערכת לקיום הליכי שיתוף ציבור בכלל נושאי העיסוק של הרשות המקומית",
    imageSrc: "/images/webp/projects/project-1.png",
  },
  {
    id: "contractor-tracking",
    filterKey: "public",
    button: "מערכות לניהול משימות ופרויקטים",
    title: " מעקב ובקרה אחר הקבלנים – כנסות ",
    imageSrc: "/images/webp/projects/project-2.png",
  },
  {
    id: "task-budget-management",
    filterKey: "public",
    button: " מערכות לניהול משימות ופרויקטים",
    title: "מערכת לניהול משימות ופרויקטים מקושרת תקציב ותכניות עבודה",
    imageSrc: "/images/webp/projects/project-3.png",
  },
  {
    id: "meeting-task-management",
    filterKey: "public",
    button: "מערכות לניהול משימות ופרויקטים",
    title: "מערכת לניהול משימות מתוך פרוטוקול ישיבות",
    imageSrc: "/images/webp/projects/project-4.png",
  },
  {
    id: "workplan-task-management",
    filterKey: "public",
    button: "מערכות לניהול משימות ופרויקטים",
    title: "מערכת לניהול משימות מתוך תכנית עבודה",
    imageSrc: "/images/webp/projects/project-5.png",
  },
  {
    id: "bi-system",
    filterKey: "business",
    button: "מערכות בינה עסקית וקבלת החלטות",
    title: "מערכת BI",
    imageSrc: "/images/webp/projects/project-6.png",
  },
  {
    id: "decision-support",
    filterKey: "business",
    button: "מערכות בינה עסקית וקבלת החלטות",
    title: "כלי לסיוע בקבלת החלטות",
    imageSrc: "/images/webp/projects/project-7.png",
  },
  {
    id: "regional-center",
    filterKey: "business",
    button: "מערכות בינה עסקית וקבלת החלטות",
    title: "מרכז מידע אזורי",
    imageSrc: "/images/webp/projects/project-8.png",
  },
  {
    id: "ashdod-communities",
    filterKey: "management",
    button: "שיתוף ציבור",
    title: "ניהול קהילות ושיתוף ציבור בעיריית אשדוד",
    imageSrc: "/images/webp/projects/project-9.png",
  },
  {
    id: "smart-waste",
    filterKey: "waste",
    button: "יהול אשפה",
    title: "מערכת חכמה לפינוי אשפה",
    imageSrc: "/images/webp/projects/project-10.png",
  },
  {
    id: "bi-support-tool",
    filterKey: "business",
    button: "מערכות בינה עסקית וקבלת החלטות",
    title: "BI – מערכת סיוע בקבלת החלטות",
    imageSrc: "/images/webp/projects/project-11.png",
  },
  {
    id: "ecocall-waste",
    filterKey: "waste",
    button: "ניהול אשפה",
    title: "מערכת חכמה לפינוי אשפה – אקוקל",
    imageSrc: "/images/webp/projects/project-12.png",
  },
]
