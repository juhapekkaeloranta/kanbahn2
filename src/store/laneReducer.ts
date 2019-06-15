import { LanesById } from '../../src-common/entity/Lane'
import { arrayToByIdObject } from '../helpers'
import { ReceiveState } from './common';

type LaneAction = ReceiveState

export type LanesState = LanesById

const emptyState: LanesState = { byid: {} }

const laneReducer = (state: LanesState = emptyState, action: LaneAction) => {
  switch (action.type) {

    // Common receiveState action, pick only 'lanes' from it
    case 'RECEIVE-STATE':
      return {
        byid: arrayToByIdObject(action.state.lanes)
      }

    default:
      return state
  }
}

export default laneReducer