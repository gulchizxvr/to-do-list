export const charactersLimit = (taskDescription : string): boolean => {
  return taskDescription.length > 0 && taskDescription.length < 100
}