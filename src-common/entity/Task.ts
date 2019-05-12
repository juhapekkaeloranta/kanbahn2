export interface Task {
  id: number
  title: string
  sortindex: number
  listid: number
}

export interface TaskById {
  [id: string]: Task
}

export interface TasksById {
  byid: TaskById
}