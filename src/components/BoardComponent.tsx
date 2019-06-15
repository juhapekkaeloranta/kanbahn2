import React from 'react';

interface BoardComponentOwnProps {
  children: any //List of LaneContainers
  id: number
  name: string
}

type BoardComponentProps = BoardComponentOwnProps

const BoardComponent = (props: BoardComponentProps) => {
  const lanes = props.children
  return (
    <div>
      <p>This is a Board called: {props.name}</p>
      {lanes}
    </div>
  )
}

export default BoardComponent
