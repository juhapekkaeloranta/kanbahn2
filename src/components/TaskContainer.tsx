import React from 'react'
import TaskComponent from './TaskComponent';
import { connect } from 'react-redux';
import { StoreState } from '../store/store';

interface TaskContainerOwnProps {
  id: string
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
      text={props.id} //TODO: text from store
    />
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    text: ''//TODO
  }
}

const mapDispatchToProps = {
}

const connectedTaskContainer = connect(mapStateToProps, mapDispatchToProps)(TaskContainer)

export default connectedTaskContainer