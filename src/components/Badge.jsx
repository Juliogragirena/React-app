import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
// import picture from "../images/FOTO.png";

class Badge extends React.Component {
  state={}
  render() {
    const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        <header className="Badge_header">
          <img src={confLogo} alt="Logo de conferencia" />
        </header>
        <div className="Badge_section-name">
          <img
            className="Badge_avatar"
            src={avatarUrl}
            alt="Avatar"
          />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge_section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>

        <footer className="Badge_footer">#platziconfg</footer>
      </div>
    );
  }
}

export default Badge;
