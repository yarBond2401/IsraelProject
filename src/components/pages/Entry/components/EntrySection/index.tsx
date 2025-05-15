// // import React from "react"
// // import Link from "next/link"
// // import Image from "next/image"
// // import { EntrySectionData } from "@/interfaces/entry"
// // import {
// //   BackgroundContainer,
// //   EntrySectionBackground,
// //   EntrySectionContent,
// //   EntrySectionDescription,
// //   EntrySectionImageWrapper,
// //   EntrySectionTitle,
// //   EntrySectionWrapper,
// // } from "./styled"
// // import { Button } from "@mui/material"

// // const EntrySection: React.FC<EntrySectionData> = ({
// //   iconSrc,
// //   title,
// //   text,
// //   button,
// //   buttonColor,
// //   buttonVariant,
// //   pathTo,
// //   backgroundSrc,
// // }) => {
// //   return (
// //     <EntrySectionWrapper>
// //       <EntrySectionContent>
// //         <EntrySectionImageWrapper>
// //           <Image src={iconSrc} alt={title} width={90} height={90} />
// //         </EntrySectionImageWrapper>
// //         <EntrySectionTitle>{title}</EntrySectionTitle>
// //         <EntrySectionDescription>{text}</EntrySectionDescription>
// //         <Link href={pathTo} style={{ textDecoration: "none" }}>
// //           <Button variant={buttonVariant} size="big" color={buttonColor}>
// //             {button}
// //           </Button>
// //         </Link>
// //       </EntrySectionContent>
// //       <BackgroundContainer>
// //         <EntrySectionBackground
// //           src={backgroundSrc}
// //           alt="background-image"
// //           fill
// //           priority
// //         />
// //       </BackgroundContainer>
// //     </EntrySectionWrapper>
// //   )
// // }

// // export default EntrySection
// "use client"
// import React from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { EntrySectionData } from "@/interfaces/entry"
// import {
//   BackgroundContainer,
//   EntrySectionBackground,
//   EntrySectionContent,
//   EntrySectionDescription,
//   EntrySectionImageWrapper,
//   EntrySectionTitle,
//   EntrySectionWrapper,
// } from "./styled"
// import { Button } from "@mui/material"

// // const EntrySection: React.FC<EntrySectionData> = ({
// //   iconSrc,
// //   title,
// //   text,
// //   button,
// //   buttonColor,
// //   buttonVariant,
// //   pathTo,
// //   backgroundSrc,
// // }) => {
// //   return (
// //     <EntrySectionWrapper>
// //       <BackgroundContainer>
// //         <EntrySectionBackground
// //           src={backgroundSrc}
// //           alt="section-bg"
// //           fill
// //           priority
// //         />
// //       </BackgroundContainer>
// //       <EntrySectionContent>
// //         <EntrySectionImageWrapper>
// //           <Image src={iconSrc} alt={title} width={90} height={90} />
// //         </EntrySectionImageWrapper>
// //         <EntrySectionTitle>{title}</EntrySectionTitle>
// //         <EntrySectionDescription>{text}</EntrySectionDescription>
// //         <Link href={pathTo} style={{ textDecoration: "none" }}>
// //           <Button variant={buttonVariant} size="big" color={buttonColor}>
// //             {button}
// //           </Button>
// //         </Link>
// //       </EntrySectionContent>
// //     </EntrySectionWrapper>
// //   )
// // }
// const EntrySection: React.FC<EntrySectionData> = ({
//   iconSrc,
//   title,
//   text,
//   button,
//   buttonColor,
//   buttonVariant,
//   pathTo,
//   backgroundSrc,
// }) => {
//   return (
//     <EntrySectionWrapper backgroundSrc={backgroundSrc}>
//       <EntrySectionContent>
//         <EntrySectionImageWrapper>
//           <Image src={iconSrc} alt={title} width={90} height={90} />
//         </EntrySectionImageWrapper>
//         <EntrySectionTitle>{title}</EntrySectionTitle>
//         <EntrySectionDescription>{text}</EntrySectionDescription>
//         <Link href={pathTo} style={{ textDecoration: "none" }}>
//           <Button variant={buttonVariant} size="big" color={buttonColor}>
//             {button}
//           </Button>
//         </Link>
//       </EntrySectionContent>
//     </EntrySectionWrapper>
//   )
// }

// export default EntrySection

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { EntrySectionData } from "@/interfaces/entry"
import {
  EntrySectionContent,
  EntrySectionDescription,
  EntrySectionImageWrapper,
  EntrySectionTitle,
  EntrySectionWrapper,
} from "./styled"
import { Button } from "@mui/material"

const EntrySection: React.FC<EntrySectionData> = ({
  iconSrc,
  title,
  text,
  button,
  buttonColor,
  buttonVariant,
  pathTo,
  backgroundSrc,
}) => {
  return (
    <EntrySectionWrapper backgroundSrc={backgroundSrc}>
      <EntrySectionContent>
        <EntrySectionImageWrapper>
          <Image src={iconSrc} alt={title} width={90} height={90} />
        </EntrySectionImageWrapper>
        <EntrySectionTitle>{title}</EntrySectionTitle>
        <EntrySectionDescription>{text}</EntrySectionDescription>
        <Link href={pathTo} style={{ textDecoration: "none" }}>
          <Button variant={buttonVariant} size="big" color={buttonColor}>
            {button}
          </Button>
        </Link>
      </EntrySectionContent>
    </EntrySectionWrapper>
  )
}

export default EntrySection
