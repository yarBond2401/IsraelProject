"use client"

import React, { useState } from "react"
import { useField, useFormikContext } from "formik"
import { Typography } from "@mui/material"
import Autocomplete from "@mui/material/Autocomplete"
import { InputWrapper, SignTextField, StyledIconWrapper } from "./styled"
import Image from "next/image"

interface SignSelectProps {
  name: string
  label: string
  placeholder: string
  options: string[]
}

const SignSelect: React.FC<SignSelectProps> = ({
  name,
  label,
  placeholder,
  options,
}) => {
  const [field, meta, helpers] = useField<string>(name)
  const { setFieldTouched } = useFormikContext()
  const [open, setOpen] = useState(false)

  const showError = Boolean(meta.touched && meta.error)

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

      <Autocomplete
        options={Array.from(new Set(options))}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => {
          setOpen(false)
          setFieldTouched(name, true)
        }}
        value={field.value || ""}
        onChange={(_, val) => helpers.setValue(val || "")}
        noOptionsText={
          <Typography sx={{ fontSize: "18px", color: "#000" }}>
            לא נמצאו רשויות
          </Typography>
        }
        popupIcon={
          <StyledIconWrapper open={open}>
            <Image
              src="/images/svg/expand-icon.svg"
              alt="expand"
              width={15}
              height={15}
            />
          </StyledIconWrapper>
        }
        disableClearable={false}
        renderInput={(params) => (
          <SignTextField
            {...params}
            error={showError}
            placeholder={placeholder}
            fullWidth
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
      {showError && (
        <Typography
          color="error"
          sx={{
            fontSize: "14px",
            fontWeight: "300",
            textAlign: "right",
            marginTop: "4px",
          }}
        >
          {meta.error}
        </Typography>
      )}
    </InputWrapper>
  )
}

export default SignSelect
