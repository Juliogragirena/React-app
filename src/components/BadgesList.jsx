import React from "react";
import { Link } from "react-router-dom";
import BadgesListItem from "../components/BadgesListItem";

function useSearchBadges(Badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(Badges);
  React.useMemo(() => {
    const result = Badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [Badges, query]);

  return { setQuery, filteredBadges };
}

function BadgesList({ Badges }) {
  const { query, setQuery, filteredBadges } = useSearchBadges(Badges);

  if (filteredBadges.length === 0) {
    return (
      <>
        <div className="form-group">
          <label htmlFor="Filter Badges"></label>
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
            type="text"
            className="form-control"
          />
        </div>
        <div>
          <h3>No Encontramos ningun badge</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new Badge
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="form-group">
        <label htmlFor="Filter Badges"></label>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          type="text"
          className="form-control"
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li className="" key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BadgesList;
