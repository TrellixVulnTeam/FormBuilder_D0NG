import "../styles/main.css";
import Logo from "../images/LogoThirdRock.svg";

const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>Form Builder</h1>
        <h3>Thirdrock Systems</h3>
      </div>
      <img src={Logo} className="Login"></img>
    </header>
  );
};

export default Header;
