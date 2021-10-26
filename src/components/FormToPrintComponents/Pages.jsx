import "../../styles/form.css";
import Logo from "../../images/LogoThirdRock.svg";
import LogoFirstPage from "../../images/LogoPage1.png";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";
import { Reference } from "./Reference";
import TeamMember from "./TeamMember";

export const FirstPage = (props) => {
  return (
    <div className="body">
      <img className="p1-logo" src={Logo}></img>
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
        <p>
          <strong>Web Development</strong>
        </p>
        <br></br>
        <div className="m2-4_grid-container">
          <div className="m2-4_grid-item">NodeJS</div>
          <div className="m2-4_grid-item">HTML</div>
          <div className="m2-4_grid-item">Javascript</div>
          <div className="m2-4_grid-item">CSS/SASS/LESS</div>
          <div className="m2-4_grid-item">ASP</div>
          <div className="m2-4_grid-item">PHP</div>
          <div className="m2-4_grid-item">MySQL</div>
          <div className="m2-4_grid-item">ReactJS</div>
          <div className="m2-4_grid-item">Gatsby</div>
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const PageSix = (props) => {
  return (
    <div className="body">
      <FormHeader index={5}></FormHeader>
      <div className="text">
        <p>
          <strong>Software Development</strong>
        </p>
        <br></br>
        <div className="m2-4_grid-container2">
          <div className="m2-4_grid-item">UNIX</div>
          <div className="m2-4_grid-item">CSS</div>
          <div className="m2-4_grid-item">JSON</div>
          <div className="m2-4_grid-item">C/C++/C#</div>
          <div className="m2-4_grid-item">AngularJS</div>
          <div className="m2-4_grid-item">PHP</div>
          <div className="m2-4_grid-item">C#</div>
          <div className="m2-4_grid-item">Python</div>
          <div className="m2-4_grid-item">ReactJS</div>
          <div className="m2-4_grid-item">PL/SQL</div>
          <div className="m2-4_grid-item">MySQL</div>
          <div className="m2-4_grid-item">SQL</div>
          <div className="m2-4_grid-item">SAP</div>
          <div className="m2-4_grid-item">Swift</div>
          <div className="m2-4_grid-item">GraphQL</div>
        </div>
        <p>
          <strong>Programming/Analyst</strong>
        </p>
        <br></br>
        <div className="m2-4_grid-container">
          <div className="m2-4_grid-item">JAVA</div>
          <div className="m2-4_grid-item">MS Access</div>
          <div className="m2-4_grid-item">Netron/CAP</div>
          <div className="m2-4_grid-item">JSP</div>
          <div className="m2-4_grid-item">ODBC</div>
          <div className="m2-4_grid-item">JBDC</div>
        </div>
        <h3>2.5 REFERENCES</h3>
        <br></br>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {props.references.map((e, i) =>
            i <= 6 ? (
              <Reference
                name={e.name}
                page={e.page}
                referenceName={e.referenceName}
                phone={e.phone}
                email={e.email}
              />
            ) : (
              () => alert("Max of references 6")
            )
          )}
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const PageSeven = (props) => {
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
        <br></br>
        <p>
          <strong>
            LORETO PUEBLO MÁGICO // HTTPS://THIRDROCK.SYSTEMS/PROJECT-LORET
          </strong>
        </p>
        <div className="m2-6_grid-container-studies">
          <div className="m2-6_grid-item-studies">Project Lead</div>
          <div className="m2-6_grid-item-studies">
            Cristian Adal Garcia Hernandez
          </div>
          <div className="m2-6_grid-item-studies">Perfomance Period</div>
          <div className="m2-6_grid-item-studies">2021</div>
          <div className="m2-6_grid-item-studies">Target Audience</div>
          <div className="m2-6_grid-item-studies">
            Local Community & Residents
          </div>
          <div className="m2-6_grid-item-studies">
            Primary Programming Language
          </div>
          <div className="m2-6_grid-item-studies">PHP</div>
          <div className="m2-6_grid-item-studies">
            Secondary Programming Language
          </div>
          <div className="m2-6_grid-item-studies">Javascript, MySQL, HTML</div>
          <div className="m2-6_grid-item-studies">Mobile Ready?</div>
          <div className="m2-6_grid-item-studies">Fully responsive</div>
          <div className="m2-6_grid-item-studies">CMS</div>
          <div className="m2-6_grid-item-studies">Custom HTML</div>
          <div className="m2-6_grid-item-studies">
            Was the CMS buitl in-house?
          </div>
          <div className="m2-6_grid-item-studies">Yes</div>
          <div className="m2-6_grid-item-studies">
            Was the CMS customized to meet specific client needs?
          </div>
          <div className="m2-6_grid-item-studies">Yes</div>
          <div className="m2-6_grid-item-studies">
            Number of users and admins
          </div>
          <div className="m2-6_grid-item-studies">3</div>
        </div>
      </div>

      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const PageEight = (props) => {
  return (
    <div className="body">
      <FormHeader index={7}></FormHeader>
      <div className="grid">
        <br></br>
        <p>
          <strong>CSF PERFORMANCE & RACE // HTTPS://CSF-DEV.10WEB.ME</strong>
        </p>
        <br></br>
        <div className="m2-6_grid-container-studies">
          <div className="m2-6_grid-item-studies">Project Lead</div>
          <div className="m2-6_grid-item-studies">Zach Atkinson</div>
          <div className="m2-6_grid-item-studies">Perfomance Period</div>
          <div className="m2-6_grid-item-studies">2020</div>
          <div className="m2-6_grid-item-studies">Target Audience</div>
          <div className="m2-6_grid-item-studies">
            Perfomance Vehicle Enthuasiasts
          </div>
          <div className="m2-6_grid-item-studies">
            Primary Programming Language
          </div>
          <div className="m2-6_grid-item-studies">PHP</div>
          <div className="m2-6_grid-item-studies">
            Secondary Programming Language
          </div>
          <div className="m2-6_grid-item-studies">
            Javascript, MySQL, HTML, SASS, React
          </div>
          <div className="m2-6_grid-item-studies">Mobile Ready?</div>
          <div className="m2-6_grid-item-studies">Fully responsive</div>
          <div className="m2-6_grid-item-studies">CMS</div>
          <div className="m2-6_grid-item-studies">WordPress</div>
          <div className="m2-6_grid-item-studies">
            Was the CMS buitl in-house?
          </div>
          <div className="m2-6_grid-item-studies">No</div>
          <div className="m2-6_grid-item-studies">
            Was the CMS customized to meet specific client needs?
          </div>
          <div className="m2-6_grid-item-studies">Yes</div>
          <div className="m2-6_grid-item-studies">
            Number of users and admins
          </div>
          <div className="m2-6_grid-item-studies">6</div>
        </div>
      </div>

      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const PageNine = (props) => {
  return (
    <div className="body">
      <FormHeader index={8}></FormHeader>
      <div className="grid">
        <br></br>
        <p>
          <strong>SOULDIERS BARRIE // HTTPS://SOULDIERSBARRIE.COM</strong>
        </p>
        <br></br>
        <div className="m2-6_grid-container-studies">
          <div className="m2-6_grid-item-studies">Project Lead</div>
          <div className="m2-6_grid-item-studies">Zach Atkinson</div>
          <div className="m2-6_grid-item-studies">Perfomance Period</div>
          <div className="m2-6_grid-item-studies">2020</div>
          <div className="m2-6_grid-item-studies">Target Audience</div>
          <div className="m2-6_grid-item-studies">
            Perfomance Vehicle Enthuasiasts
          </div>
          <div className="m2-6_grid-item-studies">
            Primary Programming Language
          </div>
          <div className="m2-6_grid-item-studies">PHP</div>
          <div className="m2-6_grid-item-studies">
            Secondary Programming Language
          </div>
          <div className="m2-6_grid-item-studies">
            Javascript, MySQL, HTML, SASS, React
          </div>
          <div className="m2-6_grid-item-studies">Mobile Ready?</div>
          <div className="m2-6_grid-item-studies">Fully responsive</div>
          <div className="m2-6_grid-item-studies">CMS</div>
          <div className="m2-6_grid-item-studies">WordPress</div>
          <div className="m2-6_grid-item-studies">
            Was the CMS buitl in-house?
          </div>
          <div className="m2-6_grid-item-studies">No</div>
          <div className="m2-6_grid-item-studies">
            Was the CMS customized to meet specific client needs?
          </div>
          <div className="m2-6_grid-item-studies">Yes</div>
          <div className="m2-6_grid-item-studies">
            Number of users and admins
          </div>
          <div className="m2-6_grid-item-studies">6</div>
        </div>
      </div>

      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const PageTen = (props) => {
  return (
    <div className="body">
      <FormHeader index={5}></FormHeader>
      <div className="text">
        <h3>2.6.2 Portfolio</h3>
        <p>
          <strong>Senator Mitch Connell</strong>
        </p>
        <img src={LogoFirstPage}></img>
        <p>
          Senator McConnell requires a versatile and responsive website. The
          main concern of his office was usability, allowing more direct
          communication with his constituents. To address this, TRS crafted a
          solution with the WordPress platform using both cutting-edge and
          tried-and-true techniques. Some significant UX and design highlights
          include the mosaic pattern presentation, highlighting new posts, and
          press releases for maximum usability. Social media sharing is present
          throughout the website to help disseminate information faster to
          citizens in Senator McConnell’s riding. Follow links are accessible
          across the whole site to allow visitors to share content and
          strengthen relations with the agency. Finally, the site integrates a
          small e-commerce section to allow visitors to purchase flags and other
          relevant products.
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page11 = (props) => {
  return (
    <div className="body">
      <FormHeader index={9}></FormHeader>
      <div className="text">
        <h3>2.6.2 Portfolio</h3>
        <p>
          <strong>Senator Kamala Harris</strong>
        </p>
        <img src={LogoFirstPage}></img>
        <p>
          For this project, TRS developed a demo website to enhance the presence
          of Senator Kamala Harris. The base project framework is WordPress CMS
          with a custom Elementor theme. Further enhancements required
          additional plugins, including Essential Addons for Elementor, to
          create a more attractive page. Multimedia files are displayed within a
          carousel design, creating an interactive area where users can browse
          new video content. The homepage brings particular attention to
          upcoming events and the latest news releases, ensuring users get the
          latest information immediately upon loading the website.
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page12 = (props) => {
  return (
    <div className="body">
      <FormHeader index={10}></FormHeader>
      <div className="text">
        <p>
          <strong>City of Tucson, AZ</strong>
        </p>
        <img src={LogoFirstPage}></img>
        <p>
          The City of Tucson required an update to its aging website. Paramount
          amongst their concerns was information delivery. Being a large city,
          Tucson offers a wide variety of services for its citizens.
          Immediately, TRS got to work performing a content normalization
          strategy to inform the UX needs of the future website. With content
          needs and user experience paths established, TRS design experts
          crafted a beautiful theme heavily focused on simplicity and usability
          while highlighting the essence of Tucson. Built with WordPress and
          using the Elementor page builder plugins, TRS provides the city with a
          fully-featured and easy-to-edit website for their content and
          administration staff. Analytics revealed the current website was
          receiving a fair split of traffic between mobile and desktop users, so
          special attention was given to the responsive nature of the design. To
          further enhance usability, the events section links with Google Maps,
          allowing users to see and find local activity locations easily.
          Finally, an email subscription form has been synced to popular mail
          service MailChimp for any user(s) who wish to receive newsletters and
          keep updated on the latest news and local Tucson events.
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page13 = (props) => {
  return (
    <div className="body">
      <FormHeader index={11}></FormHeader>
      <div className="text">
        <p>
          <strong>The State Bar of California</strong>
        </p>
        <img src={LogoFirstPage}></img>
        <p>
          The State Bar of California required an institutional site with a
          sober, straightforward, and understandable presentation. TRS developed
          a solution created with WordPress CMS and using the Elementor page
          builder plugin to meet their needs. All pages are entirely adaptable
          to any media device available. Thumbnail images gallery and recent
          news section created with a blogging structure to efficiently
          administer content. The Contact us page includes easy-to-use forms
          that email the relevant parties on submission and contact details link
          with Google Maps, so users know where to look when the services are
          needed.
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page14 = (props) => {
  return (
    <div className="body">
      <FormHeader index={12}></FormHeader>
      <div className="text">
        <p>
          <strong>Cybersecurity and Infrastructure Security Agency</strong>
        </p>
        <img src={LogoFirstPage}></img>
        <p>
          TRS develop another eye-catching website build with a professional
          look to represent the most critical Cybersecurity government
          institution in the USA, The Cybersecurity and Infrastructure Security
          Agency (CISA). After porting most of the information from the CISA
          original website, TRS developed a framework to enhance the UI
          interface and improve the user navigation experience. The entire site
          was developed with WordPress CMS using the Elementor Page Builder
          plugin for a core theme. Special add-on plugins include Slider
          Revolution, allowing content administrators a simple way to create a
          more attractive and interactive design. The anti-spam software
          reCAPTCHA3 is present throughout the entire website. ReCAPTCHA3
          automatically verifies users’ connection without the need to enter
          data into text boxes or select images. In addition, contact forms are
          managed using the Contact Form 7 plugin and linked directly to Google
          maps to facilitate CISA’s administrative office location(s).
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page15 = (props) => {
  return (
    <div className="body">
      <FormHeader index={13}></FormHeader>
      <div className="text">
        <p>
          <strong>Senator Ben Cardin</strong>
        </p>
        <img src={LogoFirstPage}></img>
        <p>
          This demo theme is created with WordPress CMS using the Elementor page
          builder plugins. This configuration allows for the development of
          complex layouts due to the simple frontend editor. To ensure
          constituents can always reach the senator, best practices for full
          responsiveness provide compatibility with all media devices. To help
          centralize information, TRS establishes seamless integration with the
          Twitter social media platform via API to display all the live tweets
          and responses from the Senators feed on the homepage directly.
          Finally, we link the contact us form to Google Maps and email all
          relevant parties upon submission.
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page16 = (props) => {
  return (
    <div className="body">
      <FormHeader index={14}></FormHeader>
      <div className="text">
        <p>
          <strong>Governor of Wyoming</strong>
        </p>
        <img src={LogoFirstPage}></img>
        <p>
          The Governor of Wyoming office was concerned constituents weren’t able
          to easily access information on their aging website. TRS stepped up to
          supply a simple, beautiful, and professional site built with WordPress
          CMS, alongside the Elementor page builder plugins to improve the
          appearance. TRS selected the Events Calendar plugin to give users an
          at-a-glance rundown of local events and appearances by the Governor.
          Paired with Google maps, citizens can quickly map out exciting events
          nearby and easily add them to their calendar. Finally, to facilitate
          constituent outreach, TRS configure API connections so users can
          subscribe to newsletters and keep updated on the latest news.
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page17 = (props) => {
  return (
    <div className="body">
      <FormHeader index={15}></FormHeader>
      <div className="text">
        <h3>2.6.2 Portfolio</h3>
        <p>
          <strong>Senator Mitch Connell</strong>
        </p>
        <img src={LogoFirstPage}></img>
        <p>
          Senator McConnell requires a versatile and responsive website. The
          main concern of his office was usability, allowing more direct
          communication with his constituents. To address this, TRS crafted a
          solution with the WordPress platform using both cutting-edge and
          tried-and-true techniques. Some significant UX and design highlights
          include the mosaic pattern presentation, highlighting new posts, and
          press releases for maximum usability. Social media sharing is present
          throughout the website to help disseminate information faster to
          citizens in Senator McConnell’s riding. Follow links are accessible
          across the whole site to allow visitors to share content and
          strengthen relations with the agency. Finally, the site integrates a
          small e-commerce section to allow visitors to purchase flags and other
          relevant products.
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page18 = (props) => {
  const members = [
    {
      name: "Chris Allen",
      position: "Director of Business Development",
      linkedn: "/chrisallen",
      img: "",
    },
    {
      name: "Andrew Thompsion",
      position: "Director of Engineering",
      linkedn: "/andrewwjthompson",
      img: "",
    },
    {
      name: "Zach Atkinson",
      position: "Director of Technology",
      linkedn: "/zachatkinson",
      img: "",
    },
  ];

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
  let members = [];
  for (let i = 0; i < props.members.length; i++) {
    members.push(props.members[i].name);
    members.push(props.members[i].position);
  }

  return (
    <div className="body">
      <FormHeader index={19}></FormHeader>
      <div className="grid">
        <h3>2.8 TEAM WORKING ON THIS PROJECT</h3>
        <br></br>
        <div className="m2-8_grid-container">
          <div
            className="m2-8_grid-item"
            style={{
              backgroundColor: "rgb(178,204,243)",
              fontSize: "0.85rem",
              fontWeight: "600",
            }}
          >
            Name
          </div>
          <div
            className="m2-8_grid-item"
            style={{
              backgroundColor: "rgb(178,204,243)",
              fontSize: "0.85rem",
              fontWeight: "600",
            }}
          >
            Position
          </div>
          {members.map((e, index) => (
            <div className="m2-8_grid-item">{e}</div>
          ))}
        </div>
        <h3>3.0 SCOPE OF WORK</h3>
        <br></br>
        <p>
          The following section will cover the proposed work that ThirdRock
          Systems (TRS) will perform as part of the {props.projectName} project
          for {props.longName}.TRS will accomplish this mission by unifying
          brand elements, applying state-of-the-art technology, best practices
          for accessibility and technical optimization. Further to this, TRS
          also provides content normalization, hierarchy, and delivery solutions
          that make our sites stand above the rest.
        </p>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page19B = (props) => {

  const plugins = [{
    name: "Imagify",
    cost1: 100.00,
    cost2: 126.00,
  },
  {
    name: "Kadence Membership Bundle (Kadence Blocks, Pro Theme)",
    cost1: 169.00,
    cost2: 213.00,
  },
  {
    name: "MonsterInsights Pro ",
    cost1: 100.00,
    cost2: 126.00,
  },
  {
    name: "SVG Support ",
    cost1: 0.00,
    cost2: "",
  },
  {
    name: "The Events calendar",
    cost1: 100.00,
    cost2: 126.00
  },
  {
    name: "wA11y",
    cost1: 0.00,
    cost2: ""
  },
  {
    name: "Wordfence Security Premium",
    cost1: 100.00,
    cost2: 126.00
  },
  {
    name: "WP Rocket",
    cost1: 50.00,
    cost2: 63.00
  },
  {
    name: "WP Forms",
    cost1: 100.00,
    cost2: 126.00
  },
  {
    name: "Yoast Local SEO",
    cost1: 69.00,
    cost2: 87.00
  },
  {
    name: "Yoast Duplicate Post",
    cost1: 0.00,
    cost2: ""
  },
  {
    name: "Yoast SEO",
    cost1: 0.00,
    cost2: ""
  },
  {
    name: "Yoast SEO Premium",
    cost1: 89.00,
    cost2: 112.00
  },
  {
    name: "Yoast Test Helper",
    cost1: 0.00,
    cost2: ""
  }]

  console.log(plugins[0].cost1)
  const sumCosts1 = plugins.reduce((acum, obj) => acum + (typeof (obj.cost1) === 'string' ? 0 : obj.cost1), 0);
  console.log(plugins)
  const sumCosts2 = plugins.reduce((acum, obj) => acum + (typeof (obj.cost2) === 'string' ? 0 : obj.cost2), 0)


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
          <div className="m2-8b_grid-container">
            <div
              className="m2-8_grid-item"
              style={{
                backgroundColor: "rgb(178,204,243)",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}
            >
              PLUGIN
            </div>
            <div
              className="m2-8_grid-item"
              style={{
                backgroundColor: "rgb(178,204,243)",
                fontSize: "0.85rem",
                fontWeight: "600",
              }}
            >
              YEARLY COST*
            </div>
            {plugins.map((e, index) => (
              <>
                <div className="m2-8_grid-item">{e.name}</div>
                <div className="m2-8_grid-item">{e.cost1}.00 {e.cost2 !== "" ? `  //~ $ ${e.cost2}.00 CAD` : ""}</div>
              </>
            ))}
            <div className="m2-8_grid-item"><strong> TOTAL / YEAR </strong></div>
            <div className="m2-8_grid-item">{sumCosts1}.00 //~ {sumCosts2}</div>
          </div>
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
          {props.typeofContract == "option1"
            ? ` at least ${props.timeofContract} weeks`
            : props.typeofContract == "option2"
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
        <div className="m5-0_grid-container">
          <div className="m5-0_grid-item">Communication Type</div>
          <div className="m5-0_grid-item">Description</div>
          <div className="m5-0_grid-item">Frequency</div>
          <div className="m5-0_grid-item">Format</div>
          <div className="m5-0_grid-item">Participant/Distribution</div>
          <div className="m5-0_grid-item">Deliverable</div>
          <div className="m5-0_grid-item">Owner</div>
          <div className="m5-0_grid-item">Kickoff Meeting</div>
          <div className="m5-0_grid-item">
            Initial meeting between project team and project sponsor
          </div>
          <div className="m5-0_grid-item">Within 10 first days</div>
          <div className="m5-0_grid-item">Online</div>
          <div className="m5-0_grid-item">
            Project Sponsor,Team,and Stakeholders
          </div>
          <div className="m5-0_grid-item">
            Set Expectations,Introductions,and Overview
          </div>
          <div className="m5-0_grid-item">Project Manager</div>
          <div className="m5-0_grid-item">Weekly SITREP</div>
          <div className="m5-0_grid-item">
            Email situation report of project status
          </div>
          <div className="m5-0_grid-item">Weekly</div>
          <div className="m5-0_grid-item">Email</div>
          <div className="m5-0_grid-item">
            Project Sponsor,Team,and Stakeholders
          </div>
          <div className="m5-0_grid-item">Situation Report</div>
          <div className="m5-0_grid-item">Project Manager</div>
          <div className="m5-0_grid-item">Weekly Project Team Meeting</div>
          <div className="m5-0_grid-item">
            Review action register and status
          </div>
          <div className="m5-0_grid-item">Weekly</div>
          <div className="m5-0_grid-item">Online</div>
          <div className="m5-0_grid-item">Project Team</div>
          <div className="m5-0_grid-item">Updated Action Register</div>
          <div className="m5-0_grid-item">Project Manager</div>
          <div className="m5-0_grid-item">Project Monthly Review</div>
          <div className="m5-0_grid-item">
            Present metrics and status to team and sponsor
          </div>
          <div className="m5-0_grid-item">Monthly</div>
          <div className="m5-0_grid-item">Online</div>
          <div className="m5-0_grid-item">
            Project Sponsor,Team,and Stakeholders
          </div>
          <div className="m5-0_grid-item">Status and Metric Presentation</div>
          <div className="m5-0_grid-item">Project Manager</div>
          <div className="m5-0_grid-item">Project Gate Reviews</div>
          <div className="m5-0_grid-item">
            Present closeout of project phases and kickoff next phase
          </div>
          <div className="m5-0_grid-item">As Needed</div>
          <div className="m5-0_grid-item">Online</div>
          <div className="m5-0_grid-item">
            Project Sponsor,Team,and Stakeholders
          </div>
          <div className="m5-0_grid-item">
            Phase completion report and phase kickoff
          </div>
          <div className="m5-0_grid-item">Project Manager</div>
          <div className="m5-0_grid-item">Technical Design Reviews</div>
          <div className="m5-0_grid-item">
            Review of any technical designs or work associated with the project{" "}
          </div>
          <div className="m5-0_grid-item">As Needed</div>
          <div className="m5-0_grid-item">Online</div>
          <div className="m5-0_grid-item">Project Team</div>
          <div className="m5-0_grid-item">Technical Design Package</div>
          <div className="m5-0_grid-item">Project Manager</div>
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page22 = (props) => {
  return (
    <div className="body">
      <FormHeader index={18}></FormHeader>
      <div className="text">
        <br></br>
        <p>
          <strong>
            PHASE I - INFORMATION GATHERING & EXISTING SITE ANALYSIS
          </strong>
        </p>
        <br></br>
        <div className="m5-1_grid-container">
          <div className className="m5-1_grid-item">
            TASKS & OBJECTIVES
          </div>
          <div className className="m5-1_grid-item">
            DELIVERABLES
          </div>
          <div className className="m5-1_grid-item">
            ● Stakeholder Meeting & Needs Assessment Session
          </div>
          <div className className="m5-1_grid-item">
            ● Needs Assessment
          </div>
          <div className className="m5-1_grid-item">
            ● Site Mission Objectives
          </div>
          <div className className="m5-1_grid-item">
            ● Detailed work plan outlining key milestone and delivery dates
          </div>
          <div className className="m5-1_grid-item">
            ● User Persona Discovery (Roles)
          </div>
          <div className className="m5-1_grid-item">
            ● Brand Guide (Visual + Writing)
          </div>
          <div className className="m5-1_grid-item">
            ● Analytical Audit Review
          </div>
          <div className className="m5-1_grid-item">
            ● Content Migration Plan sign-off
          </div>
          <div className className="m5-1_grid-item">
            ● UX Normalization
          </div>
          <div className="m5-1_grid-item"></div>
          <div className className="m5-1_grid-item">
            ● Create Content Plan for Migration
          </div>
          <div className="m5-1_grid-item"></div>
          <div className className="m5-1_grid-item">
            ● Content Management System Confirmation
          </div>
          <div className="m5-1_grid-item"></div>
          <div className className="m5-1_grid-item">
            ● Brand Discovery Audit
          </div>
          <div className="m5-1_grid-item"></div>
        </div>
        <br></br>
        <p>
          <strong>PHASE II - STAGING SITE SETUP & CUSTOMER SIGN-OFF</strong>
        </p>
        <br></br>
        <div className="m5-1_grid-container">
          <div className="m5-1_grid-item">TASKS & OBJECTIVES </div>
          <div className="m5-1_grid-item">DELIVERABLES </div>
          <div className="m5-1_grid-item">● Sitemap Creation</div>
          <div className="m5-1_grid-item">
            ● Wireframe/Storyboard sign-off & presentation to council
          </div>
          <div className="m5-1_grid-item">● CMS Install & Config</div>
          <div className="m5-1_grid-item">● Sitemap sign-off</div>
          <div className="m5-1_grid-item">
            ● Best Practices Plugins Install & Configuration
          </div>
          <div className="m5-1_grid-item">
            ● Public Consultation via two focus groups & one follow up open
          </div>
          <div className="m5-1_grid-item">
            ● Lo-fi Wireframes/Storyboard Creation
          </div>
          <div className="m5-1_grid-item"></div>
          <div className="m5-1_grid-item">● Template Styling</div>
          <div className="m5-1_grid-item"></div>
          <div className="m5-1_grid-item">● Start Content Migration</div>
          <div className="m5-1_grid-item"></div>
          <div className="m5-1_grid-item">
            ● Initial Accessibility Assessment
          </div>
          <div className="m5-1_grid-item"></div>
          <div className="m5-1_grid-item">● Feedback Changes</div>
          <div className="m5-1_grid-item"></div>
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page23 = (props) => {
  return (
    <div className="body">
      <FormHeader index={19}></FormHeader>
      <div className="text">
        <br></br>
        <p>
          <strong>PHASE III - API INTEGRATIONS</strong>
        </p>
        <br></br>
        <div className="m5-1_grid-container phase-iii">
          <div className className="m5-1_grid-item ">
            TASKS & OBJECTIVES
          </div>
          <div className className="m5-1_grid-item">
            DELIVERABLES
          </div>
          <div className className="m5-1_grid-item">
            ● Social Media (Facebook, Instagram, Twittter, etc.)
          </div>
          <div className className="m5-1_grid-item">
            ● Functioning Social Media integration on the staging site
          </div>
          <div className className="m5-1_grid-item">
            ● E-marketing solutions
          </div>
          <div className className="m5-1_grid-item">
            ● Functioning E-marketing solution on the staging site
          </div>
          <div className className="m5-1_grid-item">
            ● MAIS
          </div>
          <div className className="m5-1_grid-item">
            ● MAIS , ClvicWeb, and Filepro connections established
          </div>
          <div className className="m5-1_grid-item">
            ● ClvibWeb
          </div>
          <div className="m5-1_grid-item"></div>
          <div className className="m5-1_grid-item">
            ● Filepro
          </div>
          <div className="m5-1_grid-item"></div>
          <div className className="m5-1_grid-item">
            ● Feedback changes
          </div>
          <div className="m5-1_grid-item"></div>
        </div>
        <br></br>
        <p>
          <strong>PHASE IV - FINAL AUDIT</strong>
        </p>
        <br></br>
        <div className="m5-1_grid-container phase-iv">
          <div className="m5-1_grid-item">TASKS & OBJECTIVES </div>
          <div className="m5-1_grid-item">DELIVERABLES </div>
          <div className="m5-1_grid-item">
            ● Page by-page Perfonmance Optimized with Lighthouse Tests
          </div>
          <div className="m5-1_grid-item">● Perfomance summary report</div>
          <div className="m5-1_grid-item">
            ● Comprehensive Page-by-Page WCAG 2.0 AA Tests. Through a
            combination of open source and paid 3 rd party tools, we perform a
            page-by-page analysis ensuring the site meets WCAG 2.0 AA
            requiremetns.{" "}
          </div>
          <div className="m5-1_grid-item">● Accesibility summary report</div>
          <div className="m5-1_grid-item">● Final Feedback Changes</div>
          <div className="m5-1_grid-item"></div>
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page24 = (props) => {
  return (
    <div className="body">
      <FormHeader index={18}></FormHeader>
      <div className="text">
        <br></br>
        <p>
          <strong>PHASE V - DOCUMENTATION</strong>
        </p>
        <br></br>
        <div className="m5-1_grid-container phase-v">
          <div className className="m5-1_grid-item">
            TASKS & OBJECTIVES
          </div>
          <div className className="m5-1_grid-item">
            DELIVERABLES
          </div>
          <div className className="m5-1_grid-item">
            ● Stakeholder Training
          </div>
          <div className className="m5-1_grid-item">
            ● Stakeholder Training
          </div>
          <div className className="m5-1_grid-item">
            ● Documentation Generation
          </div>
          <div className className="m5-1_grid-item">
            ● Documentation handover
          </div>
          <div className className="m5-1_grid-item">
            ● Technical Specifications Executive Report
          </div>
          <div className className="m5-1_grid-item">
            ● Submission of final report outlining work completed, costs and
            work remaining
          </div>
        </div>
        <br></br>
        <p>
          <strong>PHASE VI - LAUNCH AND SUPPORT</strong>
        </p>
        <br></br>
        <div className="grid-containerPage22 phase-vi">
          <div className="m5-1_grid-item">TASKS & OBJECTIVES </div>
          <div className="m5-1_grid-item">DELIVERABLES </div>
          <div className="m5-1_grid-item">● Website Launch</div>
          <div className="m5-1_grid-item">● Website Launch</div>
          <div className="m5-1_grid-item">
            ● Post-Launch Support (up to 6 hours included) + 6-Month warranty
            for defects
          </div>
          <div className="m5-1_grid-item">
            ● Post-Launch Support (up to 6 hours included) + 6-Month warranty
            for defects
          </div>
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page30 = (props) => {
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
        <div
          className="m2-8_grid-container"
          style={{
            gridTemplateRows: "repeat(2,30px) 80px repeat(3,30px)",
            fontSize: "1rem",
          }}
        >
          <div
            className="m2-8_grid-item"
            style={{
              backgroundColor: "rgb(178,204,243)",
              fontSize: "0.85rem",
              fontWeight: "600",
            }}
          >
            TASK
          </div>
          <div
            className="m2-8_grid-item"
            style={{
              backgroundColor: "rgb(178,204,243)",
              fontSize: "0.85rem",
              fontWeight: "600",
            }}
          >
            CHARGES
          </div>
          <div className="m2-8_grid-item">Fixed rate for entire project</div>
          <div className="m2-8_grid-item">$</div>
          <div className="m2-8_grid-item">
            Rate if the Village of Harrison Hot Springs requests changes to the
            scope of work (hourly + tax)
          </div>
          <div className="m2-8_grid-item">$</div>
          <div className="m2-8_grid-item">Discount #NBKIL872NH</div>
          <div className="m2-8_grid-item">-$</div>
          <div className="m2-8_grid-item">Total Project Cost</div>
          <div className="m2-8_grid-item">$</div>
          <div className="m2-8_grid-item">X% PST</div>
          <div className="m2-8_grid-item">$</div>
          <div className="m2-8_grid-item">X% HST</div>
          <div className="m2-8_grid-item">$</div>
        </div>
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
          <div>● This proposal includes applicable taxes</div>
          <div>● This proposal is in CAD</div>
          <div>
            ● Domain registration (if required) is charged independently of this
            proposal
          </div>
          <div>
            ● Hosting is not included. If required, hosting can be provided at
            additional cost as outlined in section 3.8 Ho
          </div>
          <div>
            ● Onsite travel, consultations, meetings are not included in this
            proposal. Physical travel (if required) will be at additional
            expense
          </div>
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page32 = (props) => {
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
          <div>
            ● Response to your request for support assistance within
            24-business-hours, when properly submitted online, by phone, or by
            email.
          </div>
          <div>
            ● Assistance with any broken links that are reported to need fixing.
          </div>
          <div>
            ● Assistance with error messages and system loading problems
            reported by users.
          </div>
          <div>
            ● Assistance with problems experienced by users when attempting to
            play video and audio files or view and download images or documents.
          </div>
          <div>
            ● Assistance with viewing problems reported by users where your
            website is not displaying correctly in certain browser types defined
            in your contract (e.g. Internet Explorer and Firefox).
          </div>
          <div>
            ● Assistance with any queries or problems arising with the CMS
            database system.
          </div>
          <div>
            ● Picture Updates – adding, editing, and sizing of any pictures to
            the existing website which does not fall under the scope of the
            layout or actual design of the existing website.
          </div>
          <div>
            ● Text Updates – adding, editing, and/or removing any text or copy
            on the existing site, including any articles, reports, contact
            information, and product or service description.
          </div>
          <div>
            ● Functionality – ensuring all links/images are working correctly
            and examining the overall health and proper functionality of the
            website. Additional requests for
            Search/Filtering/Content/Design/Layout/Programming.
          </div>
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};

export const Page33 = (props) => {
  console.log(props.members);
  const members = props.members.map((element) => [
    element.name,
    element.skills,
    element.cv,
  ]);
  //Passing the relevant skills and link of the cv later we can add buttons.

  console.log(members);

  return (
    <div className="body">
      <FormHeader></FormHeader>

      <div className="text">
        <h1> A - TEAM RESUMES</h1>
        <br></br>
        <p>
          <strong>*Note:</strong> Director experience can be viewed on LinkedIn
          & Individual resumes can be found as separate attachments with the
          corresponding file names shown below.
        </p>
        <br></br>
        <div className="m7-0_grid-container">
          <div className="m7-0_grid-item">Name</div>
          <div className="m7-0_grid-item">Resume</div>
          <div className="m7-0_grid-item">Relevant Skills</div>
          {members.map((element) => (
            <>
              <div className="m7-0_grid-item">{element[0]}</div>
              <div className="m7-0_grid-item">{element[1]}</div>
              <div className="m7-0_grid-item">{element[2]}</div>
            </>
          ))}
        </div>
      </div>
      <FormFooter name={props.longName + " " + props.projectName}></FormFooter>
    </div>
  );
};
