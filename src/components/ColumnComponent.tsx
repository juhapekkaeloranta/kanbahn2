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
    <div className='bordered'>
      <p>Column: {props.title}</p>
      {tasks}
    </div>
  )
}

export default ColumnComponent