import React from "react";
import PropTypes from "prop-types";
import "./GamertagListItem.css";

const GamertagListItem = ({ accountId, gamertag }) => {
  return (
    <div className="gamertag-list-item_container">
      <span className="gamertag-list-item_accountId-text">{accountId}</span>
      <span className="gamertag-list-item_gamertag-text">{gamertag}</span>
    </div>
  );
};

GamertagListItem.propTypes = {
  accountId: PropTypes.string,
  gamertag: PropTypes.string,
};

export default GamertagListItem;
