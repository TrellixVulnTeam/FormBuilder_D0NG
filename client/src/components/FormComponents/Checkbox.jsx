import styled from "styled-components";

const Select = styled.select`
    width:100%;
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


`



const CheckBox = (props) => {

  const { handleChange, valueSelect } = props;

  return (
    <div style={{ margin: "none" }}>
      <Select
        value={valueSelect}
        onChange={handleChange}
        style={{ width: "100%" }}
      >
        <option value=""> Choose an option</option>
        <option value="option1">The contract starts on an specific day.</option>
        <option value="option2">
          The contract starts X weeks after it is signed.
        </option>
      </Select>
    </div>
  );
};

export default CheckBox;
