import React, {FC, useState} from "react"
import { useAppSelector} from "../../hooks/redux.hooks"
import {StyledHomePage} from "./styled/StyledHomePage"
import {InputTask} from "../../components/input_task/InputTask"
import {Filters} from "../../components/filters/Filters"
import {TasksList} from "../../components/tasks_list/TasksList"

export const HomePage: FC = () => {

  const {tasks} = useAppSelector(state => state.taskReducer)

  const [filter, setFilter] = useState<boolean | undefined>(undefined)

  return <StyledHomePage>
    <h1>To Do List</h1>

    <InputTask/>

    <Filters tasks={tasks} filterConfig={{filter, setFilter}} />

    <TasksList tasks={tasks} filter={filter}/>

  </StyledHomePage>
}

