import React from 'react';
import { connect } from 'react-redux';
import LaneComponent from './LaneComponent';
import { StoreState } from '../store/store';

interface LaneContainerOwnProps {
  id: number
}

interface LaneContainerStoreProps {
  name: string
  columnids: number[]
}

type LaneContainerProps = LaneContainerOwnProps & LaneContainerStoreProps

const LaneContainer = (props: LaneContainerProps) => {
  console.log('lane', props)
  return (
    <LaneComponent
      title={"Feature: " + props.name}
      columnids={props.columnids}
    />
  )
}

const mapStateToProps = (state: StoreState, ownProps: LaneContainerOwnProps) => {
  return {
    name: state.lanes.byid[ownProps.id] ? state.lanes.byid[ownProps.id].name : "",
    columnids: Object.values(state.columns.byid)
      .filter(column => column.lane === ownProps.id)
      .map(column => column.id)
  }
}

const mapDispatchToProps = {
}

const ConnectedLaneContainer = connect(mapStateToProps, mapDispatchToProps)(LaneContainer)

export default ConnectedLaneContainer