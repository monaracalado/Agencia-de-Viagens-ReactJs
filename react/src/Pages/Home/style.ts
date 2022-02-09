import styled from "styled-components";

export const StyledHome = styled.div`
    width: 100vw;
    height: 70vh;
    display: grid;
    place-items: center;
    margin-top: calc(15vh - 60px);
    div.texts{
        h1{
            width: 100%;
            text-align: center;
        }
        p{
            width: 100%;
            text-align: center;
        }
    }
    div.carrousel{
        max-width: 40vw;
    }
`;