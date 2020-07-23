import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "../components/styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = { form: {
    firstName:'',
    lastName:'',
    email:'',
    jobTitle:'',
    twitter:'',
  }}

  handleChange = e => {
    //otra forma de hacer agregar los valores a un objeto dentro de otro objeto sin que se borre
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value
    this.setState ({
      form:{
        ...this.state.form,
        [e.target.name] : e.target.value
      }
    })
    // console.log(this.state)
  }

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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl='https://s.gravatar.com/avatar/402b8b52486f06c7c550bb5cf4858573?s=80'
              />
            </div>
            <div className="col">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
