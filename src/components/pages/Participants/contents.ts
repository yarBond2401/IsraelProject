import * as Yup from "yup"

import { ParticipantsFormValues } from "@/interfaces/participants"

export const ParticipantsSchema = Yup.object().shape({
  participants: Yup.array().of(
    Yup.object().shape({
      firstName: Yup.string()
        .min(2, "השם קצר מדי!")
        .max(50, "השם ארוך מדי!")
        .required("נדרש שם"),
      lastName: Yup.string()
        .min(2, "השם קצר מדי!")
        .max(50, "השם ארוך מדי!")
        .required("נדרש שם"),
      position: Yup.string().min(2, "קצר מדי!").max(50, "ארוך מדי!"),
      email: Yup.string()
        .email("פורמט אימייל לא חוקי")
        .required("יש צורך באימייל"),
    })
  ),
})

export const initialValues: ParticipantsFormValues = {
  participants: Array(1).fill({
    firstName: "",
    lastName: "",
    position: "",
    email: "",
  }),
}
