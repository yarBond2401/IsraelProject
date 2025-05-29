// "use client"
// import React, { useCallback, useEffect, useState } from "react"
// import { Box, Button, Typography } from "@mui/material"
// import Link from "next/link"
// import Image from "next/image"
// import { LOGOS } from "./constants"
// import {
//   BlackHeaderLink,
//   HeaderContainer,
//   HeaderContent,
//   HeaderLink,
//   HeaderWrapper,
//   LogosContainer,
//   LogOutButton,
//   PurpleHeaderLink,
// } from "./styled"
// import SearchInput from "./components/SearchInput"
// import BurgerMenu from "./components/MenuBurger"
// import { HeaderProps } from "@/interfaces/header"
// const Header: React.FC<HeaderProps> = ({ isOnMainPage = true }) => {
//   const [username, setUsername] = useState<string | null>(null)

//   useEffect(() => {
//     const storedUser = localStorage.getItem("loggedInUser")
//     setUsername(storedUser)
//   }, [])
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 60
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [scrolled])
//   const toggleMenu = useCallback(() => {
//     setMenuOpen((prev) => !prev)
//   }, [])
//   return (
//     <HeaderWrapper isMainPage={isOnMainPage} scrolled={scrolled}>
//       <HeaderContainer>
//         <LogosContainer>
//           {LOGOS.map((logo, index) => (
//             <Link href="/" key={index}>
//               <Image
//                 src={`/images/svg/header/${logo.name}.png`}
//                 width={logo.width}
//                 height={logo.heigth}
//                 alt={logo.name}
//               />
//             </Link>
//           ))}
//         </LogosContainer>
//         <HeaderContent sx={{ display: { xs: "none", lg: "flex" } }}>
//           <Box
//             sx={{
//               display: "flex",
//               gap: "25px",
//               alignItems: "center",
//             }}
//           >
//             {isOnMainPage && !username && (
//               <>
//                 <Link href="/signIn">
//                   <Button variant="secondary">הרשמה</Button>
//                 </Link>
//               </>
//             )}

//             {isOnMainPage && username && (
//               <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                 <Typography
//                   sx={{
//                     fontWeight: 600,
//                     fontSize: "14px",
//                     color: "#fff",
//                   }}
//                 >
//                   שלום, {username}
//                 </Typography>
//                 <LogOutButton
//                   variant="secondary"
//                   onClick={() => {
//                     localStorage.removeItem("loggedInUser")
//                     window.location.reload()
//                   }}
//                 >
//                   התנתק
//                 </LogOutButton>
//               </Box>
//             )}
//             {!isOnMainPage && (
//               <PurpleHeaderLink href="/">{username}</PurpleHeaderLink>
//             )}
//             {!isOnMainPage && (
//               <BlackHeaderLink href="/">כלי אבחוני</BlackHeaderLink>
//             )}
//           </Box>
//         </HeaderContent>
//         <BurgerMenu
//           isOpen={menuOpen}
//           toggleMenu={toggleMenu}
//           isMainPage={isOnMainPage}
//         />
//       </HeaderContainer>
//     </HeaderWrapper>
//   )
// }

// export default Header
// src/components/Header/index.tsx
"use client"

import React, { useCallback, useEffect, useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/contexts/AuthContext"
import {
  BlackHeaderLink,
  HeaderContainer,
  HeaderContent,
  HeaderWrapper,
  LogosContainer,
  LogOutButton,
  PurpleHeaderLink,
} from "./styled"
import BurgerMenu from "./components/MenuBurger"
import { HeaderProps } from "@/interfaces/header"

const Header: React.FC<HeaderProps> = ({ isOnMainPage = true }) => {
  const { user: username, logout } = useAuth()

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  const handleLogout = () => {
    logout()
  }

  return (
    <HeaderWrapper isMainPage={isOnMainPage} scrolled={scrolled}>
      <HeaderContainer>
        <LogosContainer>
          <Link href="/">
            <Image
              src={`/images/svg/header/header-logo-1.png`}
              width={174}
              height={70}
              alt="header-logo"
            />
          </Link>
        </LogosContainer>

        <HeaderContent sx={{ display: { xs: "none", lg: "flex" } }}>
          <Box sx={{ display: "flex", gap: "25px", alignItems: "center" }}>
            {isOnMainPage && !username && (
              <Link href="/signIn">
                <Button variant="secondary">הרשמה</Button>
              </Link>
            )}

            {isOnMainPage && username && (
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Typography
                  sx={{ fontWeight: 600, fontSize: "14px", color: "#fff" }}
                >
                  שלום, {username}
                </Typography>
                <LogOutButton variant="secondary" onClick={handleLogout}>
                  התנתק
                </LogOutButton>
              </Box>
            )}

            {!isOnMainPage && username && (
              <PurpleHeaderLink href="/">{username}</PurpleHeaderLink>
            )}
            {!isOnMainPage && (
              <BlackHeaderLink href="/">כלי אבחוני</BlackHeaderLink>
            )}
          </Box>
        </HeaderContent>

        <BurgerMenu
          isOpen={menuOpen}
          toggleMenu={toggleMenu}
          isMainPage={isOnMainPage}
        />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
