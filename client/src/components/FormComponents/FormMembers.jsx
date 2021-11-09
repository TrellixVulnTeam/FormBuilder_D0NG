import useMembers from "../../hooks/useMembers";
import { Input2, RadioButton } from "../StyledComponents/Inputs";
import styled from "styled-components"
import { FormCard } from "../AppComponents/Form";
import { ClassicButton } from "../StyledComponents/Buttons";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader"

const Div = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-item:center;
`
// const Li = styled.li`
//   margin-left:5rem;
//   align-self:flex-start;
// `

const FormMembers = (props) => {

  const { submit, members } = props;

  const [memberInput, setMemberInput, reset] = useMembers({
    name: "",
    designation: "",
    cv: "",
    skills: "",
  });

  const [loading, setLoading] = useState(false);

  const addMember = (e, member) => {
    e.preventDefault();
    submit(member);
    reset();
  };

  const createArrayNotion = (members) => {
    let array = [members]
    array = array[0]
    let array2 = array.reduce((acum, member) => [...acum, member.person], [])
    let array3 = array2.slice()
    submit(array3)
  }
  //Request to obtain Team Members from Notion DB

  useEffect(() => {
    fetch("/api/teamMembers")
      .then((res) => res.json())
      .then((data) => data.teamMembers)
      .then(data => createArrayNotion(data))
      .then(data => setLoading(true))
  }, []);

  //No poder agregar elementos si esta vacio, hacer la validacion
  return (
    <>
      <FormCard>
        <RadioButton
          title="Would you like to add Team Members?"
          option1="Yes"
          option2="No"
          name="addMembers"
          handleChange={props.change}
          check={props.state.addMembers}
        ></RadioButton>
      </FormCard>
      {props.state.addMembers !== "No" ?
        <FormCard flex={2}>
          <h1>Team Members</h1>
          <div style={{ width: "100%" }}>
            <Input2
              title="Insert Name"
              name="name"
              value={memberInput["name"]}
              onChange={setMemberInput}
            />
            <Input2
              title="Insert Designation"
              name="designation"
              value={memberInput.designation}
              onChange={setMemberInput}
            />
            <Input2
              title="Insert link of CV"
              name="cv"
              value={memberInput.cv}
              onChange={setMemberInput}
            />
            <Input2
              title="Insert Relevant Skills"
              name="skills"
              value={memberInput.skills}
              onChange={setMemberInput}
            />
          </div>
          <ClassicButton color="rgb(103, 227, 130)" onClick={(e) => addMember(e, memberInput)}>Add Member</ClassicButton>
        </FormCard>
        : ""}
      {loading ?
        <FormCard flex={1}>
          {members.map((e, i) => (
            <Div>
              <li key={e.name}><strong>Member:   </strong>{e.name}</li>
              <ClassicButton color="rgb(231, 106, 106)" onClick={() => props.delete({ i })}>Delete Member</ClassicButton>
            </Div>
          ))}
        </FormCard>
        : <ClipLoader size={75} loading={true} color={"#000000"} />}
    </>
  );
};

export default FormMembers;
