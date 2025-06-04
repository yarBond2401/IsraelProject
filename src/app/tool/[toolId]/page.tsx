import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Box } from "@mui/material"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ToolPageBody } from "@/components/toolComponents/common/ToolPageBody"
import {
  fetchRawToolsFromSheet,
  normalizeToolRows,
  ToolRecord,
} from "@/utils/toolsManage"

export async function generateStaticParams() {
  const rawRows = await fetchRawToolsFromSheet()
  const allTools: ToolRecord[] = normalizeToolRows(rawRows)
  return allTools.map((tool) => ({
    toolId: tool.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ toolId: string }>
}): Promise<Metadata> {
  const { toolId } = await params
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://israel-project-six.vercel.app"

  const rawRows = await fetchRawToolsFromSheet()
  const allTools: ToolRecord[] = normalizeToolRows(rawRows)

  const toolRecord = allTools.find((t) => t.id === toolId)
  if (!toolRecord) {
    notFound()
  }

  const data = toolRecord.jsonData

  const title = `כלי – ${data.headerTitle}`
  const description =
    data.mainArticles?.[0]?.description?.slice(0, 160) ||
    "כלי לחדשנות מוניציפלית במסגרת התוכנית הדיגיטלית לרשויות."

  const firstSlide = Array.isArray(data.slider)
    ? data.slider[0]?.imageSrc
    : undefined
  const imageUrl =
    firstSlide && firstSlide.startsWith("/")
      ? `${baseUrl}${firstSlide}`
      : firstSlide || `${baseUrl}/images/default-og.png`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/tool/${toolId}`,
      siteName: "תוכנית דיגיטלית לרשויות",
      locale: "he_IL",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `תמונה עבור הכלי ${data.headerTitle}`,
        },
      ],
    },
  }
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ toolId: string }>
}) {
  const { toolId } = await params

  const rawRows = await fetchRawToolsFromSheet()
  const allTools: ToolRecord[] = normalizeToolRows(rawRows)

  const toolRecord = allTools.find((t) => t.id === toolId)
  if (!toolRecord) {
    notFound()
  }

  const toolData = toolRecord.jsonData

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
