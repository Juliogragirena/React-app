import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeNew.css";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      this.setState({ loading: true, error: null });
      await api.badges.create(this.state.form);
      console.log(this.props)
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
    console.log(this.state);
  };

  handleChange = (e) => {
    //otra forma de hacer agregar los valores a un objeto dentro de otro objeto sin que se borre
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    // console.log(this.state)
  };

  render() {
    if(this.state.loading) {
      return <PageLoading />
    } 
    return (
      <>
        <div className="BadgeNew__hero">
          <img
            className="img-fluid BadgeNew_hero-image"
            src={header}
            alt="logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "TWITTER"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl={"https://s.gravatar.com/avatar/"}
              />
            </div>
            <div className="col">
            
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              >
                <h1 className="m-4">New Attendant</h1>
              </BadgeForm>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
