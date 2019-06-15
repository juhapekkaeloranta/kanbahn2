import React from 'react'
import TaskContainer from './TaskContainer';
import './styles/common.css'

interface ColumnComponentOwnProps {
  id: number
  title: string
  taskids: number[]
}

type ColumnComponentProps = ColumnComponentOwnProps

const ColumnComponent = (props: ColumnComponentProps) => {
  return (
    <div className='bordered'>
      <p>Column: {props.title}</p>
      {props.taskids.map(taskid => 
        <TaskContainer
          key={taskid}
          id={taskid}
        />
      )}
    </div>
  )
}

export default ColumnComponent