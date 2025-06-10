import { ProjectsDetails } from "@/interfaces/projects"

export interface RawRow {
  section: string
  filterCols: string
  jsonBlob: string
  threshold: number
}

export interface ProjectRecord {
  id: string
  sectionKey: string
  filterKeys: string[]
  threshold: number
  jsonData: ProjectsDetails
}

export async function fetchRawProjectsFromSheet(): Promise<RawRow[]> {
  const SHEET_ID = process.env.NEXT_PUBLIC_SHEETS_ID
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY

  const RANGE = `suppliers!A2:G22`
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`

  const resp = await fetch(url)
  if (!resp.ok) throw new Error("Failed to fetch Google Sheets")
  const data = await resp.json()
  const rows: string[][] = data.values || []
  return rows.map((r) => ({
    section: r[0].trim() || "",
    filterCols: (r[2] || "").trim(),
    jsonBlob: r[4] || "",
    threshold: Number(r[6] || "0"),
  }))
}

export async function normalizeRawRows(
  raws: RawRow[]
): Promise<ProjectRecord[]> {
  return raws.map((r) => {
    let parsed
    try {
      parsed = JSON.parse(r.jsonBlob)
    } catch {
      parsed = { PROJECTS_DATA: {} }
    }
    const topKey = Object.keys(parsed.PROJECTS_DATA || {}).find(Boolean)
    const jsonData = topKey ? parsed.PROJECTS_DATA[topKey] : {}

    const id = topKey || ""

    const filterKeys = r.filterCols
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "")

    return {
      id,
      sectionKey: r.section,
      filterKeys,
      threshold: r.threshold,
      jsonData,
    }
  })
}
