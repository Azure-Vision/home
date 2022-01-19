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

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Research Projects</h1>

              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">{projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
    
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work & Internship</span>
              </h1>
            </div>

            <div className="nine columns main-col">{}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Portfolio;
