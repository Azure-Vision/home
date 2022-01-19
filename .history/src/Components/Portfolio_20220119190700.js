import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Slide from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;
      let pdf_link = ""
      if (projects.pdf_url){
        pdf_link = <a href={projects.pdf_url}>PDF</a>
      } else {pdf_link = "";}
      let code_link = ""
      if (projects.code_url){
        code_link = <a href={projects.code_url}>Code</a>
      } else {code_link = "";}
      let links = pdf_link + code_link;
      return (
        <Slide left duration={1300}>
        <div className="row work">
          <div className="two columns header-col">
            <Zmage alt={projects.title} src={projectImage} />
          </div>

          <div className="ten columns main-col">
            <div key={projects.title}>
            <p>{projects.author}. {projects.title} {projects.publication}. [{pdf_link}{code_link}]</p>
            <p>{projects.description} </p>
          </div>
          </div>
        </div>
      </Slide>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Research Projects</h1>

              {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">{projects}</div> */}
              <div className="twelve columns main-col">{projects}</div>
            </div>
          </div>
        </Fade>
      </section>
    );
    
  }
}

export default Portfolio;
