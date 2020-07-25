import React from "react";

import { Link } from "react-router-dom";

import BadgesListItem from "../components/BadgesListItem";

class BadgesList extends React.Component {
  render() {
    if (this.props.Badges.length === 0) {
      return (
        <div>
          <h3>No Encontramos ningun badge</h3>
          <Link to="/badges/new" className="btn btn-primary">
            
            Create new Badge
          </Link>
        </div>
      );
    }
    const { Badges } = this.props;

    // console.log(this.state.data);
    // console.log(Badges)
    // console.log(Badges);
    return (
      <ul className="list-unstyled">
        {Badges.map((badge) => {
          return (
            <li className="" key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
