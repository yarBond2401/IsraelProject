import React from "react"
import { Box } from "@mui/material"
import { CardsProps } from "../../constants"
import Image from "next/image"
import {
  ProjectCardBackground,
  ProjectCardContent,
  ProjectCardTitle,
  ProjectCardWrapper,
} from "./styled"

const ProjectCard: React.FC<CardsProps & { onClick: () => void }> = ({
  title,
  imageSrc,
  onClick,
}) => (
  <ProjectCardWrapper onClick={onClick} sx={{ cursor: "pointer" }}>
    <ProjectCardContent>
      <Box sx={{ flex: "1 1 auto", justifySelf: "start" }}>
        {/* <ProjectCardButtons>
          {buttons.map((button, index) => (
            <ProjectCardButton key={index}>{button.title}</ProjectCardButton>
          ))}
        </ProjectCardButtons> */}
      </Box>
      <ProjectCardTitle>{title}</ProjectCardTitle>
    </ProjectCardContent>
    <ProjectCardBackground>
      <Image src={imageSrc} alt="card-bg" fill />
    </ProjectCardBackground>
  </ProjectCardWrapper>
)

export default ProjectCard
