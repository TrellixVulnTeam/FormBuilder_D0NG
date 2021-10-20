import useMembers from "../../hooks/useMembers";
import { Input2 } from "./Inputs";

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

  return (
    <div>
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
      <div className="buttons-box">
        <button onClick={addMember}>SI</button>
        <div className="submit" onClick={backPage}>
          Back
        </div>
        <div className="submit" onClick={nextPage}>
          Next
        </div>
      </div>
      {members.map((e, i) => (
        <div>
          <li>{`${e.name} ---- ${e.position}`}</li>
          <div onClick={() => props.delete({ i })}>Delete Member</div>
        </div>
      ))}
    </div>
  );
};

export default FormMembers;
