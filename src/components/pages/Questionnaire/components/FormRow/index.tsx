"use client"
import React, { useState } from "react"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  MenuItem,
  Select,
  Divider,
} from "@mui/material"
import { useFormikContext, Field } from "formik"
import Image from "next/image"
import {
  ExpandedRows,
  ItemWrapper,
  RowDescription,
  RowLabel,
  RowNumber,
  StyledAccordion,
  StyledAccordionRoot,
  StyledSummary,
} from "./styled"
import { FORM_ROWS } from "../../constants"
import FormSelect from "../FormSelect"
import { ExpandedItem } from "@/interfaces/questionnaire"
import InfoPanel from "../InfoPanel"
import Link from "next/link"

interface FormRowProps {
  number: string
  order: number
  title: string
  expanded: boolean
  onChange: (isExpanded: boolean) => void
  expandedItems: ExpandedItem[]
  isFirstRow: boolean
  onInfoClick: () => void
}

const options = [
  { value: 1, label: "1- גבוה" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6- גבוה" },
]

const FormRow: React.FC<FormRowProps> = ({
  number,
  title,
  expanded,
  onChange,
  expandedItems,
  onInfoClick,
}) => {
  const [infoOpen, setInfoOpen] = useState(false)

  return (
    <StyledAccordionRoot
      expanded={expanded}
      onChange={(_, isExpanded) => onChange(isExpanded)}
    >
      <StyledSummary
        expandIcon={
          <Image
            src="/images/svg/expand-icon.svg"
            alt="expand"
            width={15}
            height={15}
          />
        }
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "97%",
          }}
        >
          <Typography sx={{ fontSize: "18px", color: "#565958" }}>
            {title}
          </Typography>
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onInfoClick()
            }}
          >
            <Image
              src="/images/svg/info-icon.png"
              alt="info-icon"
              width={25}
              height={25}
            />
          </Link>
        </Box>
      </StyledSummary>
      <Divider sx={{ borderColor: "#eee" }} />
      <StyledAccordion>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingInline: "20px",
            }}
          >
            <RowLabel>שאלוקיים</RowLabel>
            <Box sx={{ display: "flex", gap: { xs: "20px", sm: "100px" } }}>
              <RowLabel>קיים</RowLabel>
              <RowLabel>רצוי</RowLabel>
            </Box>
          </Box>
          <ExpandedRows>
            {expandedItems.map((item, index) => (
              <ItemWrapper key={index}>
                <RowNumber>{item.number}</RowNumber>
                <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                <RowDescription>{item.description}</RowDescription>
                <Box display="flex" gap={1}>
                  <FormSelect
                    name={`${number}_select1_item${index + 1}`}
                    options={options}
                  />
                  <FormSelect
                    name={`${number}_select2_item${index + 1}`}
                    options={options}
                  />
                </Box>
              </ItemWrapper>
            ))}
          </ExpandedRows>
        </Box>
      </StyledAccordion>
    </StyledAccordionRoot>
  )
}

export default FormRow
