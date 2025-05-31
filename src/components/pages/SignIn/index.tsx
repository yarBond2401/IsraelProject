"use client"

import React, { useEffect, useState } from "react"
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
import { enqueueSnackbar } from "notistack"

const SignIn: React.FC = () => {
  const router = useRouter()
  const { login } = useAuth()

  const [municipalities, setMunicipalities] = useState<string[]>([])

  useEffect(() => {
    listMunicipalities().then(setMunicipalities)
  }, [])

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
                enqueueSnackbar("הרשות או הסיסמה שגויים", {
                  variant: "error",
                })
              } else {
                enqueueSnackbar("התחברת בהצלחה!", {
                  variant: "success",
                })
                router.push("/")
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
    </SignUpWrapper>
  )
}

export default SignIn
