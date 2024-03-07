import styled from "styled-components"

export const StyledInputTask = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    .input-area{
        max-width: 600px;
        width: 100%;
        textarea {
            width: 100%;
            height: 100px;
            display: flex;
            resize: none
        }
    }
    
    .submit-additing {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.6s ease;
        border-radius: 40px;

        svg {
            width: 40px;
            height: 40px;
            fill: black
        }

        &:hover {
            //background-color: lightgray;

            svg {
                fill: #7e7d7d;
            }
        }
    }
`