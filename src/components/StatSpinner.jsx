import React, { useState } from "react";
import { spinStat } from "../utils/nba2kStats";

export default function StatSpinner({ stats, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerStats, setPlayerStats] = useState({});
  const [spinning, setSpinning] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);

  const statKeys = Object.keys(stats);

  const handleSpin = () => {
    setSpinning(true);
    setTimeout(() => {
      const spun = spinStat(stats[statKeys[currentIndex]]);
      setCurrentValue(spun);
      setPlayerStats({
        ...playerStats,
        [statKeys[currentIndex]]: spun,
      });
      setSpinning(false);
    }, 800);
  };

  const handleNext = () => {
    setCurrentValue(null);
    if (currentIndex < statKeys.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(playerStats);
    }
  };

  return (
    <div className="stat-spinner">
      <h2>Spin for: <span className="stat-name">{statKeys[currentIndex]}</span></h2>
      <button disabled={spinning || currentValue} onClick={handleSpin}>Spin</button>
      {spinning && <div className="spinner-animation">Spinning...</div>}
      {currentValue && (
        <div className="stat-result">
          <span>{currentValue}</span>
          <button onClick={handleNext}>
            {currentIndex === statKeys.length - 1 ? "See Prediction" : "Next Stat"}
          </button>
        </div>
      )}
    </div>
  );
}