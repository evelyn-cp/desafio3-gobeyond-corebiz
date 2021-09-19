import React from "react";
import "./style.css";
import iconEmail from '../../images/email.png';
import iconLinkedin from '../../images/linkedin.png';
import iconGithub from '../../images/github.png';

const Navigation = ({
  linkedin,
  github,
  email
}) => {
  return (
    <section className="navigation-icons">
      <div className="div-icons">
        <a className="link" href={`${linkedin}`}>
          <img className="icon" src={iconLinkedin} alt="Linkedin"/>
          <span className="title-link">Linkedin</span>
        </a>
        <a className="link" href={`${github}`}>
          <img className="icon" src={iconGithub} alt="Github"/>
          <span className="title-link">Github</span>
        </a>
        <a className="link" href={`mailto:${email}`}>
          <img className="icon" src={iconEmail} alt="Email"/>
          <span className="title-link">Email</span>
        </a>
      </div>
    </section>
  );
}

export default Navigation;