interface HeaderTag {
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
export interface Label {
  label: string
}
export interface SlideData {
  imageSrc: string
}
export interface Article {
  title: string
  description: string
}
export interface Email {
  title: string
}

export interface ProjectsDetails {
  id: string
  filterKey: string
  name: string
  headerTitle: string
  tags: HeaderTag[]
  statuses: Label[]
  mainArticles: MainArticle[]
  suitable: string
  recommendations: string
  contacts: {
    title: string
    name: string
    role: string
    email: string
  }
  providerBlock: {
    title: string
    iconSrc: string
    articles: Article[]
    emails: Email[]
  }
  constactBlock: {
    title: string
  }
  slider: SlideData[]
}
