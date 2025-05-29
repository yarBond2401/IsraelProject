"use client"

import { useField, useFormikContext } from "formik"
import { Typography } from "@mui/material"
import { InputWrapper, SignTextField } from "./styled"
import {} from "@/interfaces/participants"
import { SignInputProps, SignUpFormValues } from "@/interfaces/signUp"

const SignInput = ({
  name,
  label,
  placeholder,
  type = "text",
  ...props
}: SignInputProps) => {
  const [field] = useField(name)
  const { errors, touched } = useFormikContext<SignUpFormValues>()
  const error = touched[name] && errors[name]
  return (
    <InputWrapper>
      {label && (
        <Typography
          sx={{
            display: "block",
            marginBlockEnd: "12px",
            color: "#000",
            fontWeight: 700,
            fontSize: { xs: "14px", md: "18px" },
          }}
        >
          {label}
        </Typography>
      )}
      <SignTextField
        {...field}
        {...props}
        placeholder={placeholder}
        type={type}
        error={!!error}
        label=""
      />
      {error && (
        <Typography
          color="error"
          sx={{
            fontSize: "14px",
            fontWeight: "300",
          }}
        >
          {errors[name] as string}
        </Typography>
      )}
    </InputWrapper>
  )
}

export default SignInput
