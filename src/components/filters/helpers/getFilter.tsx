import {ITask} from "../../../interfaces/task.interface"

export const taskFilters = (tasks: ITask[]): { count: number, label: string, status: undefined | boolean}[] => {
  return [
    { label: 'All', count: tasks.length, status: undefined},
    { label: 'Completed', count: tasks.filter(item => item.isComplete).length, status: true },
    { label: 'No completed', count: tasks.filter(item => !item.isComplete).length, status: false}
  ]
}

export const getFilteredTasks = (filter: boolean | undefined, tasks : ITask[]): ITask[] => {
  return tasks.filter(item => filter !== undefined ? item.isComplete === filter : item)
}