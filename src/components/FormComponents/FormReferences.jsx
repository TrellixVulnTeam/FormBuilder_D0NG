// import "../../styles/main.css";
import { CompleteReference } from "./CompleteReference";
import { ClassicButton } from "../StyledComponents/Buttons";

const FormReferences = (props) => {
  const { references, addReference, backPage, nextPage } = props;

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
    <div style={{
      overflowY: "scroll", maxHeight: "75vh", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
    }}>
      {createReferences(references)}
      <ClassicButton
        color="rgb(103, 227, 130)"
        onClick={props.addReference}
      >
        Add Member</ClassicButton>
    </div >
  );
};

export default FormReferences;
