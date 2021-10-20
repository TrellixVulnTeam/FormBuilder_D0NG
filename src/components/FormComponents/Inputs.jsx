import "../../styles/main.css";

export const Input = (props) => {
  const { title, value, onChange } = props;

  return (
    <div className="inputBox">
      <h2>{title}</h2>
      <input value={value} onChange={onChange(props.name)}></input>
    </div>
  );
};

export const InputReference = (props) => {
  return (
    <div className="inputBox">
      <h2>{props.title}</h2>
      <input
        value={props.value}
        onChange={props.onChange(props.id)(props.name)}
      ></input>
    </div>
  );
};

export const Input2 = (props) => {
  const { title, value, name, onChange } = props;

  return (
    <div className="inputBox">
      <h2>{title}</h2>
      <input name={name} value={value} onChange={onChange}></input>
    </div>
  );
};

export const RadioButton = (props) => {
  console.log(props.handleChange);

  return (
    <div>
      <p>
        <strong>{props.title}</strong>
      </p>
      <div style={radioButton} onClick={props.handleChange(props.name)}>
        <div>
          <p>{props.option1}</p>{" "}
          <input
            style={{ width: "20px" }}
            type="radio"
            name={props.name}
            value="0"
          />
        </div>
        <div>
          <p>{props.option2}</p>{" "}
          <input
            style={{ width: "20px" }}
            type="radio"
            name={props.name}
            value="1"
          />
        </div>
      </div>
    </div>
  );
};

const radioButton = {
  marginTop: "3px",
  marginBottom: "3pm",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
