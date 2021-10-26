import logo from "./logo.svg";
import "./App.css";
import Form from "./components/AppComponents/Form";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "./components/AppComponents/Header";
import "./styles/main.css";
import Nav from "./components/AppComponents/Nav";
import { useState } from "react";
import { FormToPrint } from "./components/AppComponents/FormToPrint";
import { render } from "@testing-library/react";
import GeneralInformation from "./components/FormComponents/GeneralInformation";
import styled from "styled-components";
import Circle from "./components/StyledComponents/Circle"
import { GlassButton } from "./components/StyledComponents/Buttons";


const Main = styled.main`
    min-height: 100vh;
    background: linear-gradient(
      to right top,
      #65dfc9,
      #6cdbeb
    );
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:-6;
`

const Glass = styled.div`
  width: 70%;
  min-height: 80vh;
  background: linear-gradient(
    to right bottom,
    rgba(255,255,255,0.9),
    rgba(255,255,255,0.1)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  display:flex;
  margin:1rem;
  max-height: 100vh;
`

const Display = styled.div`
      position: relative;
      flex:2;
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:center;
      height: 100%;
`


const Title = styled.h1`
    font-size:3rem;
    opacity:0.8;
    color: rgb(26,67,204);;
    margin:1rem;

`

const Icon = styled.div`
    color: red;

`

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
      (references.length == 0) || ((references.length > 0 || references.length <= 5) &&
        references[references.length - 1]["name"] != ""
      )) {
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

  // Options for the nav bar
  const options = ["General Information", "References", "Team Members", "Contract Term", "Pricing"];

  // For handling the actual page on the interface

  const [nmbPage, setnmbPage] = useState(1);

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
    setnmbPage(nmbPage + 1);
    scrollToTop();
  };

  const backPage = () => {
    setnmbPage(nmbPage - 1)
    scrollToTop();
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
        {/* <Nav /> */}
        <Main>
          <Glass>
            <Nav options={options} setnmbPage={setnmbPage} />
            <Display>
              <Title>{options[nmbPage - 1]}</Title>
              <Icon />
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
                nmbPage={nmbPage}
                setnmbPage={setnmbPage}
              />
            </Display>
            <div style={{ position: "relative", display: "flex", position: "absolute", bottom: "3%", right: "0%", marginLeft: "10rem" }}>
              {nmbPage > 1 ? <GlassButton onClick={() => backPage()}>{">"}</GlassButton> : ""}
              <GlassButton onClick={() => nextPage()}>{">"}</GlassButton>
            </div>
          </Glass>
        </ Main>
        <Circle top="10%" right="10%" />
        <Circle top="95%" right="75%" />
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
