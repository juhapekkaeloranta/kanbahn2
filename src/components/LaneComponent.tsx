import React from 'react'
import './styles/common.css'

interface LaneOwnProps {
  children: any, //List of ColumnContainers
  title: string,
}

type LaneProps = LaneOwnProps

const LaneComponent = ( props: LaneProps ) => {
  const columns = props.children
  return (
    <div className='lane laneStyling bordered hide-border'>
      <div className="laneHeader">
        <p>{props.title}</p>
      </div>
      <div className="columnContainerWrapper">
        {columns}
      </div>
    </div>
  )
}

export default LaneComponent