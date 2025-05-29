import { db } from "@/firebase/firebase"
import {
  collection,
  addDoc,
  getDocs,
  writeBatch,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore"

export interface ParticipantInput {
  firstName: string
  lastName: string
  position?: string
}

export async function getParticipants(
  municipality: string
): Promise<ParticipantInput[]> {
  const colRef = collection(db, "sessions", municipality, "participants")
  const snap = await getDocs(colRef)
  return snap.docs.map((d) => d.data() as ParticipantInput)
}

export async function saveParticipants(
  municipality: string,
  participants: ParticipantInput[]
): Promise<void> {
  const batch = writeBatch(db)
  const colRef = collection(db, "sessions", municipality, "participants")
  const existing = await getDocs(colRef)
  existing.docs.forEach((docSnap) => batch.delete(docSnap.ref))
  participants.forEach((p, idx) => {
    const docRef = doc(
      db,
      "sessions",
      municipality,
      "participants",
      idx.toString()
    )
    batch.set(docRef, { ...p, createdAt: serverTimestamp() })
  })
  await batch.commit()
}

// vizualization
export interface SavedParticipant {
  id: string
  firstName: string
  lastName: string
  position?: string
  answers: Record<string, string>
}

export async function addSavedParticipant(
  firstName: string,
  lastName: string,
  position: string,
  answers: Record<string, string>
): Promise<string> {
  const docRef = await addDoc(collection(db, "savedParticipants"), {
    firstName,
    lastName,
    position,
    answers,
    createdAt: serverTimestamp(),
  })
  return docRef.id
}

export async function getSavedParticipants(): Promise<SavedParticipant[]> {
  const snapshot = await getDocs(collection(db, "savedParticipants"))
  return snapshot.docs.map((docSnap) => {
    const data = docSnap.data() as Omit<SavedParticipant, "id"> & {
      answers?: Record<string, string>
    }
    return {
      id: docSnap.id,
      firstName: data.firstName,
      lastName: data.lastName,
      position: data.position,
      answers: data.answers || {},
    }
  })
}

export async function getSavedParticipant(
  id: string
): Promise<SavedParticipant | null> {
  const ref = doc(db, "savedParticipants", id)
  const snap = await getDoc(ref)
  if (!snap.exists()) return null
  const data = snap.data() as Omit<SavedParticipant, "id"> & {
    answers?: Record<string, string>
  }
  return {
    id: snap.id,
    firstName: data.firstName,
    lastName: data.lastName,
    position: data.position,
    answers: data.answers || {},
  }
}
