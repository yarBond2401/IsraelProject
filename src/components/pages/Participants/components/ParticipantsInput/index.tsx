"use client"

import { getIn, useField, useFormikContext } from "formik"
import { Typography } from "@mui/material"
import { InputWrapper, ParticipantsTextField } from "./styled"
import {
  ParticipantsFormValues,
  ParticipantsInputProps,
} from "@/interfaces/participants"

const ParticipantsInput = ({
  name,
  placeholder,
  type = "email",
  ...props
}: ParticipantsInputProps) => {
  const [field] = useField(name)
  const { errors, touched } = useFormikContext<ParticipantsFormValues>()

  const error = getIn(touched, name) && getIn(errors, name)

  return (
    <InputWrapper>
      <ParticipantsTextField
        {...field}
        {...props}
        name={name}
        placeholder={placeholder}
        type={type}
        autoComplete={
          name.includes("email")
            ? "email"
            : name.includes("firstName")
            ? "given-name"
            : name.includes("lastName")
            ? "family-name"
            : name.includes("position")
            ? "organization-title"
            : "on"
        }
        error={!!error}
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="none"
      />
      {error && (
        <Typography color="error" sx={{ fontSize: "14px", fontWeight: "300" }}>
          {getIn(errors, name) as string}
        </Typography>
      )}
    </InputWrapper>
  )
}

export default ParticipantsInput
