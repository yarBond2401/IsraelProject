"use client"

import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { Formik, Form } from "formik"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { listMunicipalities } from "@/utils/sessionManage"
import {
  SignUpButton,
  SignUpContainer,
  SignUpForm,
  SignUpFormBody,
  SignUpFormTitle,
  SignUpHeader,
  SignUpWrapper,
} from "./styled"
import { initialValues, SignInSchema } from "./contents"
import Link from "next/link"
import Image from "next/image"
import SignInput from "./components/SignInput"
import SignSelect from "./components/SignSelect"

const SignIn: React.FC = () => {
  const router = useRouter()
  const { login } = useAuth()

  const [municipalities, setMunicipalities] = useState<string[]>([])
  const [feedback, setFeedback] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  useEffect(() => {
    listMunicipalities().then(setMunicipalities)
  }, [])

  useEffect(() => {
    if (feedback) {
      const timeout = setTimeout(() => setFeedback(null), 2000)
      return () => clearTimeout(timeout)
    }
  }, [feedback])

  return (
    <SignUpWrapper>
      <SignUpContainer>
        <SignUpHeader>
          <Link href="/">
            <Image
              src="/images/svg/header/header-logo-1.png"
              alt="logo-munivation"
              width={174}
              height={70}
            />
          </Link>
        </SignUpHeader>

        <SignUpForm>
          <SignUpFormTitle variant="h1">כניסה</SignUpFormTitle>

          <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true)
              const ok = await login(values.municipality, values.password)
              setSubmitting(false)

              if (!ok) {
                setFeedback({
                  type: "error",
                  message: "הרשות או הסיסמה שגויים",
                })
              } else {
                setFeedback({
                  type: "success",
                  message: "התחברת בהצלחה!",
                })
                setTimeout(() => router.push("/"), 1500)
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <SignUpFormBody>
                  <SignSelect
                    name="municipality"
                    label="רשות"
                    placeholder="בחר עירייה"
                    options={municipalities}
                  />

                  <SignInput
                    name="password"
                    label="סיסמה"
                    placeholder="הזן את הסיסמה שלך"
                    type="password"
                  />

                  <SignUpButton
                    variant="forward"
                    color="green"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "...המשך" : "המשך"}
                  </SignUpButton>
                </SignUpFormBody>
              </Form>
            )}
          </Formik>
        </SignUpForm>
      </SignUpContainer>

      {feedback && (
        <Box
          sx={{
            position: "fixed",
            bottom: "30px",
            left: "50%",
            transform: feedback
              ? "translateX(-50%) scale(1)"
              : "translateX(-50%) scale(0.95)",
            backgroundColor:
              feedback.type === "success" ? "#d0f5e8" : "#ffe1e1",
            color: feedback.type === "success" ? "green" : "red",
            padding: "12px 20px",
            borderRadius: "10px",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            opacity: feedback ? 1 : 0,
            zIndex: 9999,
            pointerEvents: "none",
            visibility: feedback ? "visible" : "hidden",
          }}
        >
          {feedback.message}
        </Box>
      )}
    </SignUpWrapper>
  )
}

export default SignIn
