import { Task, TasksById } from '../../src-common/entity/Task'
import { arrayToByIdObject } from '../helpers'
import { logger_info } from '../loggers';

interface ReceiveTasks {
  type: 'RECEIVE-TASKS'
  tasks: Task[]
}

type TaskAction = ReceiveTasks

export type TasksState = TasksById

const emptyState: TasksState = { byid: {} }

const taskReducer = (state: TasksState = emptyState, action: TaskAction) => {
  switch (action.type) {

    case 'RECEIVE-TASKS':
      return {
        byid: arrayToByIdObject(action.tasks)
      }

    default:
      return state
  }
}

export const receiveTasks = (tasks: Task[]): ReceiveTasks => {
  logger_info('received:', tasks)
  return {
    type: 'RECEIVE-TASKS',
    tasks
  }
}

export default taskReducer