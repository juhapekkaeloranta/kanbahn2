import React from 'react'
import ColumnContainer from './ColumnContainer'
import './styles/common.css'

interface LaneOwnProps {
  title: string,
  columnids: string[]
}

type LaneProps = LaneOwnProps

const LaneComponent = ( props: LaneProps ) => {

  return (
    <div className='bordered'>
      <br/>
      <p>{props.title}</p>
      <div className="ColumnContainer">
        {props.columnids.map(columnid =>
          <ColumnContainer
            key={columnid}
            id={columnid}
          />
        )}
      </div>
    </div>
  )
}

export default LaneComponent