import React from "react";

import GoBack from "../components/GoBack";
import Board from "../components/memory/Board";
const Memory = () => {
  return (
    <div className="wrapper">
      <GoBack />
      Memory
      <Board />
    </div>
  );
};

export default Memory;
