// import "../../styles/main.css";
import { CompleteReference } from "./CompleteReference";
import { ClassicButton } from "../StyledComponents/Buttons";

const FormReferences = (props) => {
  const { references } = props;

  const createReferences = (references) => {
    return references.map((element, i) => (
      <CompleteReference
        references={element}
        handleReference={props.handleReference}
        deleteReference={props.deleteReference}
      />
    ));
  };

  return (
    <>
      {createReferences(references)}
      <ClassicButton
        color="rgb(103, 227, 130)"
        onClick={props.addReference}
      >
        Add Member</ClassicButton>
    </>
  );
};

export default FormReferences;
