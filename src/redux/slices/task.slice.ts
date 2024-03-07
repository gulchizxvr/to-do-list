import {createSlice} from "@reduxjs/toolkit"
import {ITasks} from "../../interfaces/task.interface"

const initialState : ITasks = {
  tasks: []
}

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(item => item.id !== action.payload)
    },
    editStatusTask: (state, action) => {
      const editedTask = state.tasks.find(item => item.id === action.payload)
      if(editedTask) { editedTask.isComplete = !editedTask.isComplete}
    }

  }})

const {reducer: taskReducer, actions: {addTask, deleteTask, editStatusTask}} = taskSlice

const taskActions = {
  addTask,
  deleteTask,
  editStatusTask,
}

export {
  taskReducer, taskActions
}