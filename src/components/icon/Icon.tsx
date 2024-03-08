import {FC, ReactElement} from "react"
import { ReactComponent as Delete } from "../../icons/delete.svg"
import {StyledIcon} from "./styled/StyledIcon"

export const Icon: FC = () => {

  const getIcon = (): ReactElement => {
    return <Delete/>
  }

  return <StyledIcon>{getIcon()}</StyledIcon>
}