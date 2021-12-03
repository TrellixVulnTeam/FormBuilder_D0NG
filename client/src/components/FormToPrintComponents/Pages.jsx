import "../../styles/form.css";
import Logo from "../../images/LogoThirdRock.svg";
import LogoFirstPage from "../../images/LogoPage1.png";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import TeamMember from "./TeamMember";
import DefaultPage from "./DefaultPage";
import { names, text, items2_7, items2_7b, items2_7c, skills3, skillsB, skillsA, skillsC, TRSTeam, pluginsA, module5, module5B, module5F, module5E, module5D, module5C, module5G, module6B, module7, module6A } from "./CONST_Portfolio";
import { Grid1 } from "./Grids/Grid1";
import { PrintReference } from "./FormToPrintReferences";
import { Grid2, Grid3, GridPlugins, Grid5, Grid6 } from "./Grids/Grid2";
import { Container } from "react-bootstrap";

export const FirstPage = (props) => {
  return (
    <div className="body">
      <img className="p1-logo" src={Logo} alt="Logo"></img>
      <div className="p1-title1">
        <h4>778.819.3797 // thirdrock.systems //govcon@thirdrock.systems</h4>
      </div>
      <br></br>
      <div className="p1-text">
        <div className="p1-text_info">
          <h4>TECHNICAL ADMIN & PROPOSAL</h4>
          <br></br>
          <p>
            <strong>ThirdRock Systems</strong>
            <br></br>
            Chris A.Allen, Director<br></br>
            22420 Dewdney Trunk Road <br></br>
            Maple Ridge , BC<br></br>
            V2X 3J5{" "}
          </p>
        </div>
        <div className="p1-text_info">
          <h4>PREPARED FOR</h4>
          <br></br>
          <p>
            <strong>{props.longName}</strong>
            <br></br>
            {props.preparedFor}
            <br></br>
            PO Box 160 , 495 Hot Springs Road<br></br>
            Harrison Hot Spring Roads <br></br>
            V0M 1K0
          </p>
        </div>
      </div>

      <div className="p1-title2">
        <h1 style={{ textAlign: "center" }} height={{}}>
          VILLAGE OF HARRISON HOT SPRINGS WEBSITE REDESIGN & UPGRADE
        </h1>
      </div>
      <FormFooter name={props.longName + " " + props.projectName} />
    </div>
  );
};

export const SecondPage = (props) => {
  return (
    <div className="body" id="secondPage">
      <FormHeader index={1}></FormHeader>
      <div className="p2">
        <div className="title">
          <h2>TABLE OF CONTENTS</h2>
        </div>
        <div className="p2-text">
          <div>
            <p>
              <strong> 1.0 CONFIDENTIALITY STATEMENT</strong>
            </p>
            <p>
              <strong>3</strong>
            </p>
          </div>
          <br></br>
          <div>
            <p>
              <strong>2.0 OVERVIEW OF THIRD ROCK SYSTEMS</strong>
            </p>
            <p>
              <strong>3</strong>
            </p>
          </div>
          <ul>
            <li>
              <p>2.1 FIRM DETAILS</p> <p>3</p>
            </li>
            <li>
              <p>2.2 MISSION STATEMENT</p> 4
            </li>
            <li>
              <p>2.3 KEY QUALIFICATIONS</p> 4
            </li>
            <li>
              <p>2.4 CORE CAPABILITIES</p> 4
            </li>
            <li>
              <p>2.5 REFERENCES</p> 5
            </li>
            <li>
              <p>2.6 SUCCESS STORIES</p> 6
            </li>
            <li>
              <ul>
                <li>
                  <p>2.6.1 CASE STUDIES OF PREVIOUS WORK</p>
                  <p>6</p>
                </li>
                <li>
                  <p>2.6.2 PORTFOLIO</p>
                  <p>9</p>
                </li>
              </ul>
            </li>
            <li>
              <p>2.7 TRS TEAM </p>17
            </li>
            <li>
              <p>2.8 TEAM WORKING ON THIS PROJECT </p>18
            </li>
          </ul>
          <br></br>
          <div>
            <p>
              <strong>3.0 SCOPE OF WORK</strong>
            </p>
            <p>
              <strong>18</strong>
            </p>
          </div>
          <ul>
            <li>
              <p>3.1 ANALYSIS OF EXISTING SITE </p>19
            </li>
            <li>
              <p>3.2 BRANDING, TONE AND DESIGN </p>19
            </li>
            <li>
              <p>3.3 PUBLIC CONSULTATION </p>20
            </li>
            <li>
              <p>3.4 SITE BUILD & ACCESSIBILITY </p>20
            </li>
            <li>
              <p>3.5 CONTENT MIGRATION </p>21
            </li>
            <li>
              <p>3.6 IMPLEMENTATION & POST-LAUNCH SUPPORT </p>22
            </li>
            <li>
              <p>3.7 BEST PRACTICES PLUGINS & LICENSING </p>22
            </li>
            <li>
              <p>3.8 HOSTING (OPTIONAL) / SYSTEM REQUIREMENTS </p>23
            </li>
          </ul>
          <br></br>
          <div>
            <p>
              <strong>4.0 CONTRACT TERM 24</strong>
            </p>
            <p>
              <strong>24</strong>
            </p>
          </div>
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName} />
    </div>
  );
};

