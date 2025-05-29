export interface SignUpFormValues {
  municipality: string
  password: string
}

export interface SignInputProps {
  name: keyof SignUpFormValues
  label?: string
  placeholder?: string
  type?: string
  required?: boolean
}
