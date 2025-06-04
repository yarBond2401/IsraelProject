import { Box, Divider, Typography } from "@mui/material"
import { ToolsDetails } from "@/interfaces/tools"
import Image from "next/image"
import {
  ContactBlock,
  ContactButtons,
  ContactLink,
  HeaderNav,
  ProjectArticle,
  ProjectButton,
  ProjectContentTitle,
  ProjectContentWrapper,
  ProjectHeaderLabel,
} from "./styled"
import Link from "next/link"
import {
  CONTACT_BUTTONS,
  PARAGRAPH_TITLES,
  SOLUTION_LABELS,
} from "../constants"

interface Props {
  data: ToolsDetails
}

export const ToolContent: React.FC<Props> = ({ data }) => {
  return (
    <ProjectContentWrapper>
      <ProjectContentTitle variant="h2">{data.headerTitle}</ProjectContentTitle>
      <Box
        sx={{
          display: "flex",
          marginBlockEnd: { xs: "20px", lg: "100px" },
        }}
      >
        {SOLUTION_LABELS.map((label, index) => {
          const solution = data.solutions[index]
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                {label.title}
              </Typography>
              <ProjectHeaderLabel>{solution?.title}</ProjectHeaderLabel>
              {index < SOLUTION_LABELS.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderColor: "#cfcfcf",
                    height: "16px",
                    alignSelf: "center",
                    marginInline: "10px",
                  }}
                />
              )}
            </Box>
          )
        })}
      </Box>
      {PARAGRAPH_TITLES.map((article, index) => {
        const description = data.mainArticles[index]
        return (
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
              {description.description}
            </Typography>
          </ProjectArticle>
        )
      })}
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
            src="/images/webp/projects/provider/raizit.png"
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
            {data.providerBlock.phone}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#898c8b" }}>
            {data.providerBlock.adress}
          </Typography>
        </Box>
        <Divider sx={{ marginBlockEnd: "20px" }} />
        <ContactBlock>
          <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>
            {data.contactBlock.title}
          </Typography>
          <ContactButtons>
            {CONTACT_BUTTONS.map((button, index) => (
              // <ProjectButton key={index} isGradient={button.isGradient}>
              //   <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
              //     {button.title}
              //   </Typography>
              //   {button.isGradient && (
              //     <Image
              //       src="/images/svg/white-left-arrow.svg"
              //       alt="arrow-left"
              //       height={20}
              //       width={20}
              //     />
              //   )}
              // </ProjectButton>
              <Link href="/projects" key={index} style={{ cursor: "default" }}>
                <ProjectButton isGradient={button.isGradient}>
                  <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
                    {button.title}
                  </Typography>
                  {button.isGradient && (
                    <Image
                      src="/images/svg/white-left-arrow.svg"
                      alt="arrow-left"
                      height={15}
                      width={15}
                    />
                  )}
                </ProjectButton>
              </Link>
            ))}
          </ContactButtons>
        </ContactBlock>
      </Box>
      <HeaderNav>
        <Link style={{ fontSize: "12px" }} href="/">
          ראשי
        </Link>
        <Link style={{ fontSize: "12px" }} href="/tools">
          פרויקטים
        </Link>
        <Typography sx={{ fontSize: "12px" }}>{data.headerTitle}</Typography>
      </HeaderNav>
    </ProjectContentWrapper>
  )
}
