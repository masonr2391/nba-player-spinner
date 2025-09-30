// Prediction logic (simple demo, tweak for realism!)

export function predictCareer(stats) {
  // Simple formula mapping stat values to career
  // You can adjust logic for realism!
  const ppg = Math.round((stats["3PT Shooting"] + stats["Dunking"]) / 10 + 8);
  const apg = Math.round(stats["Passing"] / 20 + 2);
  const rpg = Math.round((stats["Rebounding"] + stats["Defense"]) / 25 + 2);
  const championships = Math.floor((stats["Defense"] + stats["Speed"])/60);
  const awards = Math.floor((stats["3PT Shooting"] + stats["Passing"] + stats["Defense"])/60);

  return {
    ppg,
    apg,
    rpg,
    championships,
    awards
  };
}

export function calcGoatPoints(career) {
  // Weighted sum for leaderboard ranking
  return (
    career.ppg * 2 +
    career.apg * 1.2 +
    career.rpg * 1.2 +
    career.championships * 8 +
    career.awards * 5
  );
}