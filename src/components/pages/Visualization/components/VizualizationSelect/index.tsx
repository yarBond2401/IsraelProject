"use client"

import { FormControl, SelectChangeEvent } from "@mui/material"
import {
  SelectWrapper,
  StyledSelect,
  StyledIconWrapper,
  StyledMenuPaper,
  StyledMenuItem,
} from "./styled"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Box from "@mui/material/Box"

interface VizualizationSelectProps {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}
const VizualizationSelect = ({
  value,
  onChange,
  options,
}: VizualizationSelectProps) => {
  const [open, setOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const lastScrollPosition = useRef(0)

  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value)
  }

  const handleWrapperClick = () => {
    if (!open) setOpen(true)
  }

  useEffect(() => {
    if (!open) return
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (Math.abs(currentScroll - lastScrollPosition.current) > 50) {
        setOpen(false)
      }
    }

    lastScrollPosition.current = window.scrollY
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [open])

  const currentLabel =
    options.find((opt) => opt.value === value)?.label || "בחר משתתף"

  return (
    <SelectWrapper ref={selectRef}>
      <FormControl fullWidth>
        <StyledSelect
          onClick={handleWrapperClick}
          value={value}
          onChange={handleChange}
          displayEmpty
          open={open}
          onClose={() => setOpen(false)}
          IconComponent={() => (
            <StyledIconWrapper open={open}>
              <Image
                src="/images/svg/expand-icon.svg"
                alt="expand"
                width={10}
                height={10}
              />
            </StyledIconWrapper>
          )}
          renderValue={() => (
            <Box display="flex" justifyContent="space-between" width="100%">
              {currentLabel}
            </Box>
          )}
          MenuProps={{
            PaperProps: {
              component: StyledMenuPaper,
            },
            disableScrollLock: true,
          }}
        >
          {options.map((opt) => (
            <StyledMenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </SelectWrapper>
  )
}

export default VizualizationSelect
