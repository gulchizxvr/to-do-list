import {taskActions} from "../../../redux/slices/task.slice"
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit"
import {ITasks} from "../../../interfaces/task.interface"
import {Dispatch} from "react"

interface IProps {
  id: number
  dispatch: ThunkDispatch<{taskReducer: ITasks}, undefined, UnknownAction> & Dispatch<UnknownAction>
}

interface IFilerAction {
  deleteTask: () => void
  editStatusTask: () => void
}

export const filterAction = ({id, dispatch} : IProps): IFilerAction => {
  const deleteTask = (): void => {
    dispatch(taskActions.deleteTask(id))
  }
  const editStatusTask = (): void => {
    dispatch(taskActions.editStatusTask(id))
  }

  return {deleteTask,editStatusTask}
}
