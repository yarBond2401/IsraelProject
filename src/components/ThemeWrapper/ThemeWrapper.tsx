"use client"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import getTheme from "@/theme/index"
import { ReactNode } from "react"

const theme = createTheme(getTheme())

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
