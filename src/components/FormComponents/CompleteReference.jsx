import { InputReference } from "./Inputs";
import { useState } from "react";

export const CompleteReference = (props) => {
  return (
    <div>
      <InputReference
        title="Name of Reference"
        value={props.references["name"]}
        onChange={props.handleReference}
        id={props.references["id"]}
        name="name"
      ></InputReference>
      <InputReference
        title="Page of the reference"
        value={props.references["page"]}
        onChange={props.handleReference}
        id={props.references["id"]}
        name="page"
      ></InputReference>
      <InputReference
        title="Name of person"
        value={props.references["referenceName"]}
        id={props.references["id"]}
        onChange={props.handleReference}
        name="referenceName"
      ></InputReference>
      <InputReference
        title="Email Reference"
        value={props.references["email"]}
        id={props.references["id"]}
        onChange={props.handleReference}
        name="email"
      ></InputReference>
      <InputReference
        title="Phone Reference"
        value={props.references["phone"]}
        id={props.references["id"]}
        onChange={props.handleReference}
        name="phone"
      ></InputReference>

      <div className="buttons-box">
        <div
          className="submit"
          id={props.references["id"]}
          onClick={props.deleteReference()}
        >
          Delete Reference
        </div>
      </div>
    </div>
  );
};
