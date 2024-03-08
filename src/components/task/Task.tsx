import {FC} from "react"
import {ITask} from "../../interfaces/task.interface"
import {useAppDispatch} from "../../hooks/redux.hooks"
import {StyledTask} from "./styled/StyledTask"
import {filterAction} from "./helpers/filterAction"
import {DescriptionLabel} from "../description_label/DescriptionLabel"
import { ReactComponent as Delete } from "../../icons/delete.svg"



export const Task: FC<ITask> = ({id, description, isComplete}) => {

  const dispatch = useAppDispatch()

  return <StyledTask isCompleted={isComplete}>

    <DescriptionLabel description={description} id={id} dispatch={dispatch}/>
    <div className="status">{isComplete ? 'Completed' : 'Not completed'}</div>
    <div className="button"  onClick={(): void => filterAction({id, dispatch}).deleteTask()}>
      <div className="icon"><Delete/></div>
    </div>
  </StyledTask>
}