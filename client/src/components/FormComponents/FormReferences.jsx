import { useEffect, useState } from "react";
import { CompleteReference } from "./CompleteReference";
import { ClassicButton } from "../StyledComponents/Buttons";
import { FormCard } from "../AppComponents/Form";
import { RadioButton } from "../StyledComponents/Inputs";
import styled from "styled-components";
import React from "react";
import Spinner from 'react-bootstrap/Spinner'
import ClipLoader from "react-spinners/ClipLoader";

const Div = styled.div`
  width:${props => props.width ? props.width : "100%"};
  display: flex; 
  flex-direction: column;
  align-items:center;
`
const FormReferences = (props) => {
  const { references } = props;

  //using an api to call a loading icon
  const [loading, setLoading] = useState(false);

  // to pass the info from the api to an array
  const createArrayNotion = (members) => {
    let array = [members]
    array = array[0]
    let array2 = array.reduce((acum, member) => [...acum, member.person], [])
    let array3 = array2.slice()
    addId(array3)
    props.setReference(array3)
  }
  console.log(props.loading)


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

  const clip = <ClipLoader size={75} loading={true} color={"#000000"} />

  const charging = props.references.length === 0 ? "" :
    props.references.map((reference, index) =>
      <>
        <Div key={index}>
          <li key={reference.name}><strong key={reference.name}>Reference</strong></li>
          <p>{reference.name}</p>
          <ClassicButton color="red">+</ClassicButton>
        </Div >
      </>)

  return (
    <><Div>
      <FormCard height="none" width="60%">
        <RadioButton
          title="Would you like to add References"
          option1="Yes"
          option2="No"
          name="addReferences"
          handleChange={props.change}
          check={props.state.addReferences}
        ></RadioButton>
      </FormCard>
      {props.loading ?
        <Div width="60%">{props.state.addReferences !== "No"
          ? createReferences(references) : ""} </Div>
        : <ClipLoader size={75} loading={true} color={"#000000"} />}
    </Div>
      {props.state.addReferences === "Yes" ?
        <>
          <FormCard height="none" width="40%">{charging}
            < ClassicButton color="rgb(103, 227, 130)" width="100%" onClick={props.addReference}>Add Member</ClassicButton>
          </FormCard>
        </> : ""}


    </>
  );
};

export default FormReferences;
