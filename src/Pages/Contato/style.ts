import styled from "styled-components";

export const All = styled.div`
    height: 100vh;
    width: 100%;
    padding: 10vh 10vw;
    h1{
        margin-bottom: 10vh;
    }
    main{
        input{
            background-color: #e2e2e2;
            border: none;
            outline: none;
            border-radius: 5px;
            padding: 10px;
            width: 100%;
            margin: 5px;
        }
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
        form{ 
            /* padding: 20px 30vw; */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            span{
                color: #000;
                font-size: 1.5rem;
                text-align: left;
            }
            div.name{
                width: 100%;
                input{ 
                    width: 100%;
                }
            }
            div.email_telefone{
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 10px;
            }
            textarea{
                width: 100%;
                max-width: 100%;
                height: 80%;
                min-height: 80%;
                max-height: 80%;
                background-color: #e2e2e2;
                border: none;
                outline: none;
                border-radius: 5px;
                padding: 10px;
                width: 100%;
                margin: 5px 5px 5px 15px;
                font-family: 'inter', sans-serif;
            }
            div.bnt_enviar{
                width: 50%;
                button{
                    background-color: #ccc;
                    padding: 5px 2.5px;
                    border-radius: 40px;
                    outline: none;
                    border: none;
                    color: black;
                    font-size: 1.2em;
                    width: 100%;
                    margin-top: 10px;
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
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
        }
    }
`;