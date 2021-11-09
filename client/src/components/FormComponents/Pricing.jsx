
import { RadioButton } from "../StyledComponents/Inputs";
import { FormCard } from "../AppComponents/Form";
import { Button2 } from "../StyledComponents/Buttons";

const Pricing = (props) => {
  return (
    <>
      <FormCard>
        <RadioButton
          title="Should the pricing be included as a separate document?"
          option1="Yes"
          option2="No"
          name="addPricing"
          handleChange={props.handleChange}
          check={props.state.addPricing}
        ></RadioButton>
      </FormCard>
      {props.state.addPricing === "Yes" ?
        <FormCard>
          <Button2 title="Select the size of the project " />
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
        </FormCard>
        : ""}
    </>
  );
};

export default Pricing;
