import { Box, Button, Divider, Typography } from "@mui/material"
import { ProjectsDetails } from "@/interfaces/tools"
import Link from "next/link"
import Image from "next/image"
import {
  ContactBlock,
  ContactButtons,
  ContactLink,
  ProjectArticle,
  ProjectButton,
  ProjectContentTitle,
  ProjectContentWrapper,
  ProjectHeaderLink,
} from "./styled"

interface Props {
  data: ProjectsDetails
}

export const ToolContent: React.FC<Props> = ({ data }) => {
  return (
    <ProjectContentWrapper>
      <ProjectContentTitle>{data.headerTitle}</ProjectContentTitle>
      <Box sx={{ display: "flex", gap: "15px" }}>
        {data.headerLinks.map((link, index) => (
          <>
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBlockEnd: { xs: "20px", lg: "100px" },
              }}
            >
              <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                {link.isFirst ? " פתרון גרעיני:" : "פתרון:"}
              </Typography>
              <ProjectHeaderLink href={link.redirectTo}>
                {link.title}
              </ProjectHeaderLink>
              {link.isFirst && (
                <Divider
                  orientation="vertical"
                  sx={{
                    borderColor: "##cfcfcf",
                    marginInlineStart: "10px",
                    maxBlockSize: "16px",
                  }}
                />
              )}
            </Box>
          </>
        ))}
      </Box>
      {data.mainArticles.map((article, index) => (
        <ProjectArticle key={index}>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              fontWeight: 700,
              marginBlockEnd: "10px",
            }}
          >
            {article.title}
          </Typography>
          <Typography
            sx={{
              maxInlineSize: "700px",
              color: "#898c8b",
              fontSize: { xs: "14px", md: "18px" },
            }}
          >
            {article.description}
          </Typography>
        </ProjectArticle>
      ))}
      <Box sx={{ maxInlineSize: "700px" }}>
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "24px" },
            fontWeight: 700,
            marginBlockEnd: "10px",
          }}
        >
          {data.providerBlock.title}
        </Typography>
        <Divider sx={{ marginBlockEnd: "10px" }} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
            marginBlockEnd: "20px",
          }}
        >
          <Image
            src={data.providerBlock.iconSrc}
            alt="icon"
            width={70}
            height={40}
          />
          <Typography sx={{ fontSize: { xs: "14px", md: "18px" } }}>
            {data.providerBlock.label}
          </Typography>
          <Typography
            sx={{ fontWeight: 900, fontSize: { xs: "14px", md: "18px" } }}
          >
            {data.providerBlock.provider}
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#898c8b",
            fontSize: { xs: "14px", md: "16px" },
            marginBlockEnd: "15px",
          }}
        >
          {data.providerBlock.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "15px",
            marginBlockEnd: "20px",
          }}
        >
          <ContactLink href="/">{data.providerBlock.email}</ContactLink>
          <Typography sx={{ fontSize: "14px", color: "#898c8b" }}>
            {data.providerBlock.adressAdd}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#898c8b" }}>
            {data.providerBlock.adress}
          </Typography>
        </Box>
        <Divider sx={{ marginBlockEnd: "20px" }} />
        <ContactBlock>
          <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>
            {data.constactBlock.title}
          </Typography>
          <ContactButtons>
            {data.constactBlock.contactButtons.map((button, index) => (
              <ProjectButton key={index} isGradient={button.isGradient}>
                {button.title}
              </ProjectButton>
            ))}
          </ContactButtons>
        </ContactBlock>
      </Box>
    </ProjectContentWrapper>
  )
}
