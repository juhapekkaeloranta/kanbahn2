import React from 'react';
import { connect } from 'react-redux';
import LaneComponent from './LaneComponent';
import { StoreState } from '../store/store';

interface LaneContainerOwnProps {
  id: string
}

interface LaneContainerStoreProps {
  columnids: string[]
}

type LaneContainerProps = LaneContainerOwnProps & LaneContainerStoreProps

const LaneContainer = (props: LaneContainerProps) => {
  return (
    <LaneComponent
      title={"Feature-" + props.id}//TODO: get lane title from store
      columnids={props.columnids}
    />
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    columnids: ['todo', 'in progress', 'done'] //TODO
  }
}

const mapDispatchToProps = {
}

const ConnectedLaneContainer = connect(mapStateToProps, mapDispatchToProps)(LaneContainer)

export default ConnectedLaneContainer