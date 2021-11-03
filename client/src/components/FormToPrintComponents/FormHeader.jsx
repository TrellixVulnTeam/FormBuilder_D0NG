import "../../styles/form.css";
import Logo from "../../images/LogoThirdRock.svg";
const FormHeader = (props) => {
  return (
    <>
      <header className="form-header">
        <div className="form-header_info">
          <h3>111.223432.5445</h3>
          <h3>Thirdrock.systems</h3>
          <h3>govcon@thirdrock.systems</h3>
        </div>
        <img src={Logo} alt="Logo of the nav"></img>
        <div>
          <h2>Page</h2>
          <h2>{props.index}</h2>
        </div>
      </header>
    </>
  );
};

export default FormHeader;
