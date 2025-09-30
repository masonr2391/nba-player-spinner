import React, { useState } from "react";
import "./styles/App.css";
import PlayerForm from "./components/PlayerForm";
import StatSpinner from "./components/StatSpinner";
import CareerPrediction from "./components/CareerPrediction";
import Leaderboard from "./components/Leaderboard";
import { nba2kStats } from "./utils/nba2kStats";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [spunStats, setSpunStats] = useState({});
  const [isSpinning, setIsSpinning] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);

  const handlePlayerName = (name) => setPlayerName(name);

  const handleSpinStats = (stats) => {
    setSpunStats(stats);
    setShowPrediction(true);
    setIsSpinning(false);
  };

  const handleReset = () => {
    setPlayerName("");
    setSpunStats({});
    setShowPrediction(false);
    setIsSpinning(false);
  };

  return (
    <div className="app-container">
      <h1>NBA Player Spinner</h1>
      {!playerName ? (
        <PlayerForm onSubmit={handlePlayerName} />
      ) : !showPrediction ? (
        <StatSpinner
          stats={nba2kStats}
          onFinish={handleSpinStats}
          isSpinning={isSpinning}
        />
      ) : (
        <>
          <CareerPrediction name={playerName} stats={spunStats} onReset={handleReset} />
          <Leaderboard newPlayer={{ name: playerName, stats: spunStats }} />
        </>
      )}
      <footer>Made with ❤️ by masonr2391 | Powered by NBA2K26 stats</footer>
    </div>
  );
}

export default App;