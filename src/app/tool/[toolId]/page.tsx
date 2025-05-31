import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Box } from "@mui/material"
import { TOOLS_DATA } from "@/components/toolComponents/constants"
import { notFound } from "next/navigation"
import { ToolPageBody } from "@/components/toolComponents/common/ToolPageBody"
import { Metadata } from "next"

interface ToolPageProps {
  params: Promise<{ toolId: string }>
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ toolId: string }>
}): Promise<Metadata> {
  const { toolId } = await params
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://israel-project-six.vercel.app"

  const tool = TOOLS_DATA[toolId]
  if (!tool) notFound()

  const title = `כלי - ${tool.headerTitle}`
  const description =
    tool.mainArticles?.[0]?.description?.slice(0, 160) ||
    "כלי לחדשנות מוניציפלית במסגרת התוכנית הדיגיטלית לרשויות."

  const imageUrl = tool.slider?.[0]?.imageSrc
    ? `${baseUrl}${tool.slider[0].imageSrc}`
    : `${baseUrl}/images/default-og.png`

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
          alt: `תמונה עבור הכלי ${tool.headerTitle}`,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(TOOLS_DATA).map((toolId) => ({
    toolId,
  }))
}

export default async function ToolPage({ params }: ToolPageProps) {
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
