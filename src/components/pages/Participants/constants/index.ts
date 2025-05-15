import { ParticipantsInputProps } from "@/interfaces/participants"

export const PARTICIPANTS_INPUTS: ParticipantsInputProps[] = [
  { name: "firstName", placeholder: "שם פרטי", type: "text", required: true },
  { name: "lastName", placeholder: "שם משפחה", type: "text", required: true },
  { name: "position", placeholder: "תפקיד", type: "text", required: false },
  {
    name: "email",
    placeholder: "דואר אלקטרוני",
    type: "email",
    required: true,
  },
]
