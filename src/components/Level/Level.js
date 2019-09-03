import React from "react";
import { getViewState } from "state/ask";
import { connect } from "react-redux";

import { faEquals, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ConnectedLevel = ({ asks }) => {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Rejected Total (total points from accepts)</p>
          <p className="acceptedTotal title">{asks.acceptedTotal}</p>
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
          <p className="rejectedTotal title">{asks.rejectedTotal}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <FontAwesomeIcon icon={faEquals} />
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Total Score</p>
          <p className="totalScore title">{asks.pointTotal}</p>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return { asks: getViewState(state.asks) };
};

const Level = connect(mapStateToProps)(ConnectedLevel);

export default Level;
