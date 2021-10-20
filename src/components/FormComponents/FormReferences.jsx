import "../../styles/main.css";
import { CompleteReference } from "./CompleteReference";

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
    <div className="completeForm">
      {createReferences(references)}
      <div className="buttons-box">
        <div
          className="submit"
          style={{ backgroundColor: "rgb(103,227,130)" }}
          onClick={addReference}
        >
          Add Reference
        </div>
      </div>
      <div className="buttons-box">
        <div className="submit" onClick={backPage}>
          Back
        </div>
        <div className="submit" onClick={nextPage}>
          Next
        </div>
      </div>
    </div>
  );
};

export default FormReferences;
