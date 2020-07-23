import React from "react";
import twitter from "../images/twitter.svg";

class BadgesList extends React.Component {
  render() {
    const { Badges } = this.props;
    // console.log(Badges)
    console.log(Badges);
    return (
      <ul className="list-unstyled">
        {Badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="container bg-dark text-white m-3 border rounded">
                <div className="row">
                  <div className="col-3 d-flex ">
                    <img
                      className="aling-self-center mx-auto my-auto rounded-circle"
                      src={badge.avatarUrl}
                      alt="avatar"
                    />
                  </div>
                  <div className="col">
                    <p className="m-1 ">
                      <strong>
                        {badge.firstName} {badge.lastName}
                      </strong>
                    </p>
                    <div className="container">
                      <div className="row">
                        <div className="col-1 d-flex aling-items-center p1">
                          <img src={twitter} alt="twitter-icon" width="30px" />
                        </div>
                        <div className="col">
                          <a href="/">
                            <p className="m-1 text-primary">@{badge.twitter}</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <p className="m-1">{badge.jobTitle}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
