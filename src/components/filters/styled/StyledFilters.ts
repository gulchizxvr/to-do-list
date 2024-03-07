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
        border: 1px solid black;
        background-color: azure;
        padding: 20px;
        transition: background-color 0.6s ease;
        border-radius: 10px;

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