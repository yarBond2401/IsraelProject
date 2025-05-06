// export interface FormRowsData {
//   number: string
//   title: string
//   order: number
//   description: string
// }
// export interface ExpandedItemsData {
//   number: string
//   title: string
// }

export interface ExpandedItem {
  number: string
  description: string
}
export interface PanelData {
  title: string
  description: string
}
export interface FormRowsData {
  title: string
  expanded: ExpandedItem[]
  panel: PanelData
}
