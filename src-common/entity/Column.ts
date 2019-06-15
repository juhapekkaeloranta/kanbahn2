export interface Column {
  id: number
  name: string
  lane: number
}

export interface ColumnById {
  [id: string]: Column
}

export interface ColumnsById {
  byid: ColumnById
}