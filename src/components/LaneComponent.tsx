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
    <div className='bordered'>
      <br/>
      <p>{props.title}</p>
      <div className="ColumnContainer">
        {columns}
      </div>
    </div>
  )
}

export default LaneComponent