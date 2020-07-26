import React from "react";

import { Link } from "react-router-dom";
import Logo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function BadgeDetails({ badge, onCloseModal, onOpenModal, isOpen , onDeleteBadge }) {
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
              email={badge.email}
            />
          </div>
          <div className="col text-center">
            <h2>Actions</h2>
            <div>
              <Link
                className="btn btn-primary btn-block mb-4"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button
                onClick={onOpenModal}
                className="btn btn-danger btn-block"
              >
                Delete
              </button>
              <DeleteBadgeModal onDeleteBadge={onDeleteBadge} isOpen={isOpen} onClose={onCloseModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
