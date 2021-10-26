import { useState, setState } from "react";
import { Input, Input2, InputReference } from "../StyledComponents/Inputs";
import React from "react";
import { CompleteReference } from "../FormComponents/CompleteReference";
import FormMembers from "../FormComponents/FormMembers";
import FormReferences from "../FormComponents/FormReferences";
import ContractTerm from "../FormComponents/ContractTerm";
import GeneralInformation from "../FormComponents/GeneralInformation";
import Pricing from "../FormComponents/Pricing";
import styled from "styled-components";
import { GlassButton } from "../StyledComponents/Buttons"

export const FormCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background: linear-gradient(
      to left top,
      rgba(255,255,255,0.8),
      rgba(255,255,255,0.2)
    );
    border-radius: 1rem;
    margin:2rem;
    padding:2rem;
    box-shadow: 6px 6px 20px rgba(122,122,122,0.4);
    width:60%;
    height:100%;
    align-items:center;
    flex:${props => props.flex ? props.flex : ""};
`

const Form = (props) => {

  // This function will submit the members to the component App

  const [members, setMember] = useState([]);

  const submitMember = (memberInput) => {
    setMember([...members, memberInput]);
  };

  switch (props.nmbPage) {
    case 1:
      return (
        <>
          <FormCard>
            <GeneralInformation
              state={props.state}
              change={props.change}
            ></GeneralInformation>
          </FormCard>
        </>
      );
    case 2:
      return (
        <>
          <FormReferences
            references={props.references}
            addReference={props.addReference}
            handleReference={props.handleReference}
            deleteReference={props.deleteReference}
          ></FormReferences>
        </>
      );
    case 3:
      return (
        <>
          <FormMembers
            submit={props.submitMember}
            members={props.members}
            delete={props.deleteMember}
          ></FormMembers>
        </>
      );
    case 4:
      return (
        <>
          <FormCard>
            <ContractTerm
              handleForm={props.change}
              state={props.state}
            ></ContractTerm>
          </FormCard>
        </>
      );
    case 5:
      return (
        <>
          <FormCard>
            <Pricing
              state={props.state}
              handleChange={props.change}
            ></Pricing>
          </FormCard>
        </>
      );
  }
};

export default Form;
