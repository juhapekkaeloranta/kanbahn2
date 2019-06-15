import { logger_info } from '../loggers';
import { Tables } from '../../src-common/entity/Combined';

export interface ReceiveState {
  type: 'RECEIVE-STATE'
  state: Tables
}

// Fetch all tables (tasks, columns, lanes, boards, etc) in one request
// 'RECEIVE-STATE' action will be caught be each reducer
// which will pick the table relavant for them
export const receiveState = (tables: Tables): ReceiveState => {
  logger_info('received state:', tables)
  return {
    type: 'RECEIVE-STATE',
    state: tables
  }
}