import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"

export const InfoPanelWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  position: "fixed",
  insetBlockStart: "140px",
  insetInlineStart: "20px",
  maxWidth: "320px",
  backgroundColor: theme.palette.common.white,
  color: "#000",
  borderRadius: "12px",
  padding: "20px",
  zIndex: 80,
  opacity: open ? 1 : 0,
  pointerEvents: open ? "auto" : "none",
  transform: open ? "translateY(0)" : "translateY(-10px)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  [theme.breakpoints.down("sm")]: {
    insetBlockStart: "200px",
    insetInlineStart: "0px",
  },
}))

export const InfoPanelContent = styled("div")({
  lineHeight: 1.5,
})

export const CloseIconButton = styled(IconButton)({
  backgroundColor: "#ececec",
})
