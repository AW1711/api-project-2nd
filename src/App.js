
import './App.css';
import React, { useState } from "react";
import CharacterInfoComponent from "./components/charInfo.js";
import MythicPlusComponent from './components/mythicPlus.js';
import RaidComponent from "./components/raidProg.js"

function App() {
  const [region, setRegion] = useState("");
  const [realm, setRealm] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [showCharacterInfo, setShowCharacterInfo] = useState(false);

  const handleFetchCharacterInfo = () => {
    if (region && realm && characterName) {
      setShowCharacterInfo(true);
    } else {
      alert("Please fill in all the required fields");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Your App</h1>
        <input
          type="text"
          placeholder="Region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Realm"
          value={realm}
          onChange={(e) => setRealm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Character Name"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
        <button onClick={handleFetchCharacterInfo}>Submit</button>

        {showCharacterInfo && (
          <CharacterInfoComponent
            region={region}
            realm={realm}
            characterName={characterName}
          />
        )}
        {showCharacterInfo && (
          <MythicPlusComponent
            region={region}
            realm={realm}
            characterName={characterName}
          />
        )}
        {showCharacterInfo && (
          <RaidComponent
            region={region}
            realm={realm}
            characterName={characterName}
          />
        )}
      </header>
    </div>
  );
}

export default App;