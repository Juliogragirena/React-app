import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeEdit.css";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });
    console.log(this.props);

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      this.setState({ loading: true, error: null });
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      console.log(this.props);
      this.props.history.push("/badges");
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
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <>
        <div className="BadgeEdit__hero">
          <img
            className="img-fluid BadgeEdit_hero-image"
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
                <h1 className="m-4">Edit Attendant</h1>
              </BadgeForm>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeEdit;
