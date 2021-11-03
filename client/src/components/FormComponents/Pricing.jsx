
import { RadioButton } from "../StyledComponents/Inputs";

const Pricing = (props) => {
  return (
    <>
      <div style={{ justifyContent: "center" }}>
        <RadioButton
          title="Choose currency"
          option1="USD"
          option2="CAD"
          name="currency"
          handleChange={props.handleChange}
        ></RadioButton>
        <RadioButton
          title="Does include hosting?"
          option1="Yes"
          option2="No"
          name="hosting"
          handleChange={props.handleChange}
        ></RadioButton>
        <RadioButton
          title="Does it include taxes?"
          option1="Yes"
          option2="No"
          name="taxes"
          handleChange={props.handleChange}
        ></RadioButton>
      </div>
    </>
  );
};

export default Pricing;
