import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux'
import thunk from 'redux-thunk'
import uiReducer, { UiState } from './uiReducer'
import taskReducer, { TasksState } from './taskReducer'
import columnReducer, { ColumnsState } from './columnReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import laneReducer, { LanesState } from './laneReducer';

export interface StoreState {
  lanes: LanesState,
  columns: ColumnsState
  tasks: TasksState
  ui: UiState
}

const rootReducer: Reducer<StoreState> = combineReducers({
  lanes: laneReducer,
  columns: columnReducer,
  tasks: taskReducer,
  ui: uiReducer
})

export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)