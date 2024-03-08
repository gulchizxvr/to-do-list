import React, {FC} from "react"
import {StyledFilters} from "./styled/StyledFilters"
import {IFilters} from "../../interfaces/filters.interface"
import {taskFilters} from "../../pages/home/helpers/getFilter"

export const Filters: FC<IFilters> = ({tasks, filterConfig}) => {

  const chosenFilter = (filter: boolean | undefined): string => {
    switch (filterConfig.filter) {
      case filter : return 'active'
      default: return ''
    }
  }

  return <StyledFilters>
    {taskFilters(tasks).map((filter, index) => {
      return <div className={`filter ${chosenFilter(filter.status)}`} key={index} onClick={(): void => filterConfig.setFilter(filter.status)}>{filter.label} - {filter.count}</div>})}
  </StyledFilters>
}