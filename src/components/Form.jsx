import { useState, setState } from "react";
import { Input, Input2, InputReference } from "./FormComponents/Inputs";
import MyImage from "../images/image_example.jpg";
import React from "react";
import { CompleteReference } from "./FormComponents/CompleteReference";
import FormMembers from "./FormComponents/FormMembers";
import FormReferences from "./FormComponents/FormReferences";
import ContractTerm from "./FormComponents/ContractTerm";
import GeneralInformation from "./FormComponents/GeneralInformation";
import Pricing from "./FormComponents/Pricing";

const Form = (props) => {

  // This component will handle the interface of the app


  const [state, setStates] = useState({
    page: 1,
  });

  const nextPage = () => {
    setStates({ page: state.page + 1 });
  };

  const backPage = () => {
    setStates({ page: state.page - 1 });
  };


  // This function will submit the members to the component App

  const [members, setMember] = useState([]);

  const submitMember = (memberInput) => {
    setMember([...members, memberInput]);
  };

  switch (state.page) {
    case 1:
      return (
        <GeneralInformation
          state={props.state}
          nextPage={nextPage}
          change={props.change}
          page={state.page}
        ></GeneralInformation>
      );
    case 2:
      return (
        <FormReferences
          references={props.references}
          addReference={props.addReference}
          backPage={backPage}
          nextPage={nextPage}
          handleReference={props.handleReference}
          deleteReference={props.deleteReference}
        ></FormReferences>
      );
    case 3:
      return (
        <div className="completeForm">
          <FormMembers
            submit={props.submitMember}
            backPage={backPage}
            nextPage={nextPage}
            members={props.members}
            delete={props.deleteMember}
          ></FormMembers>
        </div>
      );
    case 4:
      return (
        <ContractTerm
          nextPage={nextPage}
          backPage={backPage}
          handleForm={props.change}
          state={props.state}
        ></ContractTerm>
      );
    case 5:
      return (
        <Pricing
          nextPage={nextPage}
          backPage={backPage}
          state={props.state}
          handleChange={props.change}
        ></Pricing>
      );
  }
};

export default Form;
