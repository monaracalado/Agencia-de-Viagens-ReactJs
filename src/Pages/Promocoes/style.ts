import styled from 'styled-components';

export const All = styled.div`
    width: calc(100vw - 15px);
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1.title{
        margin-top: 10vh;
        margin-bottom: 5vh;
    }
    div{ 
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        div.card{
            width: 20vw;
            height: fit-content;
            display: flex;
            flex-direction: column;
            background-color: rgba(225, 225, 225, .2);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(225, 225, 225, .7);
            border-radius: 10px;
            div.img_box{
                width: 100%;
                max-width: 20vw;
                height: 170px;
                img{
                    border-radius: 10px 10px 0 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            div.texts{
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                gap: 15px;
                font-size: 1rem;
                h1.text{
                    margin: 15px 0;
                    font-size: 1rem;
                }
            }
            button{
                background-color: transparent;
                outline: none;
                width: 50%;
                padding: 5px 0;
                border-radius: 15px;
                border: 1px solid black;
                margin: 15px auto;
                cursor: pointer;
                transition: all .3s ease-in-out;
                &:hover{
                    background-color: black;
                    color: #fff;
                    transform: scale(1.05);
                }
            }
        }
    }
`;