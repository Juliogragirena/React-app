import React from "react";

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
    console.log('the form was submit');
    
  };
  render() {
    // console.log(this.state)
    
    return (
      <div>
        <h1 className="m-4">New Attendant</h1>

        <form className="m-4">
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.firstName}
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
              value={this.props.lastName}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.email}
            />
         </div>
          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.twitter}
            />
          </div>
          
          <button
            onClick={this.handleClick}
            type="button"
            className="btn btn-primary btn-lg"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
