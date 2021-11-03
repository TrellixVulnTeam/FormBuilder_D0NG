import Logo from "../../images/LogoThirdRock.svg";
import styled from "styled-components"

const Title = styled.div`
  padding-left: 2.5%;
  padding-top: 0.5%;
`

const Head = styled.header`
  display:flex;
  justify-content: space-between;
  z-index:5;
`

const Image = styled.img`
  max-width: 300px;
  max-height: 300px;
  padding-right: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
  z-index:5;
`
const H1 = styled.h1`color: rgb(26, 67, 204);`
const H3 = styled.h3`color: rgb(26, 67, 204);`


const Header = () => {
  return (
    <Head>
      <Title className="title">
        <H1>Form Builder</H1>
        <H3>Thirdrock Systems</H3>
      </Title>
      <Image src={Logo} ></Image>
    </Head>
  );
};

export default Header;
