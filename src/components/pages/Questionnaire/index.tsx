"use client"
import React, { useState } from "react"
import Header from "@/components/Header"
import { Box, Typography } from "@mui/material"
import {
  BackButton,
  FurtherButton,
  QuestionnaireButtons,
  QuestionnaireContainer,
  QuestionnaireContent,
  QuestionnaireDescription,
  QuestionnaireForm,
  QuestionnaireFormBody,
  QuestionnaireHeader,
  QuestionnaireTitle,
  QuestionnaireWrapper,
} from "./styled"
import { Formik } from "formik"
import FormRow from "./components/FormRow"
import { FORM_ROWS } from "./constants"
import Link from "next/link"
import Indicator from "./components/Indicator"
import InfoPanel from "./components/InfoPanel"
const initialValues = {
  row1_select1: "",
  row1_select2: "",
  row2_select1: "",
  row2_select2: "",
  row3_select1: "",
  row3_select2: "",
  row4_select1: "",
  row4_select2: "",
  row5_select1: "",
  row5_select2: "",
  row6_select1: "",
  row6_select2: "",
  row7_select1: "",
  row7_select2: "",
}

const Questionnaire = () => {
  const [expandedRow, setExpandedRow] = useState<number>(0)
  const [infoPanelOpen, setInfoPanelOpen] = useState(false)
  const [panelData, setPanelData] = useState<{
    title: string
    description: string
  } | null>(null)

  return (
    <QuestionnaireWrapper>
      <Header isOnMainPage={false} />
      <QuestionnaireContainer>
        <QuestionnaireContent>
          <QuestionnaireHeader>
            <QuestionnaireTitle>חדשנות מוניציפאלית</QuestionnaireTitle>
            <QuestionnaireDescription>
              אנא בחר את 3 השאלות הרלוונטיות ביותר עבור הרשות שלך, בכל אחד משבעת
              המימדים, על-ידי לחיצה על אחד משני כפתורי הדירוג המופיעים משמאל לכל
              שאלה. המענה על שאלות הוא בדירוג של 6-1, כאשר 1 הוא שביעות הרצון
              הנמוכה ביותר ו-6 הוא שביעות הרצון הגבוהה ביותר. לאחר שתסיים לבחור
              את השאלות ולענות עליהן, לחץ על כפתור השפניה השמאלית התחתונה,
              על-מנת לקבל את תוצאותינו.
            </QuestionnaireDescription>
          </QuestionnaireHeader>
          <QuestionnaireForm>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => console.log(values)}
            >
              {({ values }) => (
                <>
                  <Indicator />
                  <QuestionnaireFormBody>
                    {FORM_ROWS.map((row, index) => (
                      <FormRow
                        key={index}
                        number={`row${index + 1}`}
                        title={row.title}
                        order={index}
                        expanded={expandedRow === index}
                        expandedItems={row.expanded}
                        onChange={(isExpanded) =>
                          setExpandedRow(isExpanded ? index : -1)
                        }
                        isFirstRow={index === 0}
                        onInfoClick={() => {
                          const panel = row.panel
                          setPanelData(panel)
                          setInfoPanelOpen(true)
                        }}
                      />
                    ))}
                  </QuestionnaireFormBody>
                  <QuestionnaireButtons>
                    <Link href="/categories">
                      <BackButton>חזור</BackButton>
                    </Link>
                    <Link href="/participants">
                      <FurtherButton type="submit">המשך</FurtherButton>
                    </Link>
                  </QuestionnaireButtons>
                </>
              )}
            </Formik>
          </QuestionnaireForm>
        </QuestionnaireContent>
      </QuestionnaireContainer>
      {panelData && (
        <InfoPanel
          open={infoPanelOpen}
          onClose={() => setInfoPanelOpen(false)}
          title={panelData.title}
          description={panelData.description}
        />
      )}
    </QuestionnaireWrapper>
  )
}

export default Questionnaire
