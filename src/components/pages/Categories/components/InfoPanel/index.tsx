import React from "react"
import { InfoPanelWrapper, CloseIconButton } from "./styled"
import Image from "next/image"
import { Box, Typography } from "@mui/material"

type Props = {
  onClose: () => void
  open: boolean
}

const InfoPanel = ({ open, onClose }: Props) => {
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
        <Typography sx={{ fontSize: "14px" }}>תקשורת</Typography>
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
        הנהלה, לאורך כל דרגיה ולרוחב כל היחידות, מתקשרת את חשיבות החדשנות לצמיחת
        הרשות; הרשויות המקומיות מייצרות מודעות ושיח חיובי סביב חדשנות, בתוך
        הארגון ומחוץ לו התקשורת מתקיימת באופן דו כיווני - אל הנהלה וממנה; עובדים
        ברשות מודעים לתהליכים שמתרחשים, בדגש על תהליכים שאינם שגרתיים; עובדי
        הרשות ומנהלה קשובים להתייחסות התושבים, בעלי העסקים והספקים; תהליכים
        חדשים מתוקשרים לקהילה ומתקבל משוב מתושבים בעלי עסקים ובעלי עניין נוספים.
      </Typography>
    </InfoPanelWrapper>
  )
}

export default InfoPanel
