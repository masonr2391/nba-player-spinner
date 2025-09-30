// NBA2K26 main stats (example set, adjust as needed)
export const nba2kStats = {
  "3PT Shooting": { min: 40, max: 99, weights: [40,50,60,70,80,90,95,99] },
  "Dunking":      { min: 40, max: 99, weights: [40,50,60,70,80,90,95,99] },
  "Passing":      { min: 40, max: 99, weights: [40,50,60,70,80,90,95,99] },
  "Defense":      { min: 40, max: 99, weights: [40,50,60,70,80,90,95,99] },
  "Speed":        { min: 40, max: 99, weights: [40,50,60,70,80,90,95,99] },
  "Rebounding":   { min: 40, max: 99, weights: [40,50,60,70,80,90,95,99] }
};

// Rarity logic: Higher stat values are rarer!
export function spinStat(statObj) {
  // Assign weights inversely to stat rating (higher = rarer)
  // More common: 40-70, less common: 80-99
  const weights = [40,50,60,70,80,90,95,99];
  const chances = [25, 20, 18, 14, 10, 7, 4, 2]; // rarer at top end
  const total = chances.reduce((a, b) => a + b, 0);
  let rand = Math.floor(Math.random() * total);
  for (let i = 0; i < chances.length; i++) {
    if (rand < chances[i]) return weights[i];
    rand -= chances[i];
  }
  return weights[0];
}