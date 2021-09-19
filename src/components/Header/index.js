import React from "react";
import "./style.css";

const Header = ({
    background,
    picture,
    name,
    description
  }) => {
  return (
    <section className="profile">
      <div className="img-background" style={{ backgroundImage: `url(${background})`}} />
      <img className="picture" src={picture} alt={`${name} profile`}/>
      <h1 className="name">{name}</h1>
      <h2 className="description">{description}</h2>
    </section>
  )
}

export default Header;