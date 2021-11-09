import styled from "styled-components";
import { useRef, useEffect } from "react"

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

      &.onClick{
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

  const Refs = useRef([]);

  // To change the selected li on the nav
  //First we deselect the prevState and then select the new one

  const handle = (index) => e => {

    const prev = Refs.current[props.nmbPage - 1]
    let className = prev.className.split("onClick")
    prev.className = className[0]
    props.setnmbPage(index)
    const next = Refs.current[index - 1]
    next.className += " onClick"
  }

  // Custom hook to get the previous value

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevValue = usePrevious(props.nmbPage);


  // Function very similar to handle here this useEffect with use it when we change of page with the arrow.

  useEffect(() => {

    if (typeof (Refs.current[prevValue - 1]) !== 'undefined') {
      const prev = Refs.current[prevValue - 1]
      let className = prev.className.split("onClick")
      prev.className = className[0]
    }
    const next = Refs.current[props.nmbPage - 1]
    next.className += " onClick"
  }, [props.nmbPage])

  return (
    <NavBar>
      <div style={{ display: "flex" }}>
        <H2 color={"true"}>Form</H2><H2>Builder</H2>
      </div>
      <ul>
        {props.options.map((e, i) => <Li onClick={handle(i + 1)} key={i} ref={el => Refs.current[i] = el}>{e}</Li>)}
      </ul>
    </NavBar>
  );
};

export default Nav;
