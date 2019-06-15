import React from 'react';
import LaneContainer from './LaneContainer';

interface BoardComponentOwnProps {
  id: number
  name: string
  laneids: number[]
}

type BoardComponentProps = BoardComponentOwnProps

const BoardComponent = (props: BoardComponentProps) => {
  return (
    <div>
      <p>This is a Board called: {props.name}</p>
      {props.laneids.map(laneid =>
        <LaneContainer
          key={laneid}
          id={laneid}
        />
      )}
    </div>
  )
}

export default BoardComponent
