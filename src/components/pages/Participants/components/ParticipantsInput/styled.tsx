"use client"

import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import { TextField } from "@mui/material"

export const InputWrapper = styled(Box)(() => ({
  inlineSize: "100%",
}))
export const ParticipantsTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: "#fff",
    width: "100%",
    borderColor: "#e7e7e7",

    "& fieldset": {
      borderWidth: "1px",
      transition: "border-color 0.2s ease-in-out",
    },

    "&:hover fieldset": {
      borderWidth: "1px",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#000",
      borderWidth: "1px",
    },
    "&.Mui-error:hover fieldset": {
      borderColor: "#red",
      borderWidth: "1.5px",
    },

    "&.Mui-error.Mui-focused fieldset": {},
    "& input": {
      fontSize: "16px",
    },
    "& input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #fff inset !important",
      WebkitTextFillColor: "#898c8b !important",
      caretColor: "#000 !important",
      fontSize: "16px",
      transition: "background-color 5000s ease-in-out 0s",
    },
  },
}))
