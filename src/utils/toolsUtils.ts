import { FORM_ROWS } from "@/components/pages/Questionnaire/constants"
export function computeSectionScores(
  answers: Record<string, string>
): Record<string, { current: number; desired: number; score: number }> {
  const result: Record<
    string,
    { current: number; desired: number; score: number }
  > = {}

  FORM_ROWS.forEach((row, i) => {
    let curSum = 0
    let desSum = 0

    row.expanded.forEach((_, j) => {
      const rawC = answers[`row${i + 1}_select1_item${j + 1}`]
      const rawD = answers[`row${i + 1}_select2_item${j + 1}`]

      const c = rawC ? Number(rawC) : 0
      const d = rawD ? Number(rawD) : 0

      if (!isNaN(c)) curSum += c
      if (!isNaN(d)) desSum += d
    })

    const score = desSum - curSum
    result[row.title.trim()] = { current: curSum, desired: desSum, score }
  })

  return result
}
