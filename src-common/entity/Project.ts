export interface Project {
  id: number
  name: string
}

export interface ProjectById {
  [id: string]: Project
}

export interface ProjectsById {
  byid: ProjectById
}