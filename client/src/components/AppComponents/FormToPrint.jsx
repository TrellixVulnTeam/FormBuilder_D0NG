import React, { Component } from "react";
import "../../styles/main.css";
import * as Pages from "../FormToPrintComponents/Pages";

export class FormToPrint extends Component {

  render() {

    const {
      shortName,
      longName,
      preparedFor,
      projectName,
      typeofContract,
      timeofContract,
    } = this.props.values;

    return (
      <div>
        <Pages.FirstPage
          projectName={projectName}
          shortName={shortName}
          longName={longName}
          preparedFor={preparedFor}
        />
        <Pages.SecondPage projectName={projectName} longName={longName} />
        <Pages.ThirdPage projectName={projectName} longName={longName} />
        <Pages.FourthPage projectName={projectName} longName={longName} />
        <Pages.FifthPage projectName={projectName} longName={longName} />
        <Pages.PageSix
          projectName={projectName}
          longName={longName}
          references={this.props.references}
        />
        <Pages.PageSeven
          projectName={projectName}
          longName={longName}
          references={this.props.references}
        />
        <Pages.PageEight projectName={projectName} longName={longName} />
        <Pages.PageNine projectName={projectName} longName={longName} />
        <Pages.Portfolio projectName={projectName} longName={longName} />
        <Pages.Page18 projectName={projectName} longName={longName} />
        <Pages.Page19
          projectName={projectName}
          longName={longName}
          members={this.props.members}
          typeofContract={typeofContract}
          timeofContract={timeofContract}
        />
        <Pages.Page19B projectName={projectName} longName={longName}
          typeofContract={typeofContract}
          timeofContract={timeofContract} />
        <Pages.Page20
          projectName={projectName}
          longName={longName}
          typeofContract={typeofContract}
          timeofContract={timeofContract}
        />
        <Pages.Page21 projectName={projectName} longName={longName} />
        <Pages.Page22 projectName={projectName} longName={longName} />
        <Pages.Page23 projectName={projectName} longName={longName} />
        <Pages.Page30 projectName={projectName} longName={longName} />
        <Pages.Page32 projectName={projectName} longName={longName} />
        <Pages.Page33
          projectName={projectName}
          longName={longName}
          members={this.props.members}
        />
      </div>
    );
  }
}
