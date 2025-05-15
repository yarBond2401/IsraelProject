interface HeaderLabel {
  title: string
  isFirst?: boolean
}
interface MainArticle {
  title: string
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
    adressAdd: string
    email: string
  }
  constactBlock: {
    title: string
    contactButtons: ContactButton[]
  }
  slider: SlideData[]
}
