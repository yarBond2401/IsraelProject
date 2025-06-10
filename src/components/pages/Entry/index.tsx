import React from "react"
import Header from "@/components/Header"
import { SECTIONS } from "./constants"
import { EntryContent, EntryWrapper } from "./styled"
import { Box } from "@mui/material"
import EntrySection from "./components/EntrySection"
const Entry = () => {
  return (
    <EntryWrapper>
      <Header isOnMainPage={false} />
      <Box
        sx={{
          marginBlockStart: "108px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          position: "relative",
          zIndex: 0,
        }}
      >
        <EntryContent>
          {SECTIONS.map((section, index) => (
            <EntrySection key={index} {...section} />
          ))}
        </EntryContent>
      </Box>
    </EntryWrapper>
  )
}

export default Entry
