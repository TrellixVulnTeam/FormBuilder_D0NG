import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
const DefaultPage = (props) => {

    return (
        <div className="body">
            <FormHeader index={props.index}></FormHeader>
            <div className="text">
                <h3> {props.module}</h3>
                <p>
                    <strong>{props.title}</strong>
                </p>
                <img src={props.logo} alt="image"></img>
                <p>
                    {props.text}
                </p>
            </div>
            <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
        </div>
    )



}

export default DefaultPage;