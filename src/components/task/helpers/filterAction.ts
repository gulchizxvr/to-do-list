import {taskActions} from "../../../redux/slices/task.slice"
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit"
import {ITasks} from "../../../interfaces/task.interface"
import {Dispatch} from "react"

export interface IFilterAction {
  id: number
  dispatch: ThunkDispatch<{taskReducer: ITasks}, undefined, UnknownAction> & Dispatch<UnknownAction>
}

export interface IReturn {
  deleteTask: () => void
  editStatusTask: () => void
}

export const filterAction = ({id, dispatch} : IFilterAction): IReturn => {
  const deleteTask = (): void => {
    dispatch(taskActions.deleteTask(id))
  }
  const editStatusTask = (): void => {
    dispatch(taskActions.editStatusTask(id))
  }

  return {deleteTask,editStatusTask}
}
