import React from "react";
import { predictCareer, calcGoatPoints } from "../utils/goatPoints";

export default function CareerPrediction({ name, stats, onReset }) {
  const career = predictCareer(stats);
  const goatPoints = calcGoatPoints(career);

  return (
    <div className="career-prediction">
      <h2>{name}'s Predicted Career</h2>
      <ul>
        <li>Points Per Game: <b>{career.ppg}</b></li>
        <li>Assists Per Game: <b>{career.apg}</b></li>
        <li>Rebounds Per Game: <b>{career.rpg}</b></li>
        <li>Championships: <b>{career.championships}</b></li>
        <li>Awards: <b>{career.awards}</b></li>
        <li>GOAT Points: <b>{goatPoints}</b></li>
      </ul>
      <button className="reset-btn" onClick={onReset}>Create Another Player</button>
    </div>
  );
}