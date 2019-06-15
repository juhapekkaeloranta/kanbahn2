import { Column, ColumnsById } from '../../src-common/entity/Column'
import { arrayToByIdObject } from '../helpers'
import { logger_info } from '../loggers';
import { ReceiveState } from './common';

type ColumnAction = ReceiveState

export type ColumnsState = ColumnsById

const emptyState: ColumnsState = { byid: {} }

const columnReducer = (state: ColumnsState = emptyState, action: ColumnAction) => {
  switch (action.type) {

    // Common receiveState action, pick only 'columns' from it
    case 'RECEIVE-STATE':
      return {
        byid: arrayToByIdObject(action.state.columns)
      }

    default:
      return state
  }
}

export default columnReducer