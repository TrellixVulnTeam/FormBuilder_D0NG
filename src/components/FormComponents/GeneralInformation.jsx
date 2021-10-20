import { Input } from "../FormComponents/Inputs";

const GeneralInformation = (props) => {
  return (
    <div className="completeForm">
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
      <div className="buttons-box">
        <div className="submit" onClick={props.nextPage}>
          Next
        </div>
        <h1>{props.page}</h1>
      </div>
    </div>
  );
};

export default GeneralInformation;
