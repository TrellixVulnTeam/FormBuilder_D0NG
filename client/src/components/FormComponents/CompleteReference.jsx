import { InputReference } from "../StyledComponents/Inputs";
import { ClassicButton } from "../StyledComponents/Buttons";
import { FormCard } from "../AppComponents/Form";

export const CompleteReference = (props) => {
  return (
    <FormCard flex={2} key={props.references.id}>
      <InputReference
        title="Name of Reference"
        value={props.references["name"]}
        onChange={props.handleReference}
        id={props.references["id"]}
        name="name"
        key={props.references["id"] + "name"}
      ></InputReference>
      <InputReference
        title="Page of the reference"
        value={props.references["page"]}
        onChange={props.handleReference}
        id={props.references["id"]}
        name="page"
        key={props.references["id"] + "page"}
      ></InputReference>
      <InputReference
        title="Name of person"
        value={props.references["referenceName"]}
        id={props.references["id"]}
        onChange={props.handleReference}
        name="referenceName"
        key={props.references["id"] + "referenceName"}
      ></InputReference>
      <InputReference
        title="Email Reference"
        value={props.references["email"]}
        id={props.references["id"]}
        onChange={props.handleReference}
        name="email"
        key={props.references["id"] + "email"}
      ></InputReference>
      <InputReference
        title="Phone Reference"
        value={props.references["phone"]}
        id={props.references["id"]}
        onChange={props.handleReference}
        name="phone"
        key={props.references["id"] + "phone"}
      ></InputReference>
      <ClassicButton color="rgb(231, 106, 106)"
        onClick={props.deleteReference()}
        id={props.index}
        key={props.references["id"] + "button"}
      >Delete Reference
      </ClassicButton>
    </FormCard>
  );
};
