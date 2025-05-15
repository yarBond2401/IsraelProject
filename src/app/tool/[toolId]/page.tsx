import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Box } from "@mui/material"
import { TOOLS_DATA } from "@/components/toolComponents/constants"
import { notFound } from "next/navigation"
import { ToolPageBody } from "@/components/toolComponents/common/ToolPageBody"

interface ToolsPageProps {
  params: Promise<{ toolId: string }>
}

export async function generateStaticParams() {
  return Object.keys(TOOLS_DATA).map((toolId) => ({
    toolId,
  }))
}

export default async function ToolPage({ params }: ToolsPageProps) {
  const { toolId } = await params
  const toolData = TOOLS_DATA[toolId]

  if (!toolData) notFound()
  return (
    <Box>
      <Header isOnMainPage={false} />
      <Box component="main">
        <ToolPageBody toolData={toolData} />
      </Box>
      <Footer />
    </Box>
  )
}

// import { PROJECTS_DATA } from "@/components/projectDetails/constants"
// import { DetailsBlock } from "@/components/projectDetails/common/detailBlock"
// import { ProjectHeader } from "@/components/projectDetails/common/ProjectHeader"
// import Box from "@mui/material/Box"
// import Header from "@/components/home/welcome/Header"
// import Footer from "@/components/home/welcome/Footer"
// import { Typography } from "@mui/material"
// import { fallbackLng, Language, languages } from "@/app/i18n/settings"
// import { Metadata } from "next"

// interface Props {
//   params: Promise<{ lng: Language; projectId: string }>
// }

// export async function generateStaticParams() {
//   const projectIds = Object.keys(PROJECTS_DATA)

//   return languages.flatMap((lng) =>
//     projectIds.map((projectId) => ({
//       lng,
//       projectId,
//     }))
//   )
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { lng, projectId } = await params
//   const { metadata } = PROJECTS_DATA[projectId]

//   const baseUrl =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : process.env.NEXT_PUBLIC_SITE_URL || "https://www.softway-agency.com"

//   const path = `/projects/${projectId}`
//   const pageUrl = `${baseUrl}/${lng}${path}`

//   const alternates = languages.reduce((acc, lang) => {
//     acc[lang] = `${baseUrl}/${lang}${path}`
//     return acc
//   }, {} as Record<string, string>)

//   return {
//     title: metadata.title,
//     description: metadata.description,
//     alternates: {
//       // 🛑 🛑 🛑
//       // WE DON'T HAVE MULTI-LANGUAGE SUPPORT FOR PROJECTS YET
//       // WITH THE MULTI-LANGUAGE SUPPORT, WE HAVE TO USE
//       // canonical: lng ? pageUrl : `${baseUrl}/${fallbackLng}${path}`,
//       canonical: `${baseUrl}/${fallbackLng}${path}`,
//       languages: alternates,
//     },
//     openGraph: {
//       title: metadata.openGraph.title,
//       description: metadata.openGraph.description,
//       url: pageUrl,
//       siteName: metadata.openGraph.siteName,
//       images: metadata.openGraph.images.map((image) => ({
//         url: image.url,
//         width: image.width,
//         height: image.height,
//         alt: image.alt,
//       })),
//       locale: lng === "he" ? "he_IL" : "en_US",
//       type: "website",
//     },
//     // twitter: {
//     //   card: "summary_large_image",
//     //   title: "Soft Way Agency | Custom Software Experts",
//     //   description:
//     //     "Top-tier software development for startups & enterprises. Build your next big thing with Soft Way Agency.",
//     //   images: [`${baseUrl}/og-image.jpg`],
//     //   site: "@SoftWayAgency", // update with real handle if available
//     // },
//     metadataBase: new URL(baseUrl),
//     keywords: metadata.keywords,

//     category: "software development",
//     applicationName: "Soft Way Agency",
//     creator: "Soft Way Agency",
//     publisher: "Soft Way Agency",
//   }
// }

// export default async function ProjectPage({
//   params,
// }: {
//   params: Promise<{ lng: string; projectId: string }>
// }) {
//   const { projectId } = await params
//   const projectData = PROJECTS_DATA[projectId]

//   return (
//     <Box sx={{ backgroundColor: "#fff" }}>
//       <Header showSwitcher={false} />
//       <Box component="main">
//         <ProjectHeader
//           title={projectData.headerTitle}
//           text={projectData.headerText}
//           image={projectData.headerImage}
//         />
//         <Box
//           sx={{
//             direction: "ltr",
//             paddingBlockStart: { xs: "50px", lg: "100px" },
//             paddingBlockEnd: { xs: "30px", lg: "80px" },
//             maxInlineSize: 1320,
//             marginInline: "auto",
//             paddingInline: "20px",
//           }}
//         >
//           <Typography
//             variant="h2"
//             sx={{
//               textAlign: "center",
//               color: "#172337",
//               display: "block",
//               marginBlockEnd: { xs: "20px", md: "60px" },
//             }}
//           >
//             {projectData.mainTitle}
//           </Typography>
//           {projectData.contents.map((data, index) => (
//             <DetailsBlock
//               key={index}
//               position={data.position}
//               title={data.title}
//               image={data.image}
//               text={data.text}
//             />
//           ))}
//           {projectData.description ? (
//             <Box
//               sx={{
//                 maxInlineSize: "1004px",
//                 marginInline: "auto",
//                 marginBlockStart: "20px",
//               }}
//             >
//               <Typography
//                 color="#172337"
//                 variant="body1"
//                 sx={{ textAlign: "center" }}
//               >
//                 {projectData.description}
//               </Typography>
//             </Box>
//           ) : (
//             ""
//           )}
//         </Box>
//       </Box>
//       <Footer />
//     </Box>
//   )
// }
