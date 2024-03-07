import {ITask} from "./task.interface"
import React from "react"

export interface IFilters {
  filterConfig:{
    filter: boolean | undefined
    setFilter: React.Dispatch<React.SetStateAction<boolean | undefined>>
  }
  tasks: ITask[]
}