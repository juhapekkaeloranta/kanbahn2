export interface Lane {
  id: number
  name: string
  board: number
}

export interface LaneById {
  [id: string]: Lane
}

export interface LanesById {
  byid: LaneById
}