export const ThirdPage = (props) => {
  return (
    <div className="body">
      <FormHeader index={2}></FormHeader>
      <div className="p3">
        <div className="p3-text">
          <div>
            <p>
              <strong> 5.0 PROJECT MANAGEMENT PLAN</strong>
            </p>
            <p>
              <strong>25</strong>
            </p>
          </div>
          <br></br>
          <div>
            <p>
              <strong>6.0 PRICING PROPOSAL</strong>
            </p>
            <p>
              <strong>29</strong>
            </p>
          </div>
          <ul>
            <li>
              <p>6.1 PRICING BREAKDOWN</p>30
            </li>
            <li>
              <p>6.2 OPTIONAL COSTS</p>30
            </li>
          </ul>
          <br></br>
          <div>
            <p>
              <strong> 7.0 WARRANTY AND SUPPORT</strong>
            </p>
            <br></br>
            <p>
              <strong>30</strong>
            </p>
          </div>
          <br></br>
          <p>
            <strong> APPENDIX A- TEAM RESUMES</strong>
          </p>
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName} />
    </div>
  );
};

export const FourthPage = (props) => {
  return (
    <div className="body">
      <FormHeader index={3}></FormHeader>
      <div className="text">
        <h3>1.0 CONFIDENTIALITY STATEMENT</h3>
        <br></br>
        <p>
          This document consists of proprietary and confidential statements. All
          data submitted to the <strong>{props.longName}</strong> is provided in
          reliance upon its consent not to use or disclose any information
          contained herein except in the context of its business dealings with
          ThirdRock Systems (TRS). The recipient of this document agrees to
          inform its present and future employees and partners who view or have
          access to the document’s content of a confidential nature.<br></br>
          <br></br>
          Except as qualified herein, TRS reserves the right to vary the terms
          of this response in accordance with any changes in the specifications
          made by the <strong>{props.longName}</strong>. Submission of this
          response by TRS in no way conveys any right, title, interest, or
          license in any intellectual property (including, but not limited to,
          patents, copyrights, trade secrets, or trademarks) contained or
          embodied therein.
        </p>
        <br></br>
        <h3>2.0 OVERVIEW OF THIRD ROCK SYSTEMS</h3>
        <br></br>
        <p>
          ThirdRock Systems (TRS) enhances your public sector agency with
          innovative information technology services.<br></br>
          <br></br>As a Veteran-Owned Small Business, TRS believes in ‘Deeds Not
          Words’.Therefore, TRS demonstrates its commitment to excellence in
          innovative web and software development solutions designed for their
          agency clients.
        </p>{" "}
        <br></br>
        <h3>2.1 FIRM DETAILS</h3>
        <br></br>
        <p>
          ThirdRock Systems (TRS, a Division of AllOffice.Space inc.) was
          launched as a subsidiary division ~3 years ago and has been in
          operation for ~8 years. TRS is a Veteran Owned Small Business and
          full-service IT Company exclusively serving public sector agencies in
          Canada and the United States with a current personnel roster of 17.
          TRS is committed to building scalable, resilient websites using the
          latest technologies and methodologies while ensuring all our sites
          meet industry accessibility and securitystandards. TRS resells and
          services over 92 major software solutions. These products and services
          include Adobe, Microsoft, AutoDesk, AWS, and Google.
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const FifthPage = (props) => {

  const skills = skillsA

  return (
    <div className="body">
      <FormHeader index={4}></FormHeader>
      <div className="text">
        <br></br>
        <h3>2.2 MISSION STATEMENT</h3>
        <br></br>
        <p>
          ‘Serving those who serve’. Delivering top-class web design and
          software products from a diverse team of veteran engineers and
          developers. As a result, ThirdRock Systems can focus on proposing a
          bespoke solution for each agency client by concentrating exclusively
          on government agencies.
        </p>
        <br></br>
        <h3>2.3 KEY QUALIFICATIONS</h3>
        <br></br>
        <p>
          TRS offers custom graphic design, web design, and web development. As
          government contractors, TRS brings deep industry expertise and the
          latest IT advancements to deliver custom software solutions so your
          organization can meet its mission. TRS has demonstrably designed
          websites for the Loreto Municipal Government, Cybersecurity &
          Infrastructure Security Agency, City of Tucson Arizona, City of Seward
          Alaska, Governor of Wyoming, The Nation Municipality, The Resort
          Village of Candle Lakes, The State Bar of California, as well as
          Senators Ben Cardin, Kamala Harris, Lindsey Graham, and Mitch
          McConnell.
        </p>{" "}
        <br></br>
        <h3>2.4 CORE CAPABILITIES</h3>
        <br></br>
        <p><strong>Web Development</strong></p>
        <br></br>
        <Grid1 skills={skills} title="Web Development" />
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const PageSix = (props) => {
  const skills1 = skillsB
  const skills2 = skillsC

  const references = props.references.filter(reference => reference.selected)

  return (
    <div className="body">
      <FormHeader index={5}></FormHeader>
      <div className="text">
        <Grid1 title="Sofware Development" skills={skills1} />
        <Grid1 title="Programming Analytics" skills={skills2} />
        <h3>2.5 REFERENCES</h3>
        <br></br>
        <PrintReference references={references}></PrintReference>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const PageSeven = (props) => {

  const items = items2_7;

  return (
    <div className="body">
      <FormHeader index={6}></FormHeader>
      <div className="grid">
        {/* <div style = {{display:"flex" ,flexDirection:"row" , flexWrap :"wrap"}}>
                        {props.references.map( (e,i) => (i>1)?<Reference name = {e.name}  page = { e.page } referenceName = {e.referenceName} phone = {e.phone } email = {e.email }/>:"")}
                </div> */}
        <h3>2.6 SUCCESS STORIES</h3>
        <br></br>
        <p>
          Our web design and development work is all centered around one theme:,
          ‘Deeds not Words’. Browse through our recent projects and see how we
          have helped government agencies develop their online presence. See
          what we've done, how we helped them out, and the impactful results of
          these efforts.
        </p>
        <br></br>
        <h4>2.6.1 CASE STUDIES OF PREVIOUS WORK</h4>
        <Grid2 title="LORETO PUEBLO MÁGICO // HTTPS://THIRDROCK.SYSTEMS/PROJECT-LORETO" items={items}></Grid2>
      </div>

      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div >
  );
};

export const PageEight = (props) => {

  const items = items2_7b

  return (
    <div className="body">
      <FormHeader index={7}></FormHeader>
      <div className="grid">
        <Grid2 items={items} title="CSF PERFORMANCE & RACE // HTTPS://CSF-DEV.10WEB.ME" />
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const PageNine = (props) => {

  const items = items2_7c

  return (
    <div className="body">
      <FormHeader index={8}></FormHeader>
      <div className="grid">
        <Grid2 title="SOULDIERS BARRIE // HTTPS://SOULDIERSBARRIE.COM" items={items}></Grid2>
      </div >
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div >
  );
};
export const Portfolio = (props) => {

  // Passing the information from the const to an array this from CONST_PORTFOLIO

  const pages = []
  for (let i = 0; i < names.length; i++) {
    let page = {
      module: i === 0 ? "2.6.2 Portfolio" : <br />,
      title: names[i],
      text: text[i],
      index: i + 10
    }
    pages.push(page)
  }
  return (
    <>
      {pages.map((page, index) => <DefaultPage key={"defaultPage" + index} title={page.title} module={page.module} text={page.text} logo={LogoFirstPage} index={page.index} longName={props.longName} projectName={props.projectName}></DefaultPage>)}
    </>
  )



}

export const Page18 = (props) => {

  const members = TRSTeam;

  return (
    <div className="body">
      <FormHeader index={18}></FormHeader>
      <div style={{ display: "flex", height: "70%", alignItems: "flex-start" }}>
        {members.map((e) => (
          <TeamMember member={e} key={e.name} />
        ))}
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page19 = (props) => {
  //Array that we will map for the grid

  let members = [];

  for (let i = 0; i < props.members.length; i++) {
    if (props.members[i].selected) {
      members.push(props.members[i].name);
      members.push(props.members[i].designation);
    }
  }


  return (
    <div className="body">
      <FormHeader index={19}></FormHeader>
      <div className="grid">
        <Grid3 title="2.8 TEAM WORKING ON THIS PROJECT" members={members} />
        <h3>3.0 SCOPE OF WORK</h3>
        <br></br>
        <p>
          The following section will cover the proposed work that ThirdRock
          Systems (TRS) will perform as part of the {props.projectName} project
          for {props.longName}.TRS will accomplish this mission by unifying
          brand elements, applying state-of-the-art technology, best practices
          for accessibility and technical optimization.Further to this, TRS
          also provides content normalization, hierarchy, and delivery solutions
          that make our sites stand above the rest.
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page19B = (props) => {

  const plugins = pluginsA;

  return (
    <div>
      <div className="body">
        <FormHeader index={18}></FormHeader>
        <div className="text">
          <br></br>
          <h3>3.7 BEST PRACTICES PLUGINS & LICENSING</h3>
          <p>TRS best practices include several plugins to keep the Village of Harrison Hot Springs
            website secure, speedy, and accessible. Below is a list of our suggested build for your
            website.</p>
          <GridPlugins key="module7" plugins={plugins} title1="PLUGIN" title2="YEARLY COST *" />
          <br />
          <strong>*First year plugin costs are included in all TRS development quotes. These costs are
            representative of recurring yearly subscriptions for premium plugins. If The Village
            of Harrison Hot Springs opts to host with TRS solution, these costs will be handled
            directly by TRS as part of our managed hosting solution.</strong>
        </div>
        <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
      </div>
    </div>
  );



}

export const Page20 = (props) => {
  // COMPLETE WITH THE DYNAMIC PART

  return (
    <div className="body">
      <FormHeader index={18}></FormHeader>
      <div className="text">
        <br></br>
        <h3>4.0 CONTRACT TERM</h3>
        <br></br>
        <p>
          Contract to begin{" "}
          {props.typeofContract === "option1"
            ? ` at least ${props.timeofContract} weeks`
            : props.typeofContract === "option2"
              ? `on ${props.timeofContract}`
              : "UNCOMPLETED"}{" "}
          after the contract is signed and terms are agreed to. The contract
          will be deemed complete and the beginning of the warranty period will
          commence on the go-live date of the new website.
        </p>
        <br></br>
        <h3>5.0 PROJECT MANAGEMENT PLAN</h3>
        <br></br>
        <p>
          TRS has identified Chris A. Allen as the Project Manager (PM) for this
          project. As the PM, he has the overall authority and responsibility
          for managing and executing this project on behalf of TRS to the
          specifications laid out in the Scope of Work.
          <br></br>
          <br></br>
          The project team will consist of personnel from the web development
          group, quality control/assurance group, technical documentation group,
          and the testing group. The PM will work with the Village staff
          designated as the project manager throughout the project to ensure
          timelines are met and that the Village staff remain informed.
          <br></br>
          <br></br>
          All project and subsidiary management plans will be made available to
          Village staff. All funding decisions will also be made by Village
          staff. Any delegation of approval authority to the project manager
          should be done in writing and be signed by both Village staff and the
          PM.
          <br></br>
          <br></br>
          The project team will be staff from ThirdRock Systems. The PM is
          responsible for communicating with organizational managers on the
          progress and performance of each project resource.
        </p>{" "}
        <br></br>
        <p>
          <strong>COMMUNICATION MANAGEMENT PLAN</strong>
        </p>
        <br></br>
        <p>
          This Communications Management Plan sets the communications framework
          for this project. It will serve as a guide for communications
          throughout the life of the project and will be updated as
          communication requirements change. This plan identifies and
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page21 = (props) => {
  const items = module5;

  return (
    <div className="body">
      <FormHeader index={18}></FormHeader>
      <br></br>
      <div className="text Page20">
        <p>
          defines the roles of ThirdRock Systems project team members as they
          pertain to communications. It also includes communication conduct for
          meetings and other forms of communication.
          <br></br>
          The Project Manager will take the lead role in ensuring effective
          communications on this project. The communications requirements are
          documented in the Communications Matrix below. The Communications
          Matrix will be used as the guide for what information to communicate,
          who is to do the communicating, when to communicate it, and to whom to
          communicate.
        </p>
        <br></br>
        <br></br>
        <Grid5 items={items} />
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page22 = (props) => {
  const items1 = module5B;
  const items2 = module5C;


  return (
    <div className="body">
      <FormHeader index={18}></FormHeader>
      <div className="text">
        <Grid6 phase={0} title="PHASE I - INFORMATION GATHERING & EXISTING SITE ANALYSIS" items={items1} />
        <Grid6 phase={0} title="PHASE II - STAGING SITE SETUP & CUSTOMER SIGN-OFF" items={items2} />
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div >
  );
};

export const Page23 = (props) => {

  const items3 = module5D;
  const items4 = module5E;

  return (
    <div className="body">
      <FormHeader index={19}></FormHeader>
      <div className="text">
        <Grid6 phase={3} title="PHASE III - API INTEGRATIONS" items={items3} />
        <Grid6 phase={4} title="PHASE IV - FINAL AUDIT" items={items4} />
      </div >
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div >
  );
};

export const Page24 = (props) => {

  const items5 = module5F;
  const items6 = module5G;

  return (
    <div className="body">
      <FormHeader index={18}></FormHeader>
      <div className="text">
        <Grid6 phase={5} title="PHASE V - DOCUMENTATION" items={items5} />
        <Grid6 phase={6} title="PHASE VI - LAUNCH AND SUPPORT" items={items6} />
      </div >
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div >
  );
};

export const Page30 = (props) => {

  const items = module6A;
  //CSS de los items a agregar
  // fontSize: "0.85rem",
  // fontWeight: "600",
  // y del Container
  //             gridTemplateRows: "repeat(2,30px) 80px repeat(3,30px)",
  //           fontSize: "1rem",
  const items2 = module6B

  return (
    <div className="body">
      <FormHeader index={30}></FormHeader>
      <div className="text">
        <h2>6.0 PRICING PROPOSAL</h2>
        <br></br>
        <p>
          The table below details the cost associated with the website audit and
          design services:
        </p>
        <GridPlugins plugins={items} title1="TASK" title2="CHARGES" />
        <p>
          <strong>Discount Disclosure:</strong> The one-time discount applied
          exclusively and solely for the purpose of affording ThirdRock Systems
          the opportunity (upon successful completion of the project) entrance
          into and building of a sterling reputation within the Western Canada
          municipal market. The discount is non-transferrable to any future
          projects, municipalities, agencies, or institutions.
        </p>
        <br></br>
        <div
          className="list"
          style={{ marginLeft: "40px", padding: "1px", fontSize: "1rem" }}
        >
          {items2.map((item, i) => <div key={i}>{item}</div>)}
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page32 = (props) => {
  const items = module7


  return (
    <div className="body">
      <FormHeader index={32}></FormHeader>
      <div className="text">
        <h2>7.0 WARRANTY AND SUPPORT</h2>
        <br></br>
        <p>
          Our website warranty covers code and graphics developed by ThirdRock
          Systems. The warranty covers errors or omissions made by ThirdRock
          Systems for a period of up to and no further than six months after the
          solution goes live. Any code altered by the customer and/or third
          party applications used in the construction or alteration of the
          website is outside the scope of our warranty. The accuracy of content
          either provided or approved by the customer to complete the website is
          the customer’s responsibility, and alterations requested of us by the
          customer are considered to be change requests.<br></br>
          Warranty includes and is limited to:
        </p>
        <br></br>
        <div
          className="list"
          style={{ marginLeft: "40px", padding: "1px", fontSize: "1rem" }}
        >
          {items.map((item, i) => <div key={i}>{item}</div>)}
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page33 = (props) => {
  // const members = props.members.map((element) => [
  //   element.name,
  //   element.skills,
  //   element.cv,
  // ]);
  //Passing the relevant skills and link of the cv later we can add buttons.

  const selectedMembers = props.members.filter(e => e.selected === true)
  return (
    <div className="body">
      <FormHeader></FormHeader>
      <div className="text" key="pricing">
        <h1> A - TEAM RESUMES</h1>
        <br></br>
        <p>
          <strong>*Note:</strong> Director experience can be viewed on LinkedIn
          & Individual resumes can be found as separate attachments with the
          corresponding file names shown below.
        </p>
        <br></br>
        <div className="m7-0_grid-container" key="module7">
          <div className="m7-0_grid-item" key="option1">Name</div>
          <div className="m7-0_grid-item" key="option2">Resume</div>
          <div className="m7-0_grid-item" key="option3">Relevant Skills</div>
          {selectedMembers.map((element, index) => (element.skills !== "x" ?
            <>
              <div className="m7-0_grid-item" key={element.name + index}>{element.name}</div>
              <a className="m7-0_grid-item" href={element.cv}>{element.cv}</a>
              <div className="m7-0_grid-item" key={element.skills + index}>{element.skills}</div>
            </> : ""
          ))}
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};
