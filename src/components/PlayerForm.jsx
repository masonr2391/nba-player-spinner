import React, { useState } from "react";

export default function PlayerForm({ onSubmit }) {
  const [name, setName] = useState("");

  return (
    <form
      className="player-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (name.trim()) onSubmit(name.trim());
      }}
    >
      <label htmlFor="playerName">Enter your player's name:</label>
      <input
        id="playerName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. LeSpin James"
        maxLength={20}
        required
        autoFocus
      />
      <button type="submit">Continue</button>
    </form>
  );
}