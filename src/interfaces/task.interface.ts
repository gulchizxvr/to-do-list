
export interface ITasks {
  tasks: ITask[]
}

export interface ITask {
  id: number
  description: string
  isComplete: boolean
}

export interface ITasksList {
  tasks: ITask[]
  filter: boolean | undefined
}