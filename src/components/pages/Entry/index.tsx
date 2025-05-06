import React from "react"
import Header from "@/components/Header"
import { SECTIONS } from "./constants"
import { EntryContainer, EntryContent, EntryWrapper } from "./styled"
import { Box } from "@mui/material"
import EntrySection from "./components/EntrySection"
const Entry = () => {
  return (
    <EntryWrapper>
      <Header isOnMainPage={false} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "0.9375rem 1fr minmax(auto, 120rem) 1fr 0.9375rem",
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
