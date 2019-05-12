import React from 'react';
import { connect } from 'react-redux'
import { StoreState } from '../store/store';
import BoardComponent from './BoardComponent';

interface BoardContainerOwnProps {
}

interface BoardContainerStoreProps {
  activeBoardId: string
  laneids: string[]
}

type BoardContainerProps = BoardContainerOwnProps & BoardContainerStoreProps

const BoardContainer = (props: BoardContainerProps) => {
  return (
    <BoardComponent 
      id={props.activeBoardId}
      laneids={props.laneids}
    />
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    activeBoardId: '1', //TODO
    laneids: ['1', '2'] //TODO
  }
}

const mapDispatchToProps = {
}

const ConnectedBoardContainer = connect(mapStateToProps, mapDispatchToProps)(BoardContainer)

export default (ConnectedBoardContainer)
