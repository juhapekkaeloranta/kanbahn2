import React from 'react'
import './styles/common.css';

interface TaskComponentOwnProps {
  id: number
  text: string
}

type TaskComponentProps = TaskComponentOwnProps

const TaskComponent = (props: TaskComponentProps) => {
  return (
    <div className='task taskStyling'>
      <p>{props.text}</p>
    </div>
  )
}

export default TaskComponent