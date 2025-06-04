"use client"

import React, { useState, useEffect } from "react"
import Header from "@/components/Header"
import { Button } from "@mui/material"
import { enqueueSnackbar } from "notistack"
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
import { Formik, Form, useFormikContext } from "formik"
import FormRow from "./components/FormRow"
import { FORM_ROWS } from "./constants"
import Link from "next/link"
import Indicator from "./components/Indicator"
import InfoPanel from "./components/InfoPanel"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import {
  getAnswers,
  saveAnswers,
  AnswersMap,
} from "@/utils/questionnaireManage"
import LoadingScreen from "@/components/LoadingScreen"

import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase/firebase"

const generateInitialValues = (): AnswersMap => {
  const values: AnswersMap = {}
  FORM_ROWS.forEach((row, rowIndex) => {
    row.expanded.forEach((_, itemIndex) => {
      values[`row${rowIndex + 1}_select1_item${itemIndex + 1}`] = ""
      values[`row${rowIndex + 1}_select2_item${itemIndex + 1}`] = ""
    })
  })
  return values
}

function AutoSave({ municipality }: { municipality: string }) {
  const { values } = useFormikContext<AnswersMap>()
  useEffect(() => {
    saveAnswers(municipality, values)
  }, [values, municipality])
  return null
}

export default function Questionnaire() {
  const { user: municipality } = useAuth()
  const router = useRouter()

  const [initialValues, setInitialValues] = useState<AnswersMap | null>(null)
  const [expandedRow, setExpandedRow] = useState<number>(0)
  const [infoPanelOpen, setInfoPanelOpen] = useState(false)
  const [panelData, setPanelData] = useState<{
    title: string
    description: string
  } | null>(null)

  const [relaxedValidationFlag, setRelaxedValidationFlag] = useState<
    boolean | null
  >(null)

  useEffect(() => {
    if (!municipality) return
    getAnswers(municipality).then((saved) => {
      const defaults = generateInitialValues()
      setInitialValues({ ...defaults, ...saved })
    })
  }, [municipality])

  useEffect(() => {
    if (!municipality) return

    const userDocRef = doc(db, "users", municipality)
    getDoc(userDocRef)
      .then((snap) => {
        if (snap.exists()) {
          const data = snap.data() as { relaxedValidation?: boolean }
          setRelaxedValidationFlag(data.relaxedValidation ?? true)
        } else {
          setRelaxedValidationFlag(true)
        }
      })
      .catch((err) => {
        console.error("Error reading feature flag:", err)
        setRelaxedValidationFlag(true)
      })
  }, [municipality])

  if (!initialValues || relaxedValidationFlag === null) {
    return <LoadingScreen />
  }

  function countAnsweredInSection(values: AnswersMap): number[] {
    const answeredCountPerSection: number[] = FORM_ROWS.map(() => 0)

    FORM_ROWS.forEach((row, sectionIdx) => {
      row.expanded.forEach((_, itemIdx) => {
        const keyCur = `row${sectionIdx + 1}_select1_item${itemIdx + 1}`
        const keyDes = `row${sectionIdx + 1}_select2_item${itemIdx + 1}`
        const c = values[keyCur]
        const d = values[keyDes]
        if (c && Number(c) > 0) answeredCountPerSection[sectionIdx]++
        if (d && Number(d) > 0) answeredCountPerSection[sectionIdx]++
      })
    })
    return answeredCountPerSection
  }

  function handleSubmitWithValidation(values: AnswersMap) {
    const answeredCounts = countAnsweredInSection(values)

    const sectionsWithAtLeastTwo = answeredCounts.filter(
      (cnt) => cnt >= 2
    ).length

    if (relaxedValidationFlag) {
      if (sectionsWithAtLeastTwo < 3) {
        enqueueSnackbar("עליך למלא לפחות שני שאלות ב־3 מימדים לפחות", {
          variant: "error",
        })
        return
      }
    } else {
      let fullyAnsweredSectionCount = 0
      FORM_ROWS.forEach((row, sectionIdx) => {
        const totalQuestions = row.expanded.length
        let answeredQuestions = 0

        row.expanded.forEach((_, itemIdx) => {
          const keyCur = `row${sectionIdx + 1}_select1_item${itemIdx + 1}`
          const keyDes = `row${sectionIdx + 1}_select2_item${itemIdx + 1}`
          const c = values[keyCur]
          const d = values[keyDes]
          if (c && Number(c) > 0 && d && Number(d) > 0) {
            answeredQuestions++
          }
        })

        if (answeredQuestions === totalQuestions) {
          fullyAnsweredSectionCount++
        }
      })

      if (fullyAnsweredSectionCount < 3) {
        enqueueSnackbar("עליך למלא באופן מלא לפחות 3 מימדים", {
          variant: "error",
        })
        return
      }
    }

    router.push("/participants")
  }

  return (
    <QuestionnaireWrapper>
      <Header isOnMainPage={false} />
      <QuestionnaireContainer>
        <QuestionnaireContent>
          <QuestionnaireHeader>
            <QuestionnaireTitle>חדשנות מוניציפאלית</QuestionnaireTitle>
            <QuestionnaireDescription></QuestionnaireDescription>
          </QuestionnaireHeader>

          <QuestionnaireForm>
            <Formik
              initialValues={initialValues}
              enableReinitialize
              onSubmit={handleSubmitWithValidation}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <AutoSave municipality={municipality!} />
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
                          setPanelData(row.panel)
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
                </Form>
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
