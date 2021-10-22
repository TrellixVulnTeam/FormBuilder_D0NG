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
import styled from "styled-components";
import { GlassButton } from "./FormComponents/GlassButton"

const FormCard = styled.div`
    display:flex;
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
`

const Form = (props) => {

  // This component will handle the interface of the app



  const [state, setStates] = useState({
    page: 1,
  });
  // to scroll up when the next buttom or back are clicked.

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };


  const nextPage = () => {
    setStates({ page: state.page + 1 });
    console.log("hola")
    scrollToTop();
  };

  const backPage = () => {
    setStates({ page: state.page - 1 });
    scrollToTop();
  };


  // This function will submit the members to the component App

  const [members, setMember] = useState([]);

  const submitMember = (memberInput) => {
    setMember([...members, memberInput]);
  };

  switch (state.page) {
    case 1:
      return (
        <>
          <FormCard>
            <GeneralInformation
              state={props.state}
              nextPage={nextPage}
              change={props.change}
              page={state.page}
            ></GeneralInformation>
          </FormCard>
          <div style={{ position: "relative", display: "flex", position: "absolute", bottom: "3%", right: "0%", marginLeft: "10rem" }}>
            <GlassButton onClick={() => nextPage()}>{">"}</GlassButton>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <FormReferences
            references={props.references}
            addReference={props.addReference}
            backPage={backPage}
            nextPage={nextPage}
            handleReference={props.handleReference}
            deleteReference={props.deleteReference}
          ></FormReferences>
          <div style={{ position: "relative", display: "flex", position: "absolute", bottom: "3%", right: "0%", marginLeft: "10rem" }}>
            <GlassButton onClick={() => backPage()}>{"<"}</GlassButton>
            <GlassButton onClick={() => nextPage()}>{">"}</GlassButton>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <FormCard>
            <FormMembers
              submit={props.submitMember}
              backPage={backPage}
              nextPage={nextPage}
              members={props.members}
              delete={props.deleteMember}
            ></FormMembers>
          </FormCard>
          <div style={{ position: "relative", display: "flex", position: "absolute", bottom: "3%", right: "0%", marginLeft: "10rem" }}>
            <GlassButton onClick={() => backPage()}>{"<"}</GlassButton>
            <GlassButton onClick={() => nextPage()}>{">"}</GlassButton>
          </div>
        </>
      );
    case 4:
      return (
        <>
          <FormCard>
            <ContractTerm
              nextPage={nextPage}
              backPage={backPage}
              handleForm={props.change}
              state={props.state}
            ></ContractTerm>
          </FormCard>
          <div style={{ position: "relative", display: "flex", position: "absolute", bottom: "3%", right: "0%", marginLeft: "10rem" }}>
            <GlassButton onClick={() => backPage()}>{"<"}</GlassButton>
            <GlassButton onClick={() => nextPage()}>{">"}</GlassButton>
          </div>
        </>
      );
    case 5:
      return (
        <>
          <FormCard>
            <Pricing
              nextPage={nextPage}
              backPage={backPage}
              state={props.state}
              handleChange={props.change}
            ></Pricing>
          </FormCard>
          <div style={{ position: "relative", display: "flex", position: "absolute", bottom: "3%", right: "0%", marginLeft: "10rem" }}>
            <GlassButton onClick={() => backPage()}>{"<"}</GlassButton>
            <GlassButton onClick={() => nextPage()}>{">"}</GlassButton>
          </div>
        </>
      );
  }
};

export default Form;
