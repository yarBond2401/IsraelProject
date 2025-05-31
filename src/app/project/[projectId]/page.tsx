// import Footer from "@/components/Footer"
// import Header from "@/components/Header"
// import { Box } from "@mui/material"
// import { PROJECTS_DATA } from "@/components/projectComponents/constants"
// import { notFound } from "next/navigation"
// import { ProjectPageBody } from "@/components/projectComponents/common/ProjectPageBody"
// // import type { Metadata } from "next"
// interface ProjectPageProps {
//   params: Promise<{ projectId: string }>
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { projectId: string }
// }): Promise<Metadata> {
//   const baseUrl =
//     process.env.NEXT_PUBLIC_SITE_URL || "https://israel-project-six.vercel.app"

//   const project = PROJECTS_DATA[params.projectId]
//   const imageUrl = project.slider?.[0]?.imageSrc
//     ? `${baseUrl}${project.slider[0].imageSrc}`
//     : `${baseUrl}/images/default-og.png`
//   if (!project) notFound()

//   const title = `פרויקט - ${project.headerTitle}`
//   const description =
//     project.mainArticles?.[0]?.description?.slice(0, 160) ||
//     "פרויקט מוניציפלי ברשות מקומית במסגרת התוכנית הדיגיטלית."

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       url: `${baseUrl}/${params.projectId}`,
//       siteName: "תוכנית דיגיטלית לרשויות",
//       locale: "he_IL",
//       type: "article",
//       images: [
//         {
//           url: imageUrl,
//           width: 1200,
//           height: 630,
//           alt: `תמונה עבור פרויקט - ${project.headerTitle}`,
//         },
//       ],
//     },
//   }
// }

// export async function generateStaticParams() {
//   return Object.keys(PROJECTS_DATA).map((projectId) => ({
//     projectId,
//   }))
// }

// export default async function ProjectPage({ params }: ProjectPageProps) {
//   const { projectId } = await params
//   const projectData = PROJECTS_DATA[projectId]

//   if (!projectData) notFound()

//   return (
//     <Box>
//       <Header isOnMainPage={false} />
//       <Box component="main">
//         <ProjectPageBody projectData={projectData} />
//       </Box>
//       <Footer />
//     </Box>
//   )
// }

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Box } from "@mui/material"
import { PROJECTS_DATA } from "@/components/projectComponents/constants"
import { notFound } from "next/navigation"
import { ProjectPageBody } from "@/components/projectComponents/common/ProjectPageBody"
import { Metadata } from "next"

interface ProjectPageProps {
  params: Promise<{ projectId: string }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>
}): Promise<Metadata> {
  const { projectId } = await params
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://israel-project-six.vercel.app"

  const project = PROJECTS_DATA[projectId]
  const imageUrl = project.slider?.[0]?.imageSrc
    ? `${baseUrl}${project.slider[0].imageSrc}`
    : `${baseUrl}/images/default-og.png`
  if (!project) notFound()

  const title = `פרויקט - ${project.headerTitle}`
  const description =
    project.mainArticles?.[0]?.description?.slice(0, 160) ||
    "פרויקט מוניציפלי ברשות מקומית במסגרת התוכנית הדיגיטלית."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${projectId}`,
      siteName: "תוכנית דיגיטלית לרשויות",
      locale: "he_IL",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `תמונה עבור פרויקט - ${project.headerTitle}`,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((projectId) => ({
    projectId,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params
  const projectData = PROJECTS_DATA[projectId]

  if (!projectData) notFound()

  return (
    <Box>
      <Header isOnMainPage={false} />
      <Box component="main">
        <ProjectPageBody projectData={projectData} />
      </Box>
      <Footer />
    </Box>
  )
}
