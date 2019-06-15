import React from 'react';
import { connect } from 'react-redux';
import LaneComponent from './LaneComponent';
import { StoreState } from '../store/store';
import ColumnContainer from './ColumnContainer';

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
    >
      {props.columnids.map(columnid =>
        <ColumnContainer
          key={columnid}
          id={columnid}
        />
      )}
    </LaneComponent>
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

export default connect(mapStateToProps, mapDispatchToProps)(LaneContainer)