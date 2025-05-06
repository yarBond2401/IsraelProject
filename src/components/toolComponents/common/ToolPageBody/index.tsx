import Box from "@mui/material/Box"
import React from "react"
import { Typography } from "@mui/material"
import { ToolsDetails } from "@/interfaces/tools"
import { ToolWrapper } from "./styled"
import { ToolContent } from "../../ToolContent"
import { ToolSlider } from "../../ProjectSlider"

interface ToolPageBodyProps {
  toolData: ToolsDetails
}
export const ToolPageBody: React.FC<ToolPageBodyProps> = ({ toolData }) => {
  return (
    <ToolWrapper>
      <ToolSlider slides={toolData.slider} />
      <ToolContent data={toolData} />
    </ToolWrapper>
  )
}
