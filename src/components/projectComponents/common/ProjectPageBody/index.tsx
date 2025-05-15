import React from "react"
import { ProjectsDetails } from "@/interfaces/projects"
import { ProjectMainSection } from "./styled"
import { ProjectContent } from "../../ProjectContent"
import { ProjectSlider } from "../../ProjectSlider"
import { AdditionalProjects } from "../../AdditionlaProjects"
import { Box } from "@mui/material"

interface ProjectPageBodyProps {
  projectData: ProjectsDetails
}
export const ProjectPageBody: React.FC<ProjectPageBodyProps> = ({
  projectData,
}) => {
  return (
    <Box>
      <ProjectMainSection>
        <ProjectSlider slides={projectData.slider} />
        <ProjectContent data={projectData} />
      </ProjectMainSection>
      <AdditionalProjects
        currentProjectId={projectData.id}
        currentFilterKey={projectData.filterKey}
      />
    </Box>
  )
}
