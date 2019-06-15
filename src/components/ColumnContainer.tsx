import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../store/store';
import ColumnComponent from './ColumnComponent';
import { Task } from '../../src-common/entity/Task';

interface ColumnContainerOwnProps {
  id: number
}

interface ColumnContainerStoreProps {
  name: string
  taskids: number[]
}

type ColumnContainerProps = ColumnContainerOwnProps & ColumnContainerStoreProps

const ColumnContainer = (props: ColumnContainerProps) => {
  return (
    <ColumnComponent
      key={props.id}
      id={props.id}
      title={props.name}
      taskids={props.taskids}
    />
  )
}

const mapStateToProps = (state: StoreState, ownProps: ColumnContainerOwnProps) => {
  const tasks: Array<Task> = Object.values(state.tasks.byid)
  return {
    name: state.columns.byid[ownProps.id] ? state.columns.byid[ownProps.id].name : "",
    taskids: tasks
      .filter(task => task.list === ownProps.id)
      .sort((a, b) => a.sortindex - b.sortindex)
      .map(task => task.id)
  }
}

const mapDispatchToProps = {}

const connectedColumnContainer = connect(mapStateToProps, mapDispatchToProps)(ColumnContainer)

export default connectedColumnContainer