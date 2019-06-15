export interface Board {
  id: number
  name: string
  project: number
}

export interface BoardById {
  [id: string]: Board
}

export interface BoardsById {
  byid: BoardById
}