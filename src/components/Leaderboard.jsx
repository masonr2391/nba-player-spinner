import React, { useEffect, useState } from "react";
import { predictCareer, calcGoatPoints } from "../utils/goatPoints";

const LEADERBOARD_KEY = "nba_spinner_leaderboard";

function getLeaderboard() {
  return JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || "[]");
}

function saveLeaderboard(entries) {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(entries));
}

export default function Leaderboard({ newPlayer }) {
  const [entries, setEntries] = useState(getLeaderboard());
  const [published, setPublished] = useState(false);

  useEffect(() => {
    if (published && newPlayer) {
      const career = predictCareer(newPlayer.stats);
      const goatPoints = calcGoatPoints(career);
      const entry = {
        name: newPlayer.name,
        goatPoints,
        career,
        date: Date.now(),
      };
      const updated = [...entries, entry].sort((a, b) => b.goatPoints - a.goatPoints).slice(0, 10);
      saveLeaderboard(updated);
      setEntries(updated);
    }
    // eslint-disable-next-line
  }, [published]);

  return (
    <div className="leaderboard">
      <h2>GOAT Leaderboard</h2>
      <button disabled={published} onClick={() => setPublished(true)}>
        {published ? "Published!" : "Publish Player"}
      </button>
      <ol>
        {entries.map((e, i) => (
          <li key={e.name + e.date}>
            <span className={i === 0 ? "leader" : ""}>{e.name}</span>
            <span>GOAT Points: <b>{e.goatPoints}</b></span>
            <span className="career-mini">
              ({e.career.ppg} PPG, {e.career.championships} Chips, {e.career.awards} Awards)
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}