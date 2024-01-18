import React from "react";

import GoBack from "../components/GoBack";
import Board from "../components/memory/Board";
const Memory = () => {
  return (
    <div className="game-container">
      <div className="memory-container">
        <GoBack />
        <span></span>
        <h1>Memory</h1>
      </div>
      <Board />
    </div>
  );
};

export default Memory;
