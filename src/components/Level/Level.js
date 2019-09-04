import React from "react";
import { getViewState } from "state/ask";
import { connect } from "react-redux";

import { faEquals, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Level = ({ acceptedTotal, rejectedTotal, pointTotal }) => {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Rejected Total (total points from accepts)</p>
          <p className="acceptedTotal title">{acceptedTotal}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <FontAwesomeIcon icon={faPlus} />
      </div>

      <div className="level-item has-text-centered">
        <div>
          <p className="heading">
            Rejected Total (total points from rejections)
          </p>
          <p className="rejectedTotal title">{rejectedTotal}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <FontAwesomeIcon icon={faEquals} />
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Total Score</p>
          <p className="pointTotal title">{pointTotal}</p>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return getViewState(state.asks);
};

export default connect(mapStateToProps)(Level);
