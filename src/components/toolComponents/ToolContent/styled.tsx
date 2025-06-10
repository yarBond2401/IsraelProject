"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { Button, Typography } from "@mui/material"
import Link from "next/link"
import { ContactButton } from "@/interfaces/tools"

export const ProjectContentWrapper = styled(Box)(({ theme }) => ({
  paddingBlockStart: "150px",
  color: "#000",
  flex: "1 1 56%",
  paddingBlockEnd: "30px",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    paddingBlockStart: "120px",
  },
}))
export const ProjectContentTitle = styled(Typography)(() => ({
  marginBlockEnd: "15px",
}))
export const ProjectHeaderLabel = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.custom.purple,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}))
export const ProjectArticle = styled(Box)(() => ({
  marginBlockEnd: "30px",
}))
export const ContactBlock = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "15px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "space-between",
  boxShadow: "3px 3px 4px #eee",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}))
export const ContactButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
  },
}))
export const ContactLink = styled(Link)(({ theme }) => ({
  color: theme.palette.custom.purple,
  fontSize: "16px",
  textDecoration: "underline",
  fontWeight: 300,
}))
export const ContactLinkGray = styled(Link)(() => ({
  fontSize: "14px",
  color: "#898c8b",
}))

export const ProjectButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isGradient",
})<ContactButton>(({ theme, isGradient }) => ({
  position: isGradient ? "relative" : "static",
  color: isGradient ? theme.palette.common.white : theme.palette.custom.purple,
  fontSize: "16px",
  fontWeight: 300,
  display: "flex",
  alignItems: "center",
  gap: "5px",
  zIndex: 1,
  backgroundImage: isGradient
    ? "linear-gradient(90deg, #A020F0 10%,#B277CC 30%, #867AB3 50%, #5A7D9A 70%, #30B4B4 90%)"
    : "none",
  border: isGradient ? "none" : `1px solid ${theme.palette.custom.purple}`,
  transition: isGradient ? "backgroundImage 0.3s ease" : "all 0.3s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage:
      "linear-gradient(270deg, #A020F0 10%,#B277CC 30%, #867AB3 50%, #5A7D9A 70%, #30B4B4 90%)",
    opacity: 0,
    transition: "opacity 0.5s ease",
    zIndex: -1,
    borderRadius: "40px",
  },
  "&:hover": {
    color: theme.palette.common.white,
    backgroundColor: isGradient ? "none" : theme.palette.custom.purple,
    "&::before": {
      opacity: 1,
    },
  },
  [theme.breakpoints.down("sm")]: {
    inlineSize: "100%",
  },
}))
export const HeaderNav = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "130px",
  insetInlineStart: "-65%",
  display: "flex",
  alignItems: "center",
  columnGap: "15px",
  rowGap: "5px",
  color: "#545756",
  [theme.breakpoints.down("lg")]: {
    insetInlineStart: "0",
    flexWrap: "wrap",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}))
