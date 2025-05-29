"use client"

import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { Button, Typography } from "@mui/material"
import Link from "next/link"

export const SignUpWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingInline: "10px",
  paddingBlock: "40px",
}))

export const SignUpContainer = styled(Box)(() => ({
  maxInlineSize: "600px",
  inlineSize: "100%",
  marginInline: "auto",
}))

export const SignUpHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  justifyContent: "center",
  marginBlockEnd: "30px",
}))

export const SignUpForm = styled(Box)(() => ({
  backgroundColor: "#fff",
  padding: "30px",
  marginBlockEnd: "20px",
}))

export const SignUpFormTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.common.black,
  fontWeight: 300,
}))

export const SignUpFormBody = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}))

export const SignInLink = styled(Link)(({ theme }) => ({
  color: "#a93f99",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
  },
}))

export const SignUpButton = styled(Button)(() => ({
  paddingBlock: "10px",
}))
