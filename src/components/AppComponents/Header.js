import "../../styles/main.css";
import Logo from "../../images/LogoThirdRock.svg";
import styled from "styled-components"

const Title = styled.div`
  padding-left: 2.5%;
  padding-top: 0.5%;
`
const H1 = styled.h1`color: rgb(26, 67, 204);`
const H3 = styled.h3`color: rgb(26, 67, 204);`

const Header = () => {
  return (
    <header style={{ zIndex: "5" }}>
      <Title className="title">
        <H1>Form Builder</H1>
        <H3>Thirdrock Systems</H3>
      </Title>
      <img src={Logo} style={{ zIndex: "5" }} className="Login"></img>
    </header>
  );
};

export default Header;
