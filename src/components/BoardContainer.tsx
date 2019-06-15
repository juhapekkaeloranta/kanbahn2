import React from 'react';
import { connect } from 'react-redux'
import { StoreState } from '../store/store';
import BoardComponent from './BoardComponent';

interface BoardContainerOwnProps {
}

interface BoardContainerStoreProps {
  activeBoardId: number
  name: string
  laneids: number[]
}

type BoardContainerProps = BoardContainerOwnProps & BoardContainerStoreProps

const BoardContainer = (props: BoardContainerProps) => {
  return (
    <BoardComponent 
      id={props.activeBoardId}
      name={props.name}
      laneids={props.laneids}
    />
  )
}

const mapStateToProps = (state: StoreState) => {
  const lanes = Object.values(state.lanes.byid)
  console.log(lanes)
  const activeBoard = state.ui.activeBoard
  return {
    activeBoardId: activeBoard,
    name: state.boards.byid[activeBoard] ? state.boards.byid[activeBoard].name : "",
    laneids: lanes
      .filter(lane => lane.board === activeBoard)
      .map(lane => lane.id)
  }
}

const mapDispatchToProps = {
}

const ConnectedBoardContainer = connect(mapStateToProps, mapDispatchToProps)(BoardContainer)

export default (ConnectedBoardContainer)
