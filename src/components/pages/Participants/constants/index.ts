import { ParticipantsInputProps } from "@/interfaces/participants"

export const PARTICIPANTS_INPUTS: ParticipantsInputProps[] = [
  { name: "firstName", placeholder: "שם פרטי", type: "text" },
  { name: "lastName", placeholder: "שם משפחה", type: "text" },
  { name: "position", placeholder: "תפקיד", type: "text" },
  {
    name: "email",
    placeholder: "דואר אלקטרוני",
    type: "email",
  },
]
