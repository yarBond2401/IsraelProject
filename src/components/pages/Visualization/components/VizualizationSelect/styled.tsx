"use client"

import { styled } from "@mui/material/styles"
import Select from "@mui/material/Select"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { MenuItem } from "@mui/material"

export const SelectWrapper = styled(Box)(() => ({
  position: "relative",
}))

export const StyledIconWrapper = styled("span")<{ open?: boolean }>(
  ({ open }) => ({
    position: "absolute",
    left: "8px",
    top: "50%",
    transform: `translateY(-50%) rotate(${open ? 180 : 0}deg)`,
    transition: "transform 0.2s ease-in-out",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
  })
)

export const StyledMenuPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: "#fff",
  color: theme.palette.secondary.main,
  "& .MuiMenuItem-root": {
    padding: "10px 16px",
    fontSize: "12px",
  },
}))

export const StyledMenuItem = styled(MenuItem)(() => ({
  backgroundColor: "#fff",
  color: "#000",
  fontSize: "14px",
  fontWeight: 400,
  padding: "10px 16px",
  transition: "background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: "#99A5B9",
  },

  "&.Mui-selected": {
    backgroundColor: "#99A5B9 !important",
    "&:hover": {
      backgroundColor: "#99A5B9",
    },
  },
}))

export const StyledSelect = styled(Select<string>)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",

  "& .MuiSelect-select": {
    padding: "5px 10px 5px 30px",
    color: "#000",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e8e8e8",
    transition:
      "border-color 0.2s ease-in-out, background-color 0.2s ease-in-out",
  },

  "&:hover": {
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },

  "&.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
      borderWidth: "1px",
    },
  },
}))
