import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../store/store';
import ColumnComponent from './ColumnComponent';

interface ColumnContainerOwnProps {
  id: string
}

interface ColumnContainerStoreProps {
  title: string
  taskids: string[]
}

type ColumnContainerProps = ColumnContainerOwnProps & ColumnContainerStoreProps

const ColumnContainer = (props: ColumnContainerProps) => {
  return (
    <ColumnComponent
      key={props.id}
      id={props.id}
      title={props.id} //TODO replace with value from store
      taskids={['1', '2']} //TODO replace with value from store
    />
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    title: 'todo', //TODO
    taskids: ['1', '2'] //TODO
  }
}

const mapDispatchToProps = {}

const connectedColumnContainer = connect(mapStateToProps, mapDispatchToProps)(ColumnContainer)

export default connectedColumnContainer