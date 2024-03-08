import React, {FC} from "react"
import {getFilteredTasks} from "../filters/helpers/getFilter"
import {Task} from "../task/Task"
import {ITasksList} from "../../interfaces/task.interface"
import {StyledTasksList} from "./styled/StyledTasksList"


export const TasksList: FC<ITasksList> = ({tasks, filter}) => {

  const tasksList = getFilteredTasks(filter, tasks).map(task => <Task key={task.id} id={task.id} description={task.description} isComplete={task.isComplete}/>)

  return <StyledTasksList>
    {tasksList.length ?
      <div className='list'>
        <div className='title'>My list:</div>
        <div className="tasks-area">{tasksList}</div>
      </div>
      :
      <div className="empty-state">Nothing yet</div>}
  </StyledTasksList>
}