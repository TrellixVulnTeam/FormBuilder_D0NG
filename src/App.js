import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "./components/Header";
import "./styles/main.css";
import Nav from "./components/Nav";
import { useState } from "react";
import { FormToPrint } from "./components/FormToPrint";
import { render } from "@testing-library/react";
import GeneralInformation from "./components/FormComponents/GeneralInformation";

function App() {
  //Functions for the pdf printer

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  //State will handle all the general information
  // the form

  const [state, setState] = useState({
    shortName: "",
    longName: "Village of Harrison Hot Springs",
    preparedFor: "Community Services Manager",
    adress: "",
    projectName: "Website redesign",
    typeofContract: "",
    timeofContract: "",
    currency: "1",
    taxes: "",
    hosting: "",
  });

  const handleChange = (input) => (e) => {
    setState({
      ...state,
      [input]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  //This related to the part 2.5 of the form

  const [references, setReference] = useState([
    {
      id: "0",
      name: "LORETO PUEBLO MAGICO",
      page: "https://thirdrock.systems/project-loreto/",
      referenceName: "Maria Guadalupe",
      phone: "01.613.135.0036",
      email: "maria.guadalupe@loreto.gob.mx",
    },
    {
      id: "1",
      name: "LORETO",
      page: "https://thirdrock.systems/project-loreto/",
      referenceName: "Maria Guadalupe",
      phone: "01.613.135.0036",
      email: "maria.guadalupe@loreto.gob.mx",
    },
  ]);

  const handleReference = (index) => (input) => (e) => {
    // the argument of this function is an element of the array references.
    e.preventDefault();
    let newReferences = [...references];
    newReferences[parseInt(index)][input] = e.target.value;
    setReference(newReferences);
  };

  const addReference = () => {
    if (
      (references.length == 0 || references.length <= 5) &&
      references[references.length - 1]["name"] != ""
    ) {
      let array = [
        ...references,
        {
          id: "",
          name: "",
          page: "",
          referenceName: "",
          phone: "",
          email: "",
        },
      ];
      array[array.length - 1]["id"] = String(array.length - 1);
      setReference(array);
    } else {
      if (references.length > 6) alert("Max of references 6");
      else alert("Complete the reference");
    }
  };

  const deleteReference = () => (e) => {
    let array = references.filter((element) => element.id !== e.target.id);
    setReference(array);
  };

  // Array that will handle team members from the section 2.8

  const [members, setMember] = useState([]);

  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Chris",
      designation: "Project Manager",
    },
  ]);

  const submitMember = (memberInput) => {
    setMember([...members, memberInput]);
  };

  const deleteMember = (index) => {
    let array = members.filter((element, i) => index.i !== i);
    setMember(array);
  };

  return (
    <div className="container">
      <header>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <button onClick={handlePrint}>Print this out!</button>
      </header>
      <form className="main-page">
        <Header />
        <Nav />
        <main>
          <Form
            state={state}
            references={references}
            teamMembers={teamMembers}
            change={handleChange}
            handleReference={handleReference}
            deleteReference={deleteReference}
            addReference={addReference}
            members={members}
            submitMember={submitMember}
            deleteMember={deleteMember}
          />
        </main>
      </form>
      <FormToPrint
        ref={componentRef}
        values={state}
        references={references}
        members={members}
      ></FormToPrint>
    </div>
  );
}

export default App;
