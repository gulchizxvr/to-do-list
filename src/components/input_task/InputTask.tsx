import {FC, useState} from "react"
import {useAppDispatch} from "../../hooks/redux.hooks"
import {taskActions} from "../../redux/slices/task.slice"
import {getIdTask} from "./helper/getIdTask"
import {StyledInputTask} from "./styled/StyledInputTask"
import { ReactComponent as Add } from "../../icons/plus.svg"
import {charactersLimit} from "./helper/charactersLimit"


export const InputTask: FC = () => {

  const {id, increaseCount} = getIdTask()

  const [taskDescription, setTaskDescription] = useState<string>('')

  const dispatch = useAppDispatch()

  const addTask = (): void => {
    if (!charactersLimit(taskDescription)) return
    dispatch(taskActions.addTask({id,description: taskDescription ,isComplete: false }))
    increaseCount()
    setTaskDescription('')
  }

  return <StyledInputTask>
    <div className="input-area">
      {/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */}
      <textarea placeholder={'Enter description'} value={taskDescription} onChange={e => {
        setTaskDescription(e.target.value)
      }}/>
      <div>Available characters: {100 - taskDescription.length}/100</div>
    </div>

    {charactersLimit(taskDescription) && <div className="submit-additing" onClick={(): void => {addTask()}}><Add/></div>}
  </StyledInputTask>
}