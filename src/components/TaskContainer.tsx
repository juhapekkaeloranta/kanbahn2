import React from 'react'
import TaskComponent from './TaskComponent';
import { connect } from 'react-redux';
import { StoreState } from '../store/store';

interface TaskContainerOwnProps {
  id: number
}

interface TaskContainerStoreProps {
  text: string
}
type TaskContainerProps = TaskContainerOwnProps & TaskContainerStoreProps

const TaskContainer = (props: TaskContainerProps) => {
  return (
    <TaskComponent
      key={props.id}
      id={props.id}
      text={props.text} //TODO: text from store
    />
  )
}

const mapStateToProps = (state: StoreState, ownProps: TaskContainerOwnProps) => {
  return {
    text: state.tasks.byid[ownProps.id] ? state.tasks.byid[ownProps.id].title : ""
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)