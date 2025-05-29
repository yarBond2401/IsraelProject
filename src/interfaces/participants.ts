export interface ParticipantsFormValues {
  participants: Participant[]
}

export interface Participant {
  firstName: string
  lastName: string
  position?: string
}
export interface ParticipantsInputProps {
  name: string
  placeholder?: string
  type?: string
  required?: boolean
}
