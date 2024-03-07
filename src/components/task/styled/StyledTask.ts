import styled from "styled-components"

export const StyledTask = styled.div<{ isCompleted: boolean }>`
    padding: 15px;
    background-color: white;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    gap: 10px;
    
    
    .status{
        width: 200px;
        //border: 1px solid black;
        //background-color: lightgray;
        background-color: ${(props: { isCompleted: boolean }) : string => props.isCompleted ? 'green' : 'red'};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
    .icon{
        width: 50px;
        height: 50px;
        :hover {
            background-color: lightgray;
            border-radius: 5px;
        }
       
        
    }
`