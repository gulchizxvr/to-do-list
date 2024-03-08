import styled from "styled-components"

export const StyledInputTask = styled.div`
    display: flex;
    gap: 6px;
    flex-direction: column;
    margin-bottom: 30px;

    .input-area {
        max-width: 600px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;

        textarea {
            width: 100%;
            height: 100px;
            display: flex;
            resize: none;
            font-size: 20px;
            padding: 5px;
            box-sizing: border-box;

        }
    }
    .tips {
        margin-left: 4px;
        font-size: 13px;
        color: #3a3939;
    }

    .submit-additing {
        width: 45px;
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
            svg {
                fill: #7e7d7d;
            }
        }
    }
`