import React from 'react';
import LaneContainer from './LaneContainer';

interface BoardComponentOwnProps {
  id: string
  laneids: string[]
}

type BoardComponentProps = BoardComponentOwnProps

const BoardComponent = (props: BoardComponentProps) => {
  return (
    <div>
      <p>This is a Board called: {props.id}</p>
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
