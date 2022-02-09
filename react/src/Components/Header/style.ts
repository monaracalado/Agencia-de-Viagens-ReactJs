import styled from "styled-components";

export const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 60px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div.title{
        height: 60px;
        font-size: 1rem;
        width: 50vw;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 20px;
    }
    div.list{
        width: 50vw;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        /* gap: 15px */
        padding-right: 20px;
        align-items: center;
        a{
            transition: all .3s ease-in-out;
            font-weight: bolder;
            margin: 0 7.5px;
            color: black;
            text-decoration: none !important;
            &:hover{
                transform: scale(1.07);
            }
        }
    }
`;