import styled from "styled-components"

export const StyledTask = styled.div<{ isCompleted: boolean }>`
    padding: 15px;
    background-color: white;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    gap: 10px;
    transition: box-shadow 0.4s ease;
    font-family: "Arial",serif ;
;

    &:hover {
        box-shadow: 0 0 10px grey;
    }

    .status {
        width: 200px;
        background-color: ${(props: { isCompleted: boolean }): string => props.isCompleted ? '#19B201FF' : 'red'};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        color: white;
        font-weight: 600;
    }

    .button {
        width: 50px;
        height: 50px;

        :hover {
            background-color: lightgray;
            border-radius: 5px;
        }
        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 10px;

            svg {
                width: 40px;
                height: 40px;
            }
        }
    }
`