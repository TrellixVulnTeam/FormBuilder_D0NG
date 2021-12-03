import useMembers from "../../hooks/useMembers";
import { Input2, RadioButton } from "../StyledComponents/Inputs";
import styled from "styled-components"
import { FormCard } from "../AppComponents/Form";
import { ClassicButton } from "../StyledComponents/Buttons";
import { useEffect, useState, useCallback } from "react";
import ClipLoader from "react-spinners/ClipLoader"
import ButtonAddRemove from "./ButtonAddRemove";


const Div = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-item:center;
  flex: ${props => props.flex ? props.flex : "none"};
  align-items:center;
  transition:10s;
`
// const Li = styled.li`
//   margin-left:5rem;
//   align-self:flex-start;
// `

const FormMembers = (props) => {


  const { members, submitAllMembers } = props;

  // State for the Members form

  const [memberInput, setMemberInput, reset] = useMembers({
    name: "",
    designation: "",
    cv: "",
    skills: "",
    selected: true
  });

  const addMember = (e, member) => {
    e.preventDefault();
    submitAllMembers(member);
    reset();
  };

  //API methods
  // We do the get request from the api
  // we take the data from the api, and the we pass it to array members
  // in that array is where all the members will be store.
  // we put the array with submit()


  const createArrayNotion = (arrayMembers) => {
    if (members.length === 0) {
      let array = [arrayMembers]
      array = array[0]
      let array2 = array.reduce((acum, member) => [...acum, member.person], [])
      let array3 = array2.slice()
      array3.forEach(member => {
        member.selected = true
      })
      console.log(array3)
      // here i can add the selected
      submitAllMembers(array3)
    }
  }

  //Request to obtain Team Members from Notion DB

  useEffect(() => {
    console.log('renderizado de api');
    fetch("/api/teamMembers")
      .then((res) => res.json())
      .then((data) => data.teamMembers)
      .then(data => createArrayNotion(data))
      .then(data => setLoading(true))
  }, []);

  // This states and methods are use for create a boolean array that we will
  // use to handle the addMember and deleteMember

  // this functions gets the value of members.selected and creates an array 
  // which will be pass to the booleanArray
  const sizeofMembers = () => {
    let selectedMembers = props.members.map(member => member.selected)
    selectedMembers = [...selectedMembers, Array(6).fill(true)]
    console.log(selectedMembers)
    return selectedMembers


  }

  const [boolMembers, setArray] = useState(sizeofMembers);

  // This is an onClick function this will change the array when we add or delete a member
  // First line is to handle the Members , the second one to handle de BooleanArray of the Members
  const changeColor = (e, index) => {
    props.selectMember(index)
    setArray(boolMembers.map((element, i) => i - 1 === parseInt(index - 1) ? !element : element))
  }

  useEffect(() => {
    console.log('renderizado de array');
    console.log(boolMembers)
    console.log(members)
  }, [boolMembers])

  // while the loading is false , an icon of loading will be shown.

  const [loading, setLoading] = useState(false);

  // This is a return of the members dependending if we want to add them or not.

  const RenderingMembers = () => {
    return (
      loading ?
        <Div flex={1}>
          < FormCard flex={1} width="70%" height="none" >
            <ButtonAddRemove array={members} booleanArray={boolMembers} title="Member" changeColor={changeColor}></ButtonAddRemove>
          </FormCard >
        </Div >
        : "")
  }

  return (
    <>
      <Div flex="2">
        <FormCard height="none" width="60%" >
          <RadioButton
            title="Would you like to add Team Members?"
            option1="Yes"
            option2="No"
            name="addMembers"
            handleChange={props.change}
            check={props.state.addMembers}
          ></RadioButton>
        </FormCard >
        {props.state.addMembers !== "No" ?
          <FormCard height="none" width="60%">
            <h1>Team Members</h1>
            <div style={{ width: "100%" }}>
              <Input2
                key="name"
                title="Insert Name"
                name="name"
                value={memberInput["name"]}
                onChange={setMemberInput}
              />
              <Input2
                key="designation"
                title="Insert Designation"
                name="designation"
                value={memberInput.designation}
                onChange={setMemberInput}
              />
              <Input2
                key="cv"
                title="Insert link of CV"
                name="cv"
                value={memberInput.cv}
                onChange={setMemberInput}
              />
              <Input2
                key="skills"
                title="Insert Relevant Skills"
                name="skills"
                value={memberInput.skills}
                onChange={setMemberInput}
              />
            </div>
            <ClassicButton color={true} width="60%" onClick={(e) => addMember(e, memberInput)}>Add new Member</ClassicButton>
          </FormCard>
          : ""}
      </Div>
      {RenderingMembers()}

    </>
  );
};

export default FormMembers;
