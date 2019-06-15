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
      {lanes}
    </div>
  )
}

export default BoardComponent
