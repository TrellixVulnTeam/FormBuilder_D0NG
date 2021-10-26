import styled from "styled-components"


const Circle = styled.div`
    background:white;
    background: linear-gradient(
        to right bottom,
        rgba( 255,255,255,0.8),
        rgba( 255,255,255,0.3)
    );
    height: 20rem;
    width: 20rem;
    position: absolute;
    top:${props => props.top ? props.top : "50%"};
    right: ${props => props.right ? props.right : "0%"};
    z-index: 1;
    border-radius:50%;
`


export default Circle