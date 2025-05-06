import React from "react"
import { Typography, Box } from "@mui/material"
import Link from "next/link"
import { CardsProps } from "../../constants"
import Image from "next/image"
import {
  ProjectCardBackground,
  ProjectCardButton,
  ProjectCardButtons,
  ProjectCardContent,
  ProjectCardTitle,
  ProjectCardWrapper,
} from "./styled"

const ProjectCard: React.FC<CardsProps> = ({ title, button, imageSrc }) => (
  <ProjectCardWrapper sx={{ cursor: "pointer" }}>
    <ProjectCardContent>
      <Box sx={{ flex: "1 1 auto", justifySelf: "start" }}>
        <ProjectCardButtons>
          <ProjectCardButton>{button}</ProjectCardButton>
        </ProjectCardButtons>
      </Box>
      <ProjectCardTitle>{title}</ProjectCardTitle>
    </ProjectCardContent>
    <ProjectCardBackground>
      <Image src={imageSrc} alt="card-bg" fill />
    </ProjectCardBackground>
  </ProjectCardWrapper>
)

export default ProjectCard
