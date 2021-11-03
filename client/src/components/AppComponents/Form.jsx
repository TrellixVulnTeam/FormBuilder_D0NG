
import { RadioButton } from "../StyledComponents/Inputs";
import React from "react";
import FormMembers from "../FormComponents/FormMembers";
import FormReferences from "../FormComponents/FormReferences";
import ContractTerm from "../FormComponents/ContractTerm";
import GeneralInformation from "../FormComponents/GeneralInformation";
import Pricing from "../FormComponents/Pricing";
import styled from "styled-components";

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
        <div style={{
          overflowY: "scroll", maxHeight: "75vh", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
          <FormCard>
            <RadioButton
              title="Would you like to add References"
              option1="Yes"
              option2="No"
              name="addReferences"
              handleChange={props.change}
            ></RadioButton>
          </FormCard>
          {props.state.addReferences !== "No" ?
            <FormReferences
              references={props.references}
              addReference={props.addReference}
              handleReference={props.handleReference}
              deleteReference={props.deleteReference}
            ></FormReferences> : ""
          }</div>
      );
    case 3:
      return (
        <div style={{
          overflowY: "scroll", maxHeight: "75vh", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
          <FormMembers
            state={props.state}
            submit={props.submitMember}
            members={props.members}
            delete={props.deleteMember}
            change={props.change}
          ></FormMembers>
        </div>
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
