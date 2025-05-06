"use client"

import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { Button, IconButton, Typography } from "@mui/material"

export const ModalWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  inlineSize: "600px",
  maxInlineSize: "90vw",
  backgroundColor: theme.palette.common.white,
  borderRadius: "12px",
  color: "#fff",
  padding: "20px",
}))

export const CloseIconButton = styled(IconButton)({
  backgroundColor: "#ececec",
})
export const ModalDescription = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#6e6e6e",
  marginBlockEnd: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}))
export const ModalButton = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  color: theme.palette.custom.purple,
  border: `1px solid ${theme.palette.custom.purple}`,
  padding: "5px 20px",
  transition: "all 0.3s ease",
  "&:hover": {
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.custom.purple,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    padding: "5px",
    minInlineSize: "100%",
  },
}))
