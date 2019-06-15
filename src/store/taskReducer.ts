import { Task, TasksById } from '../../src-common/entity/Task'
import { arrayToByIdObject } from '../helpers'
import { logger_info } from '../loggers';
import { ReceiveState } from './common';

interface ReceiveTasks {
  type: 'RECEIVE-TASKS'
  tasks: Task[]
}

type TaskAction = ReceiveTasks | ReceiveState

export type TasksState = TasksById

const emptyState: TasksState = { byid: {} }

const taskReducer = (state: TasksState = emptyState, action: TaskAction) => {
  switch (action.type) {

    case 'RECEIVE-TASKS':
      return {
        byid: arrayToByIdObject(action.tasks)
      }

    // Common receiveState action, pick only 'tasks' from it
    case 'RECEIVE-STATE':
      return {
        byid: arrayToByIdObject(action.state.tasks)
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