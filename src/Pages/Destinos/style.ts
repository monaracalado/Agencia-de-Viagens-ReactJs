import styled from "styled-components";

export const All = styled.div<{id_hover: number | null}>`
    max-width: 100vw;
    h1.title{
        text-align: center;
        margin-top: 80px;
        padding-left: 30px;
    }
    div.image_row{
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        height: 60vh;
        max-width: 100vw;
        overflow: hidden;
        border-bottom: 2px solid #78a8ca;
        div.image_container{
            width: 20vw;
            cursor: pointer;
            transition: all .3s ease-in-out;
            z-index: ${({id_hover}) => id_hover};
            &:nth-child(${({id_hover}) => id_hover}){
                margin-left: ${({id_hover}) => id_hover !== 1 ? '-12.5vw' : '0'};
                width: 25vw;
            }
            &:hover{
                h1.destino{
                    backdrop-filter: blur(10px);
                    background-color: rgba(0, 0, 0, 0.5);
                    opacity: 1;
                    width: ${({id_hover}) => id_hover !== 1 ? '26.5vw' : '25vw'};
                }
            }
            img{
                height: 70vh;
                object-fit: contain;
            }
            h1.destino{
                color: #fff;
                text-align: center;
                transition: all .5s ease-in;
                margin-top: -40vh;
                opacity: 0;
            }
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
        width: 100vw;
        margin: auto;
        padding: 50px 40vw;
        background-attachment: fixed;
        background-size: cover;
        input{
            padding: 2.5px 5px;
            border-radius: 50px;
            border: 0;
            outline: 0;
        }
        select{
            padding: 2.5px 10px;
            border-radius: 50px;
            border: 0;
            outline: 0;
        }
        div.select_row{
            backdrop-filter: blur(10px);
            width: 40vw;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding-top: 30px;
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            main{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
        div.time_row{
            padding-top: 30px;
            backdrop-filter: blur(10px);
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            width: 40vw;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
            div{
                display: flex;
                flex-direction: column;
                justify-content:center;
                width: fit-content;
            }
        }
        div.infos_row{
            width: 40vw;
            backdrop-filter: blur(10px);
            padding: 30px 0 30px 40px;
            display: flex;
            align-items: center;
            gap: 50px;
            div{
                label{
                    margin-right: 5px;
                }
            }
        }
        input[type="submit"]{
            background-color: #3aff4d;
            outline: none;
            width: 50%;
            padding: 5px 0;
            border-radius: 15px;
            border: 1px solid black;
            margin: 15px auto;
            cursor: pointer;
            transition: all .3s ease-in-out;
            &:hover{
                background-color: #00ff01;
                color: black;
                transform: scale(1.05);
            }
        }
    }
`;