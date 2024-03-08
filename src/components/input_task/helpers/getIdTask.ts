import {useState} from "react"

export const getIdTask = (): {id: number, increaseCount: () => void} => {
  const [id, setId] = useState(1)
  const increaseCount = () : void => setId(id+1 )
  return {id, increaseCount}
}
