import React, {FC} from "react"
import {getFilteredTasks} from "../../pages/home/helpers/getFilter"
import {Task} from "../task/Task"
import {ITasksList} from "../../interfaces/task.interface"
import {StyledTasksList} from "./styled/StyledTasksList"

export const TasksList: FC<ITasksList> = ({tasks, filter}) => {

  const TasksList = getFilteredTasks(filter, tasks).map(task => <Task key={task.id} id={task.id} description={task.description} isComplete={task.isComplete}/>)

  return <StyledTasksList>
    {TasksList.length ?
      <div className='list'>
        <div className='title'>My list:</div>
        <div className="tasks-area">{TasksList}</div>
      </div>
      :
      <div className="empty-state">Nothing yet</div>}
  </StyledTasksList>
}