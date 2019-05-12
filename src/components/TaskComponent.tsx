import React from 'react'
import './styles/common.css';

interface TaskComponentOwnProps {
  id: string
  text: string
}

type TaskComponentProps = TaskComponentOwnProps

const TaskComponent = (props: TaskComponentProps) => {
  return (
    <div className='bordered'>
      <p>Task: {props.text}</p>
    </div>
  )
}

export default TaskComponent