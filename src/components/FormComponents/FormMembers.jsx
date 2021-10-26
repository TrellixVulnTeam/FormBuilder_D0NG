import useMembers from "../../hooks/useMembers";
import { Input2 } from "../StyledComponents/Inputs";
import styled from "styled-components"
import Form, { FormCard } from "../AppComponents/Form";
import { ClassicButton } from "../StyledComponents/Buttons";


const ButtonAddMember = styled.button`
    background:rgb(103,227,130);
    border-radius:4px;
    font-size:14pxrem;
    font-weight:800;
    width:35%;
    margin:20px;
    padding:0.4em;
    box-shadow:none;
    border:none;
    margin:20px;
    font-family:inherit;
`



const FormMembers = (props) => {
  const { submit, nextPage, backPage, members } = props;

  const [memberInput, setMemberInput, reset] = useMembers({
    name: "",
    position: "",
    cv: "",
    skills: "",
  });

  const addMember = (e) => {
    e.preventDefault();
    submit(memberInput);
    reset();
  };


  //No poder agregar elementos si esta vacio, hacer la validacion

  return (
    <div style={{ display: "flex", width: "90%" }}>
      <FormCard flex={2}>
        <h1>Team Members</h1>
        <div>
          <Input2
            title="Insert Name"
            name="name"
            value={memberInput["name"]}
            onChange={setMemberInput}
          />
          <Input2
            title="Insert Position"
            name="position"
            value={memberInput.position}
            onChange={setMemberInput}
            name="position"
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
        <ClassicButton color="rgb(103, 227, 130)" onClick={addMember}>Add Member</ClassicButton>
      </FormCard>
      {members.length > 0 ?
        <FormCard flex={1}>
          {members.map((e, i) => (
            <div>
              <li>{`${e.name} ---- ${e.position}`}</li>
              <div onClick={() => props.delete({ i })}>Delete Member</div>
            </div>
          ))}
        </FormCard>
        : ""}
    </div>
  );
};

export default FormMembers;
