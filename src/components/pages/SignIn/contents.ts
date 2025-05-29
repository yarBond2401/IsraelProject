import * as Yup from "yup"
import { SignUpFormValues } from "@/interfaces/signUp"
export const SignInSchema = Yup.object().shape({
  municipality:
    Yup.string()
    .required("נדרש שם"),
  password: Yup.string()
    .min(2, "הסיסמה קצרה מדי!")
    .max(50, "הסיסמה ארוכה מדי!")
    .required("נדרשת סיסמהx"),
})

export const initialValues: SignUpFormValues = {
  municipality: "",
  password: "",
}
