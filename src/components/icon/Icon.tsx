import {FC} from "react"
import { ReactComponent as Delete } from "../../icons/deleteIcon.svg"
import {StyledIcon} from "./styled/StyledIcon"

export const Icon: FC = () => {

  const getIcon = () : any => {
    return <Delete/>
  }

  return <StyledIcon>{getIcon()}</StyledIcon>
}