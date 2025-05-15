import { styled } from "@mui/material/styles"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { Popper } from "@mui/material"
import { shouldForwardProp as muiShouldForwardProp } from "@mui/system"

export const StyledAutocomplete = styled(Autocomplete, {
  shouldForwardProp: (prop) =>
    prop !== "isMainPage" && muiShouldForwardProp(prop),
})<{ isMainPage?: boolean }>(({ isMainPage }) => ({
  width: "300px",
  border: `1px solid ${isMainPage ? "#fff" : "#000"}`,
  borderRadius: "40px",
  backgroundColor: "transparent",
  paddingInline: "10px",
  color: isMainPage ? "#fff" : "#000",
  "& .MuiInputBase-root": {
    paddingLeft: 0,
  },
  "& .MuiAutocomplete-paper": {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
  },
  "& .MuiAutocomplete-option": {
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
    "&[aria-selected='true']": {
      backgroundColor: "#e0e0e0",
    },
  },
  "& .MuiAutocomplete-clearIndicator": {
    color: isMainPage ? "#fff" : "#000",
  },
}))

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) =>
    prop !== "isMainPage" && muiShouldForwardProp(prop),
})<{ isMainPage?: boolean }>(({ isMainPage }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    paddingLeft: "8px",
    color: isMainPage ? "#fff" : "#000",
    fontSize: "14px",
    padding: "5px 0px",
    "& fieldset": {
      border: "none",
    },
    "& input": {
      padding: "5px",
      textAlign: "end",
    },
  },
}))

export const StyledPopper = styled(Popper)(() => ({
  zIndex: 1300,
  "& .MuiAutocomplete-paper": {
    marginBlockStart: "10px",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.7)",
  },
  "& .MuiAutocomplete-option": {
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
    "&[aria-selected='true']": {
      backgroundColor: "#e0e0e0",
    },
  },
}))
