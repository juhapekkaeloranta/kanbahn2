import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux'
import thunk from 'redux-thunk'
import uiReducer, { UiState } from './uiReducer'
import taskReducer, { TasksState } from './taskReducer'
import columnReducer, { ColumnsState } from './columnReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import laneReducer, { LanesState } from './laneReducer';
import boardReducer, { BoardsState } from './boardReducer';
import projectReducer, { ProjectsState } from './projectReducer';

export interface StoreState {
  projects: ProjectsState,
  boards: BoardsState,
  lanes: LanesState,
  columns: ColumnsState
  tasks: TasksState
  ui: UiState
}

const rootReducer: Reducer<StoreState> = combineReducers({
  projects: projectReducer,
  boards: boardReducer,
  lanes: laneReducer,
  columns: columnReducer,
  tasks: taskReducer,
  ui: uiReducer
})

export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)