import "../../styles/main.css";
import styled from "styled-components";


export const StyledInput = styled.div`
  position:relative;
  width:100%;
 h2{
  font-size: 1.2em;
  color: black;
  border: 0;
  font-weight: bold;
  margin-bottom: 0.76em;
  padding-top: 0.75em;
 }
 input{
    width:100%;
    height:4vh;
    border-radius: 2rem;
    background: linear-gradient(
      to right bottom,
      rgba(255,255,255,1),
      rgba(255,255,255,0.9)
    );
    border: none;
    font-size: 14px;
    font-family: inherit;
    font-weight: 600;
    box-shadow: 6px 6px 20px rgba(122,122,122,0.2);
    padding-left:1rem;
  }
 }
`

export const Input = (props) => {
  const { title, value, onChange } = props;

  return (
    <StyledInput>
      <h2>{title}</h2>
      <input value={value} onChange={onChange(props.name)}></input>
    </StyledInput>
  );
};

export const InputReference = (props) => {
  return (
    <StyledInput>
      <h2>{props.title}</h2>
      <input
        value={props.value}
        onChange={props.onChange(props.id)(props.name)}
      ></input>
    </StyledInput>
  );
};

export const Input2 = (props) => {
  const { title, value, name, onChange } = props;

  return (
    <StyledInput>
      <h2>{title}</h2>
      <input name={name} value={value} onChange={onChange}></input>
    </StyledInput>
  );
};

export const RadioButton = (props) => {

  return (
    <div>
      <p><strong>{props.title}</strong></p>
      <div style={radioButton} onClick={props.handleChange(props.name)}>
        <div>
          <p>{props.option1}</p>{" "}
          <input
            style={{ width: "20px" }}
            type="radio"
            name={props.name}
            value={props.option1}
          />
        </div>
        <div>
          <p>{props.option2}</p>{" "}
          <input
            style={{ width: "20px" }}
            type="radio"
            name={props.name}
            value={props.option2}
          />
        </div>
      </div>
    </div>
  );
};

const radioButton = {
  marginTop: "3px",
  marginBottom: "3pm",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

