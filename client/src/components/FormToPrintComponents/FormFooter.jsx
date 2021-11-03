import "../../styles/form.css";

const FormFooter = (props) => {
  return (
    <footer className="form-footer">
      <div>
        <h3>{props.name.toUpperCase()}</h3>
      </div>
    </footer>
  );
};

export default FormFooter;
