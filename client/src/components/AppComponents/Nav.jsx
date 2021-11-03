import styled from "styled-components";

const NavBar = styled.div`
    width: 50%;
    flex: 1;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
    text-content: center;
    background: linear-gradient(
    to right bottom,
    rgba(255,255,255,0.7),
    rgba(255,255,255,0.3));
    border-radius:2rem;
    margin:0.5rem;
    margin-left:0.75rem;
    box-shadow: 6px 6px 20px rgba(122,122,122,0.4)
`

const Li = styled.li`
      list-style:none;
      padding:1.5rem;
      font-size:1.2rem;
      font-weight:600;
      border-radius:2rem;
      transition: 0.35s ease;
      cursor:pointer;

      &:hover{
        color:rgb(26,67,204);
        opacity:0.9;
        background-color:#ffffff;
        box-shadow: 6px 6px 20px rgba(122,122,122,0.4)
      }
`
const H2 = styled.h2`
      font-weigth: 600;
      font-size:2rem;
      padding-right:0.3rem;
      opacity:0.9;
      color: ${props => props.color ? "rgb(26, 67, 204)" : "black"};
`
const Nav = (props) => {


  const handlenmbPage = (i) => {
    console.log(i);
    props.setnmbPage(i);
  }

  return (
    <NavBar>
      <div style={{ display: "flex" }}>
        <H2 color={"true"}>Form</H2><H2>Builder</H2>
      </div>
      <ul>
        {props.options.map((e, i) => <Li onClick={() => handlenmbPage(i + 1)} key={i}>{e}</Li>)}
      </ul>
    </NavBar >
  );
};

export default Nav;
