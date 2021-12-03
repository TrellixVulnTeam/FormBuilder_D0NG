import styled from "styled-components"
import { ClassicButton } from "../StyledComponents/Buttons"

const Div = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-item:center;
  flex: ${props => props.flex ? props.flex : "none"};
  align-items:center;
`


const ButtonAddRemove = (props) => {

    const { array, booleanArray, title, changeColor } = props


    return (
        array.map((e, i) => (
            <Div key={i + title} >
                <li key={e.name}><strong>{title}: </strong>{e.name}</li>
                {booleanArray[i] === true ?
                    <Div style={{ flexDirection: "row" }}>
                        <ClassicButton key={i} width="60%" onClick={(e) => changeColor(e, i)}>Delete {title}</ClassicButton>
                        <i class="far fa-check-circle"></i>
                    </Div>
                    :
                    <ClassicButton color={true} width="60%" onClick={(e) => changeColor(e, i)}>Add {title}</ClassicButton>}
            </Div>
        ))
    )




}

export default ButtonAddRemove