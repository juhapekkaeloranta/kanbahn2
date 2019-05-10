import { Dispatch } from 'redux'
import { postJSON, deleteJSON, patchJSON } from '../fetch'
import { Omit, assoc, dissoc, append } from 'ramda'
import { Task } from '../../src-common/entity/Task'
import { arrayToByIdObject, moveItemUp, moveItemDown } from '../helpers'
import assocPath from 'ramda/es/assocPath';
import { logger_info, logger_error } from '../loggers';

interface TasksById {
  [key: string]: Task
}

interface StateByKeys {
  byid: TasksById,
  orderOfTasks: number[]
}

interface ReceiveTasks {
  type: 'RECEIVE-TASKS'
  tasks: Task[]
}

interface AddTask {
  type: 'ADD-TASK'
  task: Task
}

interface DeleteTask {
  type: 'DELETE-TASK',
  taskid: number
}

interface MoveUp {
  type: 'MOVE-UP',
  taskid: number
}

interface MoveDown {
  type: 'MOVE-DOWN',
  taskid: number
}

interface ChangeStatus {
  type: 'CHANGE-STATUS',
  taskid: number,
  newStatus: string
}

type TaskAction = ReceiveTasks | AddTask | DeleteTask | MoveUp | MoveDown | ChangeStatus

export type TasksState = StateByKeys

const emptyState: TasksState = { byid: {}, orderOfTasks: [] }

const taskReducer = (state: TasksState = emptyState, action: TaskAction) => {
  switch (action.type) {

    case 'RECEIVE-TASKS':
      const orderArray = action.tasks
        .map(task => task.id)

      const taskWithoutSortindex: Omit<Task, 'sortindex'>[] = action.tasks
          .map(task => dissoc('sortindex', task))

      console.log('receive-tasks', action.tasks, orderArray)
      return {
        byid: arrayToByIdObject(taskWithoutSortindex),
        orderOfTasks: orderArray
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