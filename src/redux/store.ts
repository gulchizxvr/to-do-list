import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {taskReducer} from "./slices/task.slice"

const rootReducer = combineReducers({taskReducer})

const setupStore = () : ReturnType<typeof configureStore> => configureStore({reducer: rootReducer})

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']


export type {
  RootState,
  AppStore,
  AppDispatch
}

export {setupStore}