import styled from "styled-components"

export const StyledFilters = styled.div`
    display: flex;
    gap: 20px;
    margin: 10px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    .filter{
        flex: 1;
        box-shadow: 0 0 2px black;
        padding: 20px;
        transition: background-color 0.6s ease;
        border-radius: 10px;
        font-size: 20px;

        &.active {
            background-color: black;
            color: white;
        }
        &:not(.active):hover{
            background-color: grey;
            color: white;
        }
        }
`