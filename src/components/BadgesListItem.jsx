import React from "react";

import Gravatar from "../components/Gravatar";
import twitter from "../images/twitter.svg";

function BadgeListItem(props) {
  const { badge } = props;
  return (
    <div className="container shadow  m-3 rounded">
      <div className="row">
        <div className="col-3 d-flex ">
          <Gravatar
            className="aling-self-center py-2 px-auto rounded-circle  "
            email={badge.email}
            alt="avatar"
            name={`${badge.firstName} ${badge.lastName}`}
            width="100"
          />
        </div>
        <div className="col py-2">
          <p className="m-1 ">
            <strong>
              {badge.firstName} {badge.lastName}
            </strong>
          </p>
          <div className="container">
            <div className="row">
              <div className="col-1 d-flex aling-items-center ">
                <img src={twitter} alt="twitter-icon" width="30px" />
              </div>
              <div className="col">
                <p className="m-1 text-primary">@{badge.twitter}</p>
              </div>
            </div>
          </div>
          <p className="m-1">{badge.jobTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default BadgeListItem;
