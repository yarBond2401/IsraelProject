"use client"
import React, { useState } from "react"
import Header from "@/components/Header"
import { Button } from "@mui/material"
import {
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
import { useRouter } from "next/navigation"
const generateInitialValues = () => {
  const values: Record<string, string> = {}
  FORM_ROWS.forEach((row, rowIndex) => {
    row.expanded.forEach((_, itemIndex) => {
      values[`row${rowIndex + 1}_select1_item${itemIndex + 1}`] = ""
      values[`row${rowIndex + 1}_select2_item${itemIndex + 1}`] = ""
    })
  })
  return values
}

const Questionnaire = () => {
  const [expandedRow, setExpandedRow] = useState<number>(0)
  const [infoPanelOpen, setInfoPanelOpen] = useState(false)
  const [panelData, setPanelData] = useState<{
    title: string
    description: string
  } | null>(null)

  const router = useRouter()

  const handleSubmit = (values: Record<string, string>) => {
    const surveyData = FORM_ROWS.map((row, rowIndex) => {
      const currentValues: number[] = []
      const desiredValues: number[] = []
      row.expanded.forEach((_, itemIndex) => {
        const c = Number(
          values[`row${rowIndex + 1}_select1_item${itemIndex + 1}`]
        )
        const d = Number(
          values[`row${rowIndex + 1}_select2_item${itemIndex + 1}`]
        )
        if (!isNaN(c)) currentValues.push(c)
        if (!isNaN(d)) desiredValues.push(d)
      })
      return {
        sectionId: row.title,
        currentValues,
        desiredValues,
      }
    })
    localStorage.setItem("surveyData", JSON.stringify(surveyData))
    router.push("/participants")
  }

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
              initialValues={generateInitialValues()}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
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
                      <Button variant="back">חזור</Button>
                    </Link>
                    <Button variant="forward" color="purple" type="submit">
                      המשך
                    </Button>
                  </QuestionnaireButtons>
                </form>
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
