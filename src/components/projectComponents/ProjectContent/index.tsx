import { Box, Divider, Typography } from "@mui/material"
import { ProjectsDetails } from "@/interfaces/projects"
import Link from "next/link"
import Image from "next/image"
import {
  ContactBlock,
  ContactButtonEmail,
  ContactButtons,
  ContactButtonTitle,
  DataBlock,
  HeaderNav,
  ProjectArticle,
  ProjectButton,
  ProjectContentTitle,
  ProjectContentWrapper,
  ProjectHeaderTag,
  ProviderBlock,
} from "./styled"
import { CONTACT_BUTTONS, PROJECT_STATUS, PROJECT_TAGS } from "../constants"

interface Props {
  data: ProjectsDetails
}

export const ProjectContent: React.FC<Props> = ({ data }) => {
  return (
    <ProjectContentWrapper>
      <ProjectContentTitle variant="h2">{data.headerTitle}</ProjectContentTitle>
      <Box sx={{ display: "flex", flexWrap: "wrap", marginBlockEnd: "20px" }}>
        {PROJECT_TAGS.map((label, index) => {
          const tag = data.tags[index]
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  whiteSpace: "nowrap",
                }}
              >
                {label.label}
              </Typography>
              <ProjectHeaderTag>{tag?.title}</ProjectHeaderTag>

              {index < PROJECT_TAGS.length - 1 && (
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
      <DataBlock>
        {PROJECT_STATUS.map((label, index) => {
          const info = data.statuses[index]
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  fontWeight: 300,
                }}
              >
                {label.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  fontWeight: 300,
                }}
              >
                {info.label}
              </Typography>
            </Box>
          )
        })}
      </DataBlock>
      <Box>
        <Typography sx={{ marginBlockEnd: "10px", fontWeight: 700 }}>
          תכולת הפרויקט:
        </Typography>
        {data.mainArticles.map((article, index) => (
          <ProjectArticle key={index}>
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
      </Box>
      <Box sx={{ marginBlockEnd: "10px" }}>
        <Typography sx={{ marginBlockEnd: "10px", fontWeight: 700 }}>
          לאילו רשויות מקומיות הפרויקט יתאים:
        </Typography>
        <Typography
          sx={{
            maxInlineSize: "700px",
            color: "#898c8b",
            fontSize: { xs: "14px", md: "18px" },
          }}
        >
          {data.suitable}
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ marginBlockEnd: "10px", fontWeight: 700 }}>
          המלצות:{" "}
        </Typography>
        <Typography
          sx={{
            maxInlineSize: "700px",
            color: "#898c8b",
            fontSize: { xs: "14px", md: "18px" },
          }}
        >
          {data.recommendations}
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ marginBlockEnd: "10px", fontWeight: 700 }}>
          אנשי קשר:
        </Typography>
        <Divider sx={{ marginBlockEnd: "20px" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxInlineSize: "700px",
            marginBlockEnd: "20px",
            gap: "5px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <ContactButtonTitle>{data.contacts.title}</ContactButtonTitle>
            <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
              {data.contacts.name}
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#898c8b" }}>
              {data.contacts.role}
            </Typography>
          </Box>
          <ContactButtonEmail href="/">
            {data.contacts.email}
          </ContactButtonEmail>
        </Box>
      </Box>
      <Box sx={{ maxInlineSize: "700px" }}>
        <Typography
          sx={{
            fontWeight: 700,
            marginBlockEnd: "10px",
          }}
        >
          ספק:
        </Typography>
        <Divider sx={{ marginBlockEnd: "10px" }} />
        <ProviderBlock>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={data.providerBlock.iconSrc}
              alt="icon"
              width={100}
              height={70}
            />
            <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
              {data.providerBlock.title}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {data.providerBlock.articles.map((article, index) => (
              <Box key={index}>
                <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                  {article.title}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#898c8b" }}>
                  {article.description}
                </Typography>
              </Box>
            ))}
            <Box sx={{ display: "flex", gap: "10px" }}>
              {data.providerBlock.emails.map((email, index) => (
                <ContactButtonEmail key={index} href="/">
                  {email.title}
                </ContactButtonEmail>
              ))}
            </Box>
          </Box>
        </ProviderBlock>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "15px",
            marginBlockEnd: "20px",
          }}
        ></Box>
        <Divider sx={{ marginBlockEnd: "20px" }} />
        <ContactBlock>
          <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>
            {data.constactBlock.title}
          </Typography>
          <ContactButtons>
            {CONTACT_BUTTONS.map((button, index) => (
              <ProjectButton key={index} isGradient={button.isGradient}>
                <Typography sx={{ fontSize: "14px", fontWeight: 300 }}>
                  {button.title}
                </Typography>
                {button.isGradient && (
                  <Image
                    src="/images/svg/white-left-arrow.svg"
                    alt="arrow-left"
                    height={20}
                    width={20}
                  />
                )}
              </ProjectButton>
            ))}
          </ContactButtons>
        </ContactBlock>
      </Box>
      <HeaderNav>
        <Link style={{ fontSize: "12px" }} href="/">
          ראשי
        </Link>
        <Link style={{ fontSize: "12px" }} href="/projects">
          פרויקטים
        </Link>
        <Typography sx={{ fontSize: "12px" }}>{data.headerTitle}</Typography>
      </HeaderNav>
    </ProjectContentWrapper>
  )
}
