"use client"

import React, { useState, useEffect } from "react"
import Header from "@/components/Header"
import { Box, Button, Typography } from "@mui/material"
import {
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
import { Formik, Form, FieldArray } from "formik"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { getParticipants, saveParticipants } from "@/utils/participnatsManage"
import { ParticipantsFormValues } from "@/interfaces/participants"
import { ParticipantsSchema } from "./contents"
import ParticipantsInput from "./components/ParticipantsInput"
import Image from "next/image"
import LoadingScreen from "@/components/LoadingScreen"

export default function ParticipantsPage() {
  const { user: municipality } = useAuth()
  const router = useRouter()
  const [initialVals, setInitialVals] = useState<ParticipantsFormValues | null>(
    null
  )

  useEffect(() => {
    if (!municipality) return
    getParticipants(municipality).then((fetched) => {
      const participants =
        fetched.length > 0
          ? fetched.map((p) => ({ ...p }))
          : [{ firstName: "", lastName: "", position: "" }]
      setInitialVals({ participants })
    })
  }, [municipality])

  if (!initialVals) return <LoadingScreen />

  return (
    <ParticipantsWrapper>
      <Header isOnMainPage={false} />
      <ParticipantsContainer>
        <ParticipantsContent>
          <ParticipantsHeader>
            <ParticipantsTitle>הוסף משתתפים לשאלון</ParticipantsTitle>
            <ParticipantsDescription>
              אנא הזן את הפרטים של המשתתפים (לפחות אחד) שימלאו את השאלון.
            </ParticipantsDescription>
          </ParticipantsHeader>

          <ParticipantsForm>
            <Formik
              initialValues={initialVals}
              validationSchema={ParticipantsSchema}
              enableReinitialize
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true)
                await saveParticipants(municipality!, values.participants)
                setSubmitting(false)
                router.push("/vizualization")
              }}
            >
              {({ values, isSubmitting }) => (
                <Form>
                  <FieldArray name="participants">
                    {({ push, remove }) => (
                      <>
                        <ParticipantsFormBody>
                          {values.participants.map((_, idx) => (
                            <Box key={idx} mb={3}>
                              <Typography sx={{ fontWeight: 700, mb: 1 }}>
                                משתתף {String(idx + 1).padStart(2, "0")}
                              </Typography>

                              <Box
                                sx={{
                                  display: "flex",
                                  gap: "10px",
                                  alignItems: "center",
                                }}
                              >
                                <ParticipantsInputs>
                                  <ParticipantsInput
                                    name={`participants[${idx}].firstName`}
                                    placeholder="שם פרטי"
                                  />
                                  <ParticipantsInput
                                    name={`participants[${idx}].lastName`}
                                    placeholder="שם משפחה"
                                  />
                                  <ParticipantsInput
                                    name={`participants[${idx}].position`}
                                    placeholder="תפקיד (אופציונלי)"
                                  />
                                </ParticipantsInputs>

                                {values.participants.length > 1 && (
                                  <Box
                                    sx={{ cursor: "pointer" }}
                                    onClick={() => remove(idx)}
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
                          sx={{ color: "#b152a2", mb: 3, cursor: "pointer" }}
                          onClick={() =>
                            push({
                              firstName: "",
                              lastName: "",
                              position: "",
                            })
                          }
                        >
                          הוסף משתתף חדש +
                        </Box>
                      </>
                    )}
                  </FieldArray>

                  <ParticipantButtons>
                    <Link href="/questionnaire">
                      <Button variant="back">חזור</Button>
                    </Link>
                    <Button
                      variant="forward"
                      color="purple"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting ? "..." : "המשך"}
                    </Button>
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
