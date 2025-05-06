// "use client"
// import * as React from "react"
// import TextField from "@mui/material/TextField"
// import Autocomplete from "@mui/material/Autocomplete"
// import { StyledAutocomplete } from "./styled"
// import { InputAdornment } from "@mui/material"
// import Image from "next/image"

// export default function SearchInput() {
//   const [value, setValue] = React.useState<string | null>(null)

//   const handleSearch = (newValue: string | null) => {
//     setValue(newValue)
//     if (newValue) {
//       console.log(`Search: ${newValue}`)
//     }
//   }
//   return (
//     <Autocomplete
//       id="search-input"
//       freeSolo
//       value={value}
//       onChange={(_, newValue) => handleSearch(newValue)}
//       options={Films.map((option) => option.title)}
//       renderInput={(params) => (
//         <TextField {...params} label="חיפוש" sx={{ minWidth: 200 }} />
//       )}
//     />
//   )
// }

// const Films = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Godfather: Part II", year: 1974 },
//   { title: "The Dark Knight", year: 2008 },
//   { title: "12 Angry Men", year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: "Pulp Fiction", year: 1994 },
//   {
//     title: "The Lord of the Rings: The Return of the King",
//     year: 2003,
//   },
// ]

"use client"
import * as React from "react"
import { TextField, InputAdornment } from "@mui/material"
import Autocomplete from "@mui/material/Autocomplete"
import Image from "next/image"
import { StyledAutocomplete, StyledPopper, StyledTextField } from "./styled"
import { SearchInputProps } from "@/interfaces/header"

export default function SearchInput({ isMainPage = true }: SearchInputProps) {
  const [value, setValue] = React.useState<string | null>(null)

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
                    src="/images/svg/header/search-icon.png"
                    alt="Search"
                    width={30}
                    height={30}
                  />
                ) : (
                  <Image
                    src="/images/svg/header/search-icon-black.png"
                    alt="Search"
                    width={30}
                    height={30}
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
