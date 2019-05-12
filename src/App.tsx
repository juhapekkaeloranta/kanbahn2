import React, { useEffect, } from 'react'
import 'reset-css'
import { getJSON } from './fetch'
import { receiveTasks } from './store/taskReducer'
import { StoreState } from './store/store'
import { connect } from 'react-redux'
import BoardContainer from './components/BoardContainer';

interface AppStoreProps {
}

interface DispatchProps {
  receiveTasks: typeof receiveTasks
}

type Props = AppStoreProps & DispatchProps

const App = (props: Props) => {

  useEffect(() => {
    getJSON('/api/v1/tasks').then(response => props.receiveTasks(response.tasks)).catch(() => undefined)
  }, [])

  return (
    <div>
      <p>Kanbahn-app</p>
      <BoardContainer/>
    </div> 
  )
}

const mapStateToProps = (state: StoreState) => {
  return {}
}

const mapDispatchToProps = {
  receiveTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
