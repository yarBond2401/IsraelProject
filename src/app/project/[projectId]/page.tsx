import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Box } from "@mui/material"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ProjectPageBody } from "@/components/projectComponents/common/ProjectPageBody"
import {
  fetchRawProjectsFromSheet,
  normalizeRawRows,
} from "@/utils/projectsManage"

// 1️⃣ generateStaticParams: identical as before (no changes required here)
export async function generateStaticParams() {
  const raws = await fetchRawProjectsFromSheet()
  const records = await normalizeRawRows(raws)
  return records.map((p) => ({
    projectId: p.id,
  }))
}

// 2️⃣ generateMetadata: change to accept `params` as a Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>
}): Promise<Metadata> {
  // “await” the params promise before destructuring
  const { projectId } = await params

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://israel-project-six.vercel.app"

  // 1) Fetch & normalize all records
  const raws = await fetchRawProjectsFromSheet()
  const records = await normalizeRawRows(raws)
  const project = records.find((r) => r.id === projectId)
  if (!project) notFound()

  // 2) Build OG image URL
  const slider = project.jsonData.slider || []
  const imageUrl = slider[0]?.imageSrc
    ? `${baseUrl}${slider[0].imageSrc}`
    : `${baseUrl}/images/default-og.png`

  const title = `פרויקט - ${project.jsonData.headerTitle}`
  const description =
    project.jsonData.mainArticles?.[0]?.description?.slice(0, 160) ||
    "פרויקט מוניציפלי ברשות מקומית במסגרת התוכנית הדיגיטלית."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/projects/${projectId}`,
      siteName: "תוכנית דיגיטלית לרשויות",
      locale: "he_IL",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `תמונה עבור פרויקט - ${project.jsonData.headerTitle}`,
        },
      ],
    },
  }
}

// 3️⃣ Page component: also change `params` to a Promise and `await` it
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>
}) {
  // ① Await the params promise
  const { projectId } = await params

  // ② Fetch & normalize all records
  const raws = await fetchRawProjectsFromSheet()
  const records = await normalizeRawRows(raws)

  // ③ Find the matching record
  const projectRecord = records.find((r) => r.id === projectId)
  if (!projectRecord) {
    notFound()
  }

  // ④ Merge JSON blob with sectionKey & filterKeys
  const mergedData = {
    ...projectRecord.jsonData,
    sectionKey: projectRecord.sectionKey,
    filterKeys: projectRecord.filterKeys,
  }

  return (
    <Box>
      <Header isOnMainPage={false} />
      <Box component="main">
        <ProjectPageBody projectData={mergedData} />
      </Box>
      <Footer />
    </Box>
  )
}
