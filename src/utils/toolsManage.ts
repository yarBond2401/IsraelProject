import { ToolsDetails } from "@/interfaces/tools"

const SHEET_ID = "1x5IgdJaaYHuvAiXrGjf-pp-b95lNYLUv5BWhLu3ayTs"
const API_KEY = "AIzaSyAKghJI5z7qchMXuDyiyZoFbttc4_lihtw"

export interface ToolRecord {
  id: string

  title: string

  sectionKey: string

  filterKey: string

  threshold: number

  jsonData: ToolsDetails
}

export async function fetchRawToolsFromSheet(): Promise<string[][]> {
  const range = encodeURIComponent("template!B2:I")
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`

  const response = await fetch(url)
  if (!response.ok) {
    console.error(
      "Google Sheets API Error:",
      response.status,
      response.statusText
    )
    return []
  }

  const json = (await response.json()) as { values?: string[][] }
  return json.values || []
}

export function normalizeToolRows(rawRows: string[][]): ToolRecord[] {
  const result: ToolRecord[] = []

  rawRows.forEach((r) => {
    if (r.length < 5) return

    const [
      rawJson,
      title,
      sectionKey,
      filterKey,
      thresholdStr,
      ,
      ,
      ,
      slideUrl,
    ] = r
    if (!rawJson || !title || !sectionKey || !filterKey || !thresholdStr) {
      return
    }

    let parsed
    try {
      parsed = JSON.parse(rawJson)
      if (typeof parsed !== "object" || parsed.TOOLS_DATA == null) {
        console.warn("Skipping row: JSON blob missing TOOLS_DATA")
        return
      }
    } catch (e) {
      console.warn("Skipping row: invalid JSON:", rawJson, e)
      return
    }

    const keys = Object.keys(parsed.TOOLS_DATA)
    if (keys.length !== 1) {
      console.warn("Skipping row: expected exactly one key under TOOLS_DATA")
      return
    }
    const idKey = keys[0]
    const data = parsed.TOOLS_DATA[idKey]

    const threshold = parseInt(thresholdStr, 10)
    if (isNaN(threshold)) {
      console.warn("Skipping row: invalid threshold:", thresholdStr)
      return
    }

    if (slideUrl) {
      if (!data.slider) {
        data.slider = []
      }
      data.slider = [{ imageSrc: slideUrl }, ...data.slider]
    }

    result.push({
      id: idKey,
      title: title.trim(),
      sectionKey: sectionKey.trim(),
      filterKey: filterKey.trim(),
      threshold: threshold,
      jsonData: data,
    })
  })

  return result
}
