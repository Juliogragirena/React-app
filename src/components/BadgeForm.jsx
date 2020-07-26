import React from "react";
import { Link } from "react-router-dom";

class BadgeForm extends React.Component {
  //     handleChange = (e) => {
  // //     console.log({
  // //       name: e.target.name,
  // //       value: e.target.value,
  // //       e,
  // //     });
  //     this.setState({
  //         [e.target.name]: e.target.value,
  //     })
  //   };

  handleClick = (e) => {
    e.preventDefault();
    // console.log("the form was submit");
  };
  render() {
    // console.log(this.state)

    return (
      <>
        <form
          className="mb-4 shadow p-3 mb-5 bg-white rounded"
          onSubmit={this.props.onSubmit}
        >
          {this.props.children}
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Write your first Name"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <div className="button d-flex justify-content-start">
            <button
              onSubmit={this.props.onSubmit}
              className="btn btn-primary m-2 "
            >
              Save
            </button>
            <Link to="/badges">
              <button className="btn btn-danger m-2 ">All Badges</button>
            </Link>
          </div>
          {this.props.error && (
            <div className="alert alert-danger mt-2">
              {this.props.error.message}
            </div>
          )}
        </form>
      </>
    );
  }
}

export default BadgeForm;
