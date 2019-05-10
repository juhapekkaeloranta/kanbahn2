import React from 'react'
import { Task } from '../../src-common/entity/Task';
import { StoreState } from '../store/store';
import { connect } from 'react-redux';
import './styles/TaskContainer.css';

interface TaskContainerOwnProps {
  taskid: number
}

interface TaskContainerDispatchProps {
}

interface TaskContainerStoreProps {
  task: Task
}

type TaskContainerProps =
  TaskContainerOwnProps &
  TaskContainerDispatchProps &
  TaskContainerStoreProps

const TaskContainer = (props: TaskContainerProps) => {

  const task = props.task

  return (
    <div className={`todo-standard-box TaskContainer`}>
      <div className='row-group'>
      </div>

      <div className={`column-group growing`}>
        <p>{task.title}</p>
      </div>

    </div>
  )
}

const mapStateToProps = (state: StoreState, ownProps: TaskContainerOwnProps) => {
  return {
    task: state.tasks.byid[ownProps.taskid]
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)