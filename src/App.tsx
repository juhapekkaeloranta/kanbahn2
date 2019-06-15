import React, { useEffect, } from 'react'
import 'reset-css'
import { getJSON } from './fetch'
import { receiveTasks } from './store/taskReducer'
import { StoreState } from './store/store'
import { connect } from 'react-redux'
import BoardContainer from './components/BoardContainer';
import { receiveState } from './store/common';

interface AppStoreProps {
}

interface DispatchProps {
  receiveTasks: typeof receiveTasks
  receiveState: typeof receiveState
}

type Props = AppStoreProps & DispatchProps

const App = (props: Props) => {

  useEffect(() => {
    getJSON('/api/v1/state')
      .then(response => props.receiveState(response.state))
      .catch(() => undefined)
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
  receiveTasks,
  receiveState
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
