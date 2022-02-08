import styled from "styled-components";

export const FooterStyle = styled.footer`
    width: calc(100vw - 15px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    div{
        font-size: 3rem;
        width: 10vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &{
            cursor: pointer;
        }
    }
    p{ 

    }
`;