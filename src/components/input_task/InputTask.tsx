import React, {FC, useState} from "react"
import {useAppDispatch} from "../../hooks/redux.hooks"
import {taskActions} from "../../redux/slices/task.slice"
import {getIdTask} from "./helpers/getIdTask"
import {StyledInputTask} from "./styled/StyledInputTask"
import { ReactComponent as Add } from "../../icons/plus.svg"
import {charactersLimit} from "./helpers/charactersLimit"


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
      <textarea placeholder={'Enter description'} value={taskDescription} onChange={(e : React.ChangeEvent<HTMLTextAreaElement>): void => {
        setTaskDescription(e.target.value)
      }}/>


      <div className="submit-additing" onClick={(): void => {addTask()}}>
        {charactersLimit(taskDescription) && <Add/>}
      </div>

    </div>
    <div className="tips">Available characters: {100 - taskDescription.length}/100</div>
  </StyledInputTask>
}