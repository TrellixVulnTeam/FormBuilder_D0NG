import { RadioButton } from "../StyledComponents/Inputs";
import React from "react";
import FormMembers from "../FormComponents/FormMembers";
import FormReferences from "../FormComponents/FormReferences";
import ContractTerm from "../FormComponents/ContractTerm";
import GeneralInformation from "../FormComponents/GeneralInformation";
import Pricing from "../FormComponents/Pricing";
import styled from "styled-components";
import { useState, useEffect } from "react";


const ScrollBar = styled.div`
    display: flex;
    overflow-y: scroll;
    width: 100%;
    overflow-x: hidden;

    &::-webkit-scrollbar{
      width:1em;
    }
    &::-webkit-scrollbar-track{
      background: linear-gradient(
        to right bottom,
        rgba(255,255,255,0.9),
        rgba(255,255,255,0.1)
      );
       margin-block: .5em
     } 

    &::-webkit-scrollbar-thumb{
      background: linear-gradient(
        to right bottom,
        rgba(26,67,204,0.9),
        rgba(26,67,255,0.5)
      );
       border-radius: 2rem;
     }

    }
`



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
    width:${props => props.width ? props.width : "100%"};
    height:${props => props.height ? props.height : "100%"};
    align-items:center;
    flex:${props => props.flex ? props.flex : ""};
    min-width: 400px
`

const Form = (props) => {


  // This function will submit the members to the component App
  switch (props.nmbPage) {
    case 1:
      return (
        <>
          <FormCard width="60%">
            <GeneralInformation
              state={props.state}
              change={props.change}
            ></GeneralInformation>
          </FormCard>
        </>
      );
    case 2:
      return (
        <div className="hola" style={{
          overflowY: "scroll", minHeight: "65vh", maxHeight: "75vh", width: "100%", display: "flex"
        }}>
          <FormReferences
            references={props.references}
            setReference={props.setReference}
            addReference={props.addReference}
            handleReference={props.handleReference}
            deleteReference={props.deleteReference}
            state={props.state}
            change={props.change}
            setLoading={props.setLoading}
            loading={props.loading}
          ></FormReferences>
        </div>
      );
    case 3:
      return (
        <ScrollBar>
          <FormMembers
            state={props.state}
            submitAllMembers={props.submitAllMembers}
            selectMember={props.selectMember}
            members={props.members}
            delete={props.deleteMember}
            change={props.change}
            setLoading={props.setLoading}
          ></FormMembers>
        </ScrollBar>
      );
    case 4:
      return (
        <>
          <FormCard width="60%">
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
          <Pricing
            state={props.state}
            handleChange={props.change}
          ></Pricing>
        </>
      );
    case 6:
      return (
        <h1></h1>
      )
  }
};

export default Form;
