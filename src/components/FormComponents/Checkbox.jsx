import { useState } from "react";

const CheckBox = (props) => {
  const { handleChange, valueSelect } = props;

  let title = "Team Members";
  return (
    <div style={{ margin: "none" }}>
      <p>{title}</p>
      <select
        value={valueSelect}
        onChange={handleChange}
        style={{ width: "100%" }}
      >
        <option value=""> Choose an option</option>
        <option value="option1">The contract starts on an specific day.</option>
        <option value="option2">
          The contract starts X weeks after it is signed.
        </option>
      </select>
    </div>
  );
};

export default CheckBox;
