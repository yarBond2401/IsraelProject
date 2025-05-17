export interface SolutionLabel {
  title: string
}
interface HeaderLabel {
  title: string
  isFirst?: boolean
}
export interface MainArticleTitle {
  title: string
}
interface MainArticle {
  description: string
}
export interface ContactButton {
  title?: string
  variant?: string
  redirectTo?: string
  isGradient?: boolean
}
export interface SlideData {
  imageSrc: string
}
export interface ToolsDetails {
  id: string
  name: string
  headerTitle: string
  solutions: HeaderLabel[]
  mainArticles: MainArticle[]
  providerBlock: {
    title: string
    provider: string
    label: string
    iconSrc: string
    description: string
    adress: string
    phone: string
    email: string
  }
  contactBlock: {
    title: string
  }
  slider: SlideData[]
}
