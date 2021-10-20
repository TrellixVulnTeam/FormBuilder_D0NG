import CheckBox from "./Checkbox";
import { useState } from "react";
import { Input } from "../FormComponents/Inputs";

const ContractTerm = (props) => {
  const [valueSelect, setValueSelect] = useState("");

  const handleChange = (e) => {
    setValueSelect(e.target.value);
    props.handleForm("typeofContract")(e);
  };
  return (
    <div>
      <div className="completeForm">
        <h1> Contract Term</h1>
        <p>Choose the type of contract</p>
        <br></br>
        <CheckBox
          title="Write the specific date"
          handleChange={handleChange}
          valueSelect={valueSelect}
        ></CheckBox>
        <br></br>
        {valueSelect == "option2" ? (
          <Input
            title="Write the specific date (The way you write it will be shown)"
            value={props.state.timeofContract}
            onChange={props.handleForm}
            name="timeofContract"
          ></Input>
        ) : valueSelect == "option1" ? (
          <Input
            title="Write the value of x weeks"
            value={props.state.timeofContract}
            onChange={props.handleForm}
            name="timeofContract"
          ></Input>
        ) : (
          ""
        )}
        <div className="buttons-box">
          <div className="submit" onClick={props.backPage}>
            Back
          </div>
          <div className="submit" onClick={props.nextPage}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractTerm;
