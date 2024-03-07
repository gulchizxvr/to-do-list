import styled from "styled-components"

export const StyledDescriptionLabel = styled.div`
    flex: 1;
    width: 200px;
    cursor: pointer;
    align-items: center;
    .subtitle{
        color: grey;
        font-size: 13px;
    }
    .description{
        margin-top: 5px;
        font-size: 20px;
        flex-wrap: wrap;
        max-width: 100%;
        overflow-wrap: anywhere;
    }
`