import { ProjectsById } from '../../src-common/entity/Project'
import { arrayToByIdObject } from '../helpers'
import { ReceiveState } from './common';

type ProjectAction = ReceiveState

export type ProjectsState = ProjectsById

const emptyState: ProjectsState = { byid: {} }

const projectReducer = (state: ProjectsState = emptyState, action: ProjectAction) => {
  switch (action.type) {

    // Common receiveState action, pick only 'projects' from it
    case 'RECEIVE-STATE':
      return {
        byid: arrayToByIdObject(action.state.projects)
      }

    default:
      return state
  }
}

export default projectReducer