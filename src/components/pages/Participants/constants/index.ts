import { ParticipantsInputProps } from "@/interfaces/participants"

interface ParticipantsData {
  title: string
}

export const PARTICIPANTS_INPUTS: ParticipantsInputProps[] = [
  { name: "firstName", placeholder: "שם פרטי", type: "text", required: true },
  { name: "lastName", placeholder: "שם משפחה", type: "text", required: true },
  { name: "position", placeholder: "תפקיד", type: "text", required: true },
  {
    name: "email",
    placeholder: "דואר אלקטרוני",
    type: "email",
    required: true,
  },
]
