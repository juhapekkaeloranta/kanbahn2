export interface Task {
  id: number
  title: string
  sortindex: number
  list: number
}

export interface TaskById {
  [id: string]: Task
}

export interface TasksById {
  byid: TaskById
}