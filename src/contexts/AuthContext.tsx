"use client"

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react"
import {
  verifyCredentials,
  createSession,
  restoreSession,
  clearSession,
} from "@/utils/sessionManage"
import { doc, setDoc } from "firebase/firestore"
import { db } from "@/firebase/firebase"

interface AuthContextType {
  user: string | null
  login: (municipality: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      const muni = await restoreSession()
      if (muni) setUser(muni)
    })()
  }, [])

  const login = async (municipality: string, password: string) => {
    const ok = await verifyCredentials(municipality, password)
    if (!ok) return false

    await createSession(municipality)

    const userDocRef = doc(db, "users", municipality)
    await setDoc(userDocRef, { relaxedValidation: true }, { merge: true })

    setUser(municipality)
    return true
  }

  const logout = () => {
    clearSession()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be inside AuthProvider")
  return ctx
}
