import Reac from "react"
import Header from "@/components/Header"
import { Box, Divider, Select, Typography } from "@mui/material"
import Link from "next/link"
import {
  VisualizationContent,
  VisualizationHeader,
  VisualizationImages,
  VisualizationImageWrapper,
  VisualizationWrapper,
} from "./styled"
import Image from "next/image"

const Visualization = () => {
  return (
    <VisualizationWrapper>
      <Header isOnMainPage={false} />
      <VisualizationContent>
        <VisualizationHeader>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Typography
              sx={{
                color: "#a83b96",
                fontWeight: 700,
                textWrap: "nowrap",
                fontSize: "20px",
              }}
            >
              תוצאות השאלון
            </Typography>
            <Typography
              sx={{ maxInlineSize: "700px", color: "#000", fontSize: "14px" }}
            >
              בגרף העוגה שלפניך מוצגים אחוזים של בעלי תפקידים בכירים ברשות
              המקומית, אשר דירגו את מצב הנושא כ"טוב מאוד" או "טוב". בלחיצה על
              אחד מחלקי הגרף, ניתן לראות את רשימת המשתתפים אשר בחרו בדירוג זה.
            </Typography>
          </Box>
          <Select
            sx={{ width: "150px", border: "1px solid #000", height: "40px" }}
          />
        </VisualizationHeader>
        <VisualizationImages>
          <VisualizationImageWrapper>
            <Typography
              sx={{
                fontSize: "24px",
                marginBlockEnd: "10px",
                color: "#a83b96",
                fontWeight: 700,
              }}
            >
              המצב הרצוי
            </Typography>
            <Link href="/tools">
              <Image
                src="/images/1.png"
                alt="img"
                width={400}
                height={400}
              ></Image>
            </Link>
          </VisualizationImageWrapper>
          <Divider orientation="vertical" sx={{ borderColor: "#000" }} />

          <VisualizationImageWrapper>
            <Typography
              sx={{
                fontSize: "24px",
                marginBlockEnd: "10px",
                color: "#a83b96",
                fontWeight: 700,
              }}
            >
              המצב הקיים
            </Typography>
            <Link href="/participants">
              <Image
                src="/images/2.png"
                alt="img"
                width={400}
                height={400}
              ></Image>
            </Link>
          </VisualizationImageWrapper>
        </VisualizationImages>
      </VisualizationContent>
    </VisualizationWrapper>
  )
}

export default Visualization
