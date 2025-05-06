"use client"
import React from "react"
import Header from "@/components/Header"
import { Box, TextField, Typography } from "@mui/material"
import {
  BackButton,
  FurtherButton,
  ParticipantButtons,
  ParticipantsContainer,
  ParticipantsContent,
  ParticipantsDescription,
  ParticipantsForm,
  ParticipantsFormBody,
  ParticipantsHeader,
  ParticipantsInputs,
  ParticipantsTitle,
  ParticipantsWrapper,
} from "./styled"
import Link from "next/link"
import { PARTICIPANTS_INPUTS } from "./constants"
import { initialValues, ParticipantsSchema } from "./contents"
import { Formik, Form, FormikHelpers, FieldArray } from "formik"
import { Participant, ParticipantsFormValues } from "@/interfaces/participants"
import ParticipantsInput from "./components/ParticipantsInput"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Participants = () => {
  const router = useRouter()
  const handleSubmit = async (
    values: ParticipantsFormValues,
    actions: FormikHelpers<ParticipantsFormValues>
  ) => {
    console.log(values)
    router.push("/vizualization")
  }
  return (
    <ParticipantsWrapper>
      <Header isOnMainPage={false} />
      <ParticipantsContainer>
        <ParticipantsContent>
          <ParticipantsHeader>
            <ParticipantsTitle>הוסף משתתפים לשאלון</ParticipantsTitle>
            <ParticipantsDescription>
              את האבחון העצמי ימלאו בעלי תפקידים בכירים ברשות (לפחות חמישה),
              על-מנת שתתקבל תמונת מצב כמה שיותר מדויקת. הכלי אפקטיבי יותר ככל
              שימלאו על-ידו מספר רב יותר של בעלי תפקידים המייצגים נקודות
              שונות/דעות שונות בתחומי העיסוק של הרשות המקומית. מומלץ בחום,
              ביניהם: ראש/מנכ"ל, סגנים, מנהלי אגפים, מנהלי מחלקות, ועובדים
              בכירים נוספים.
            </ParticipantsDescription>
          </ParticipantsHeader>
          <ParticipantsForm>
            <Formik
              initialValues={initialValues}
              validationSchema={ParticipantsSchema}
              onSubmit={handleSubmit}
            >
              {({ values, isSubmitting }) => (
                <Form>
                  <FieldArray name="participants">
                    {({ push, remove }) => (
                      <>
                        <ParticipantsFormBody>
                          {values.participants.map((_, index) => (
                            <Box
                              key={index}
                              sx={{
                                position: "relative",
                                paddingInlineEnd: "40px",
                                borderBottom: "1px solid #eee",
                                marginBottom: "20px",
                                paddingBottom: "20px",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#000",
                                  fontWeight: 700,
                                  marginBottom: "20px",
                                }}
                              >
                                משתתף {String(index + 1).padStart(2, "0")}
                              </Typography>

                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "15px",
                                }}
                              >
                                <ParticipantsInputs>
                                  {PARTICIPANTS_INPUTS.map((input, i) => (
                                    <ParticipantsInput
                                      key={i}
                                      name={`participants[${index}].${input.name}`}
                                      type={input.type}
                                      placeholder={input.placeholder}
                                      required={input.required}
                                    />
                                  ))}
                                </ParticipantsInputs>
                                {values.participants.length > 2 && (
                                  <Box
                                    sx={{
                                      cursor: "pointer",
                                    }}
                                    onClick={() => remove(index)}
                                  >
                                    <Image
                                      src="/images/svg/categories/close-icon.svg"
                                      alt="מחק משתתף"
                                      width={10}
                                      height={10}
                                    />
                                  </Box>
                                )}
                              </Box>
                            </Box>
                          ))}
                        </ParticipantsFormBody>
                        <Box
                          onClick={() =>
                            push({
                              firstName: "",
                              lastName: "",
                              position: "",
                              email: "",
                            })
                          }
                          sx={{
                            cursor: "pointer",
                            color: "#b152a2",
                            marginBottom: "30px",
                          }}
                        >
                          הוסף משתתף חדש +
                        </Box>
                      </>
                    )}
                  </FieldArray>
                  <ParticipantButtons>
                    <Link href="/questionnaire">
                      <BackButton>חזור</BackButton>
                    </Link>
                    <FurtherButton disabled={isSubmitting} type="submit">
                      {isSubmitting ? "...המשך" : "המשך"}
                    </FurtherButton>
                  </ParticipantButtons>
                </Form>
              )}
            </Formik>
          </ParticipantsForm>
        </ParticipantsContent>
      </ParticipantsContainer>
    </ParticipantsWrapper>
  )
}

export default Participants
