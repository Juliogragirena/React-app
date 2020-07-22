import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import "../components/styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstname="Julio"
                lastname="Gragirena"
                twitter="juliogragirena"
                jobTitle="Platzi Student"
                avatar=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
