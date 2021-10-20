import React, { Component } from "react";
import "../styles/main.css";
import * as Pages from "./Pages";

export class FormToPrint extends Component {
  //this method is used for the references if there are more than two
  //we will need to put it in two different pages

  render() {
    const {
      shortName,
      longName,
      preparedFor,
      adress,
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
        <Pages.PageTen projectName={projectName} longName={longName} />
        <Pages.Page11 projectName={projectName} longName={longName} />
        <Pages.Page12 projectName={projectName} longName={longName} />
        <Pages.Page13 projectName={projectName} longName={longName} />
        <Pages.Page14 projectName={projectName} longName={longName} />
        <Pages.Page15 projectName={projectName} longName={longName} />
        <Pages.Page16 projectName={projectName} longName={longName} />
        <Pages.Page17 projectName={projectName} longName={longName} />
        <Pages.Page18 projectName={projectName} longName={longName} />
        <Pages.Page19
          projectName={projectName}
          longName={longName}
          members={this.props.members}
          typeofContract={typeofContract}
          timeofContract={timeofContract}
        />
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
