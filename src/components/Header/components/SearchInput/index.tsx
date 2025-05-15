"use client"
import * as React from "react"
import { InputAdornment } from "@mui/material"
import Image from "next/image"
import { StyledAutocomplete, StyledPopper, StyledTextField } from "./styled"
import { SearchInputProps } from "@/interfaces/header"

export default function SearchInput({ isMainPage = true }: SearchInputProps) {
  const [value] = React.useState<string | null>(null)

  return (
    <StyledAutocomplete
      isMainPage={isMainPage}
      id="search-input"
      freeSolo
      value={value}
      options={Films.map((option) => option.title)}
      PopperComponent={StyledPopper}
      renderInput={(params) => (
        <StyledTextField
          isMainPage={isMainPage}
          {...params}
          placeholder="חפש פרויקט חדשני"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {isMainPage ? (
                  <Image
                    src="/images/svg/header/search-icon-white.svg"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/images/svg/header/search-icon-black.svg"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                )}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  )
}

const Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
]
