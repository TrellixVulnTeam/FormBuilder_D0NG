
import Logo from "../../images/LogoThirdRock.svg";
import styled from "styled-components"

const Footer = styled.div`
  padding: 2rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border-bottom: 1px solid black;
  p{
      margin-top:1rem;
  }`



const PageFooter = () => {
    return (
        <Footer>
            <img src={Logo}></img>
            <p>© 2020 ThirdRock Systems, a Division of AllOffice.Space inc.</p>
            <p>350 10th Avenue, San Diego, CA</p>
            <p>govcon@thirdrock.systems</p>


        </Footer>
    )
}

export default PageFooter