import { useEffect, useState } from "react";
import { CompleteReference } from "./CompleteReference";
import { ClassicButton } from "../StyledComponents/Buttons";
import { FormCard } from "../AppComponents/Form";
import { RadioButton } from "../StyledComponents/Inputs";
import styled from "styled-components";
import React from "react";
import Spinner from 'react-bootstrap/Spinner'
import ClipLoader from "react-spinners/ClipLoader";
import ButtonAddRemove from "./ButtonAddRemove";

const Div = styled.div`
  width:${props => props.width ? props.width : "100%"};
  display: flex; 
  flex-direction: ${props => props.direction ? props.direction : "row"};
  align-items:center;
  justify-content:center;
  transition: 2s;
`
const FormReferences = (props) => {
  const { references } = props;

  //using an api to call a loading icon
  const [loading, setLoading] = useState(false);
  const [booleanMembers, setBooleanMembers] = useState(Array(10).fill(true))

  // to pass the info from the api to an array
  const createArrayNotion = (members) => {
    let array = [members]
    array = array[0]
    let array2 = array.reduce((acum, member) => [...acum, member.person], [])
    let array3 = array2.slice()
    array3.forEach(reference => {
      reference.selected = true
    })
    props.setReference(array3)
  }


  const addId = array => {
    array.forEach((e, i) => { e.id = String(i) })
  }
  //getting the data from the db

  useEffect(() => {
    if (props.loading === false) {
      fetch("/api/references")
        .then((res) => res.json())
        .then((data) => data.references)
        .then(data => createArrayNotion(data))
        .then(data => props.setLoading(true))
    }
  }, []);

  const createReferences = (references) => {
    return references.map((element, i) => (
      <CompleteReference
        references={element}
        handleReference={props.handleReference}
        deleteReference={props.deleteReference}
        index={i}
      />
    ));
  };

  // To show the references in case we want to add more.

  const changeColor = (e, index) => {
    // Here we keep the array in the same way but we change the selected option.
    props.setReference(references.map((el, i) => (i === index) ? { ...el, selected: !el.selected } : el))
    setBooleanMembers(booleanMembers.map((element, i) => i - 1 === parseInt(index - 1) ? !element : element))
    console.log(references)
  }

  const RenderReferences = () => {

    const booleanArray = Array(10).fill(false)

    return (
      props.state.addReferences === "Yes" ?
        <>
          <FormCard height="none" width="40%">
            <ButtonAddRemove array={references} booleanArray={booleanMembers} title="Reference" changeColor={changeColor}></ButtonAddRemove>
            < ClassicButton color={true} width="50%" onClick={props.addReference}>Add new Reference</ClassicButton>
          </FormCard>
        </> : ""
    )
  }



  const charging = () => (props.references.length === 0 ? "" : props.references.map((reference, index) =>
    <Div key={index} direction="column-reverse">
      <li key={reference.name}><strong key={reference.name}>Reference</strong></li>
      <p>{reference.name}</p>
      <ClassicButton color="red">+</ClassicButton>
    </Div>))

  return (
    <>
      <Div direction={"row"}>
        <div style={{ display: "flex", flexDirecton: "column-reverse", flexWrap: "wrap", maxHeight: "100%", alignItems: "center", justifyContent: "center" }}>
          <FormCard height="none" width="60%">
            <RadioButton
              title="Would you like to add References?"
              option1="Yes"
              option2="No"
              name="addReferences"
              handleChange={props.change}
              check={props.state.addReferences}
            ></RadioButton>
          </FormCard>
          {props.loading ?
            <Div direction={"column-reverse"} width="60%">{props.state.addReferences !== "No"
              ? createReferences(references) : ""} </Div>
            : <ClipLoader size={75} loading={true} color={"#000000"} />}
        </div>
        {RenderReferences()}
      </Div>



    </>
  );
};

export default FormReferences;
