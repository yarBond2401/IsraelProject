import { db } from "@/firebase/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"

export interface AnswersMap {
  [key: string]: string
}

const SESSIONS_COLLECTION = "sessions"

export async function getAnswers(municipality: string): Promise<AnswersMap> {
  const sessionRef = doc(db, SESSIONS_COLLECTION, municipality)
  const snap = await getDoc(sessionRef)
  if (!snap.exists()) return {}
  const data = snap.data() as { answers?: AnswersMap }
  return data.answers || {}
}

export async function saveAnswers(
  municipality: string,
  answers: AnswersMap
): Promise<void> {
  const sessionRef = doc(db, SESSIONS_COLLECTION, municipality)
  await setDoc(sessionRef, { answers }, { merge: true })
}
