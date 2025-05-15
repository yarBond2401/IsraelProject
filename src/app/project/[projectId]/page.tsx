import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Box } from "@mui/material"
import { PROJECTS_DATA } from "@/components/projectComponents/constants"
import { notFound } from "next/navigation"
import { ProjectPageBody } from "@/components/projectComponents/common/ProjectPageBody"

interface ProjectsPageProps {
  params: Promise<{ projectId: string }>
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((projectId) => ({
    projectId,
  }))
}

export default async function ProjectPage({ params }: ProjectsPageProps) {
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
