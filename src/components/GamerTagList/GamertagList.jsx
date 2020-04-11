import React, { useState } from "react";
import PropTypes from "prop-types";
import "./GamertagList.css";
import GamertagListItem from "../GamertagListItem";
import AddGamertagButton from "../AddGamertagButton";

const ModalComponent = () => {
  return <div className="gamertag-list_modal">THIS IS A MODAL</div>;
};

const GamertagList = ({ gamertagList }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="gamertag-list_container">
      {showModal && <ModalComponent />}
      Gamertags:
      <AddGamertagButton
        onClickFunction={() => {
          setShowModal(true);
        }}
      />
      <ul className="gamertag-list_list">
        {gamertagList.map((gamertag) => (
          <GamertagListItem
            className="gamertag-list_list-item"
            key={gamertag.accountId}
            accountId={gamertag.accountId}
            gamertag={gamertag.gamertag}
          />
        ))}
      </ul>
    </div>
  );
};

GamertagList.propTypes = {
  gamertagList: PropTypes.arrayOf(
    PropTypes.shape({
      accountId: PropTypes.string.isRequired,
      gamertag: PropTypes.string.isRequired,
    })
  ),
};

export default GamertagList;
