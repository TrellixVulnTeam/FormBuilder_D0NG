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
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-item:center;
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

  return (
    <>
      <Spinner animation="border" variant="primary" />
      <FormCard>
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
        <>{props.state.addReferences !== "No" ? createReferences(references) : ""}
          {props.references.length == 0 ? "" :
            < FormCard >
              {props.references.map(reference => <Div><li key={reference.name}><strong>Reference:   </strong>{reference.name}</li></Div>)}
            </FormCard>
          }
        </>
        : <ClipLoader size={75} loading={true} color={"#000000"} />}
      {props.state.addReferences === "Yes" ?
        < ClassicButton color="rgb(103, 227, 130)" onClick={props.addReference}>Add Member</ClassicButton>
        : ""}
    </>
  );
};

export default FormReferences;
