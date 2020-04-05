import React from "react";
import "./App.css";
import GamertagListItem from "./components/GamertagListItem";

function App() {
  const gamertagList = [
    { accountId: "Playstation 4", gamertag: "Schmaltzy" },
    { accountId: "Xbox", gamertag: "somethingElse" },
    { accountId: "battle.net", gamertag: "also something else" },
    { accountId: "test", gamertag: "reeeee" },
    { accountId: "test2", gamertag: "normies" }
  ];

  return (
    <div className="App">
      Gamertags:
      <ul className="app_gamertag-list">
        {gamertagList.map((gamertag) => (
          <GamertagListItem
            accountId={gamertag.accountId}
            gamertag={gamertag.gamertag}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
