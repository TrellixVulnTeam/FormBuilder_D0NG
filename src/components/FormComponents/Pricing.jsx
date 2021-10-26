import { useState } from "react";
import { RadioButton } from "../StyledComponents/Inputs";

const Pricing = (props) => {
  return (
    <div>
      <div
        className="completeForm"
        style={{
          background: " linear-gradient(to left top,#ebebeb,rgba(54,161,255))",
          display: "flex",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <div style={{ justifyContent: "center" }}>
          <div
            className="completeForm"
            style={{ margin: "5px 0px 0px -30px", width: "100%" }}
          >
            <RadioButton
              title="Choose currency"
              option1="USD"
              option2="CAD"
              name="currency"
              handleChange={props.handleChange}
            ></RadioButton>
          </div>
          <div
            className="completeForm"
            style={{ margin: "5px 0px 0px -30px", width: "100%" }}
          >
            <RadioButton
              title="Does include hosting?"
              option1="Yes"
              option2="No"
              name="hosting"
              handleChange={props.handleChange}
            ></RadioButton>
          </div>
          <div
            className="completeForm"
            style={{ margin: "5px 0px 0px -30px", width: "100%" }}
          >
            <RadioButton
              title="Does it include taxes?"
              option1="Yes"
              option2="No"
              name="taxes"
              handleChange={props.handleChange}
            ></RadioButton>
          </div>
        </div>
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

export default Pricing;
