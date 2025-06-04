import React from "react"
import { Box } from "@mui/material"
import { ProjectMainSection } from "./styled"
import { ProjectsDetails } from "@/interfaces/projects"
import { ProjectContent } from "../../ProjectContent"
import { ProjectSlider } from "../../ProjectSlider"
import { AdditionalProjects } from "../../AdditionlaProjects"

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
        currentSectionKey={projectData.sectionKey}
        currentFilterKeys={projectData.filterKeys}
      />
    </Box>
  )
}
