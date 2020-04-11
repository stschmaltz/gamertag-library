import React from "react";
import GamertagList from "../../components/GamerTagList";

const gamertagList = [
  { accountId: "Playstation 4", gamertag: "Schmaltzy" },
  { accountId: "Xbox", gamertag: "somethingElse" },
  { accountId: "battle.net", gamertag: "also something else" },
  { accountId: "test", gamertag: "reeeee" },
  { accountId: "test2", gamertag: "normies" },
];

const Main = () => {
  return (
    <div className="main_container">
      <GamertagList gamertagList={gamertagList} />
    </div>
  );
};

export default Main;
