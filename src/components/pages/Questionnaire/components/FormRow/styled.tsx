"use client"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
export const ItemWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}))
export const ExpandedRows = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
}))
export const StyledAccordionRoot = styled(Accordion)(() => ({
  boxShadow: "none",
  border: "none",
  margin: 0,
  "&.Mui-expanded": {
    margin: 0,
  },
  "&::before": {
    display: "none",
  },
  "&.MuiPaper-elevation1": {
    boxShadow: "none",
  },
  "&.MuiPaper-rounded": {
    borderRadius: 0,
  },
}))
export const StyledAccordion = styled(AccordionDetails)(() => ({
  backgroundColor: "#fff",
  boxShadow: "none",
  borderBottom: "none",
  "&:before": {
    display: "none",
  },
}))
export const StyledSummary = styled(AccordionSummary)(() => ({
  backgroundColor: "#fff",
  boxShadow: "none",
  borderBottom: "none",
  "&:before": {
    display: "none",
  },
}))
export const RowNumber = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.purple,
  fontWeight: 700,
  fontSize: "14px",
}))
export const RowDescription = styled(Typography)(() => ({
  color: "#6e7170",
  fontSize: "14px",
}))
export const RowLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.purple,
  fontSize: "14px",
}))
