import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Box } from "@mui/material"
import { TOOLS_DATA } from "@/components/toolComponents/constants"
import { notFound } from "next/navigation"
import { ToolPageBody } from "@/components/toolComponents/common/ToolPageBody"

interface ToolsPageProps {
  params: { toolId: string }
}

export async function generateStaticParams() {
  return Object.keys(TOOLS_DATA).map((toolId) => ({
    toolId,
  }))
}

export default function ToolPage({ params }: ToolsPageProps) {
  const { toolId } = params
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
