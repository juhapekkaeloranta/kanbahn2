import React from 'react'
import './styles/common.css'

interface ColumnComponentOwnProps {
  children: any //List of TaskContainers
  id: number
  title: string
}

type ColumnComponentProps = ColumnComponentOwnProps

const ColumnComponent = (props: ColumnComponentProps) => {
  const tasks = props.children
  return (
    <div className='column columnStyling bordered hide-border'>
      <div className='columnHeader'>
        <p>{props.title}</p>
      </div>
      <div className="taskContainerWrapper">
        {tasks}
      </div>
    </div>
  )
}

export default ColumnComponent