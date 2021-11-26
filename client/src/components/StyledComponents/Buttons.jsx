import { Children } from "react"
import styled from "styled-components"
export const GlassButton = (props) => {

    return (
        <Button onClick={() => props.onClick()}>
            {props.children}
        </Button>
    )
}

const SizeContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-items:center;
    width:70%;
    height:100%;
    border-radius:2rem;

    &:hover{
        .selectButton{
            background:black
        }
    }
`

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
}
`

export const Button2 = (props) => {
    return (
        <Div>
            <h2>{props.title}</h2>
            <SizeContainer>
                <ClassicButton color="#61dafb">S</ClassicButton>
                <ClassicButton color="#61dafb">M</ClassicButton>
                <ClassicButton color="#61dafb">L</ClassicButton>
            </SizeContainer>

        </Div >
    )
}
const Button = styled.div`
    height: 50px;
    width: 50px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.55);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color:#000000;
    font-size: 2rem;
    font-weigth: 600;
    letter-spacing: 1px;
    overflow: hidden;
    transition: 0.5s;
    z-index: 1;
    cursor: pointer;
    background: linear-gradient(to left bottom, #2bd2ff, transparent);
        
        &:hover{
        letter-spacing: 3px;
        background: linear-gradient(to right top, #2bd2ff, transparent);
        color: rgb(26, 67, 204);
        font-size: 2.5rem;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);

    }
`


export const ClassicButton = styled.div`
    background: ${props => props.color === true ? "rgb(103, 227, 130)" : "rgb(231, 106, 106)"};
    border-radius: 4px;
    font-size: 14pxrem;
    font-weight: 800;
    width: ${props => props.width ? props.width : "35%"};
    margin: 20px;
    padding: 0.4em;
    box-shadow: none;
    border: none;
    margin: 20px;
    font-family: inherit;
    align-self: center;
    cursor:pointer;
    &:hover{
        background:#ffffff;

    }
    &:focus-within{
        background:#ffffff;
    }


`