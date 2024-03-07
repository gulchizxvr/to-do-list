import {Dispatch, FC} from "react"
import {filterAction} from "../task/helpers/filterAction"
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit"
import {ITasks} from "../../interfaces/task.interface"
import {StyledDescriptionLabel} from "./styled/StyledDescriptionLabel"

interface IProps {
  id: number
  dispatch: ThunkDispatch<{taskReducer: ITasks}, undefined, UnknownAction> & Dispatch<UnknownAction>
  description: string
}

export const DescriptionLabel: FC<IProps> = ({id, dispatch, description}) => {
  return <StyledDescriptionLabel onClick={(): void => filterAction({id, dispatch}).editStatusTask()}>
    <div className="subtitle">Description:</div>
    <div className="description">{description}</div>
  </StyledDescriptionLabel>
}