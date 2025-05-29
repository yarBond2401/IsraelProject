"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { Button, Typography } from "@mui/material"
export const ProjectsWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
}))
export const ProjectsContainer = styled(Box)(({ theme }) => ({
  paddingBlockStart: "200px",
  maxInlineSize: "1300px",
  marginInline: "auto",
  paddingInline: "20px",
  paddingBlockEnd: "30px",
  [theme.breakpoints.down("lg")]: {
    paddingBlockStart: "150px",
  },
}))
export const ProjectsHeader = styled(Box)(() => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBlockEnd: "20px",
}))
export const ProjectsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: theme.palette.custom.purple,
  fontWeight: 700,
}))
export const ProjectsDescription = styled(Typography)(() => ({
  fontSize: "16px",
  color: "#898c8b",
  maxInlineSize: "800px",
}))
export const ProjectsUpperButtons = styled(Box)(({ theme }) => ({
  alignItems: "start",
  display: "flex",
  justifyContent: "flex-end",
  marginBlockEnd: "50px",
  gap: "90px",
  [theme.breakpoints.down("md")]: {
    gap: "20px",
    flexDirection: "column-reverse",
  },
}))
export const DeepFilterButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    inlineSize: "100%",
  },
}))
export const ProjectsItems = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
  justifyContent: "center",
  justifyItems: "center",
  marginBlockEnd: "40px",
  [theme.breakpoints.down(1100)]: {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  [theme.breakpoints.down(615)]: {
    gridTemplateColumns: "1fr",
  },
}))
export const ProjectsButtons = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}))
export const FilterButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>(({ theme, selected }) => ({
  padding: "5px",
  backgroundColor: selected ? "none" : theme.palette.common.white,
  backgroundImage: selected
    ? "linear-gradient(135deg,#30B4B4 30%, #867AB3 70%,  #B277CC 90%,  #A020F0 99%)"
    : "none",
  color: selected ? theme.palette.common.white : theme.palette.common.black,
  borderRadius: "40px",
  fontWeight: 300,
  fontSize: "14px",
  transition: "all 0.3s ease",
  "&:hover": {
    opacity: 0.9,
  },
}))
