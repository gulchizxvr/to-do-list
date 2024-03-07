import styled from "styled-components"

export const StyledTasksList = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .list{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        .tasks-area{
            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: center;
        }
        .title{
            width: 100%;
            font-size: 40px;
            margin-bottom: 10px;
        }
    }
    .empty-state{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        background-color: white;
        height: 60px;
        border-radius: 10px;
        font-size: 25px;
    }
`