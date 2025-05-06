export interface HeaderProps {
  isOnMainPage?: boolean
}
export interface SearchInputProps {
  isMainPage?: boolean
}
export interface BurgerMenuProps {
  isMainPage?: boolean
  isOpen: boolean
  toggleMenu: () => void
}

export interface BurgerProps {
  isOpen: boolean
}

export interface BurgerIconProps extends BurgerProps {
  isMainPage?: boolean
}
