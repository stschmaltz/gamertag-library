import React from "react";
import PropTypes from "prop-types";
import "./AddGamertagButton.css";

const AddGamertagButton = ({ onClickFunction }) => {
  return (
    <div>
      <button type="button" onClick={onClickFunction}>
        Add gamertag
      </button>
    </div>
  );
};

AddGamertagButton.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
};

export default AddGamertagButton;
