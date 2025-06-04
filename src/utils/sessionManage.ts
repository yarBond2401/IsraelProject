import { db } from "@/firebase/firebase"
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore"

let cachedCreds: Array<{ municipality: string; key: string }> | null = null

async function fetchCredentialsFromSheet(): Promise<
  Array<{ municipality: string; key: string }>
> {
  //   const SHEET_ID = process.env.NEXT_PUBLIC_SHEETS_ID
  // 1x5IgdJaaYHuvAiXrGjf-pp-b95lNYLUv5BWhLu3ayTs
  // const SHEET_ID = "1aUp0Uc9qoLTDeLf63Avme36QeHzC7-rycA-qHRt6C9c"
  const SHEET_ID = "1x5IgdJaaYHuvAiXrGjf-pp-b95lNYLUv5BWhLu3ayTs"
  //   const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY
  const API_KEY = "AIzaSyAKghJI5z7qchMXuDyiyZoFbttc4_lihtw"
  const RANGE = `passwords!A2:B`

  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}` +
    `?key=${API_KEY}`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Google Sheets fetch failed: ${res.statusText}`)
  }
  const data = await res.json()

  const rows: string[][] = data.values || []

  return rows.map(([municipality, key]) => ({ municipality, key }))
}

export async function verifyCredentials(
  municipality: string,
  password: string
): Promise<boolean> {
  if (!cachedCreds) {
    cachedCreds = await fetchCredentialsFromSheet()
  }

  const record = cachedCreds.find(
    (r) => r.municipality === municipality && r.key === password
  )
  return !!record
}

const SESSION_COLLECTION = "sessions"
const COOKIE_NAME = "muniSession"

export async function createSession(municipality: string): Promise<void> {
  const sessionRef = doc(db, SESSION_COLLECTION, municipality)
  await setDoc(sessionRef, {
    municipality,
    createdAt: serverTimestamp(),
  })

  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
    municipality
  )}; path=/; max-age=${60 * 60 * 24 * 7}` // 7 days
}

export async function restoreSession(): Promise<string | null> {
  if (typeof document === "undefined") return null

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]+)`)
  )
  if (!match) return null

  const municipality = decodeURIComponent(match[1])
  const sessionRef = doc(db, SESSION_COLLECTION, municipality)
  const snap = await getDoc(sessionRef)
  if (!snap.exists()) return null
  return municipality
}

export function clearSession(): void {
  if (typeof document === "undefined") return
  document.cookie = `${COOKIE_NAME}=; path=/; max-age=0`
}

export async function listMunicipalities(): Promise<string[]> {
  if (!cachedCreds) {
    cachedCreds = await fetchCredentialsFromSheet()
  }
  return cachedCreds.map((r) => r.municipality)
}
