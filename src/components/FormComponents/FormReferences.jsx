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
    <div style={{
      overflowY: "scroll", maxHeight: "75vh", width: "100%"
    }}>
      {createReferences(references)}
      < div className="buttons-box" >
        <div
          className="submit"
          style={{ backgroundColor: "rgb(103,227,130)" }}
          onClick={addReference}
        >
          Add Reference
        </div>
      </div >
    </div >
  );
};

export default FormReferences;
