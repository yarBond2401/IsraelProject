import React from "react"
import { InfoPanelWrapper, CloseIconButton } from "./styled"
import Image from "next/image"
import { Box, Typography } from "@mui/material"

type QuestionnairePanelProps = {
  title: string
  description: string
  onClose: () => void
  open: boolean
}

const InfoPanel = ({ open, onClose }: QuestionnairePanelProps) => {
  return (
    <InfoPanelWrapper open={open}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBlockEnd: "10px",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>מיומנויות</Typography>
        <CloseIconButton onClick={onClose}>
          <Image
            src="/images/svg/categories/close-icon.svg"
            width={10}
            height={10}
            alt="close-icon"
          />
        </CloseIconButton>
      </Box>
      <Box
        sx={{
          blockSize: "1px",
          inlineSize: "100%",
          backgroundColor: "#ececec",
          marginBlockEnd: "10px",
        }}
      ></Box>
      <Typography sx={{ fontSize: "12px" }}>
        הרשות מקומית מציידת הכשרות למנהליה ולעובדיה; הרשות מאפשרת הכרות עם כלים
        מובנים לניהול ולהטמעת חדשנות ומקדימה התנסות בהם. הרשות מאפשרת לעובדים
        ומנהלים לממש מיומנויות של קידום חדשנות בעשיה. היוזמות והפרויקטים מיועדים
      </Typography>
    </InfoPanelWrapper>
  )
}

export default InfoPanel
