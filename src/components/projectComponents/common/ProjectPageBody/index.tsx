import Box from "@mui/material/Box"
import React from "react"
import { Typography } from "@mui/material"
import { ProjectsDetails } from "@/interfaces/projects"
import { ProjectMainSection, ProjectWrapper } from "./styled"
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
    <ProjectWrapper>
      <ProjectMainSection>
        <ProjectSlider slides={projectData.slider} />
        <ProjectContent data={projectData} />
      </ProjectMainSection>
      <AdditionalProjects
        currentProjectId={projectData.id}
        currentFilterKey={projectData.filterKey}
      />
    </ProjectWrapper>
  )
}
