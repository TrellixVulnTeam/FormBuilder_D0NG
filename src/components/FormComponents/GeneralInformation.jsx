import { Input } from "../StyledComponents/Inputs";
import { GlassButton } from "../StyledComponents/Buttons";
const GeneralInformation = (props) => {
  return (
    <>
      <Input
        title="Name of the project"
        value={props.state.projectName}
        onChange={props.change}
        name="projectName"
      ></Input>
      <Input
        title="Short Form Name"
        value={props.state.shortName}
        onChange={props.change}
        name="shortName"
      ></Input>
      <Input
        title="Long Form Name"
        value={props.state.longName}
        onChange={props.change}
        name="longName"
      ></Input>
      <Input
        title="Prepared for"
        value={props.state.preparedFor}
        onChange={props.change}
        name="preparedFor"
      ></Input>
      <Input
        title="Address Name"
        value={props.state.address}
        onChange={props.change}
        name="address"
      ></Input>
    </>
  );
};

export default GeneralInformation;
