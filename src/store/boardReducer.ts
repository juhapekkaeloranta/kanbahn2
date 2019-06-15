import { BoardsById } from '../../src-common/entity/Board'
import { arrayToByIdObject } from '../helpers'
import { ReceiveState } from './common';

type BoardAction = ReceiveState

export type BoardsState = BoardsById

const emptyState: BoardsState = { byid: {} }

const boardReducer = (state: BoardsState = emptyState, action: BoardAction) => {
  switch (action.type) {

    // Common receiveState action, pick only 'boards' from it
    case 'RECEIVE-STATE':
      return {
        byid: arrayToByIdObject(action.state.boards)
      }

    default:
      return state
  }
}

export default boardReducer