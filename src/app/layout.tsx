import type { Metadata } from "next"
import "./globals.css"
import ThemeWrapper from "@/components/ThemeWrapper/ThemeWrapper"
import { AuthProvider } from "@/contexts/AuthContext"
import { SnackbarProvider } from 'notistack';


export const metadata: Metadata = {
  title: "מוניוואיישן",
  description: "הפלטפורמה החדשנית לרשויות מקומיות בישראל",
  applicationName: "מוניוואיישן",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <ThemeWrapper>
          <AuthProvider>{children}</AuthProvider>
          <SnackbarProvider />
        </ThemeWrapper>
      </body>
    </html>
  )
}
