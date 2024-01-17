import React, { useState, useEffect } from "react";
import { defaultBoard } from "./defaultBoard";
import "./board.css";
function Board() {
  const [board, setBoard] = useState(defaultBoard);
  const [pairs, setPairs] = useState([]);
  const [firstCheck, setFirstCheck] = useState(true);
  const [boxOne, setBoxOne] = useState("");
  const [boxTwo, setBoxTwo] = useState("");
  const [boxOneIDX, setBoxOneIDX] = useState("");
  const [boxTwoIDX, setBoxTwoIDX] = useState("");

  let PICTURES = [
    "src/assets/Emote1_56x56.png",
    "src/assets/Emote2_56x56.png",
    "src/assets/Emote3_56x56.png",
    "src/assets/Emote4_56x56.png",
    "src/assets/Emote5_56x56.png",
  ];

  useEffect(() => {
    createPairs();
  }, [defaultBoard]);

  useEffect(() => {
    checkPair();
  }, [boxTwoIDX]);
  // boxTwo
  function createPairs() {
    let pairs = PICTURES.concat(PICTURES);
    const shuffle = (pairs) => {
      return pairs.sort(() => Math.random() - 0.5);
    };
    setPairs(pairs);
    // setPairs(shuffle(pairs));
  }

  function reset() {
    createPairs();
    setBoard(defaultBoard);
  }

  function check(idx) {
    if (board[idx].toggle) return;
    if (firstCheck) {
      setBoxOne(pairs[idx]);
      setBoxOneIDX(idx);
    } else {
      setBoxTwo(pairs[idx]);
      setBoxTwoIDX(idx);
    }
    setFirstCheck(!firstCheck);
    checkToggle(idx);
  }

  function checkToggle(idx) {
    console.log("checkToggle");
    setBoard(
      board.map((box, i) =>
        idx == i
          ? {
              ...box,
              toggle: true,
              pairFound: false,
            }
          : box
      )
    );
  }

  function checkPair() {
    console.log("checkPair");

    console.log(`previous:${boxOne}, current:${boxTwo}`);
    if (boxOne == boxTwo) {
      console.log(`Slot ${boxOne} and ${boxTwo} matches!`);
      foundPair();
    } else {
      console.log(`Slot ${boxOne} and ${boxTwo} DO NOT MATCH!`);
      unCheckToggle();
    }
  }
  function unCheckToggle() {
    console.log(boxOneIDX, boxTwoIDX, "hiding previous select boxes");
    setBoard(
      board.map((box, i) =>
        !box.pairFound && box.toggle ? { ...box, toggle: false } : box
      )
    );
    setBoxOneIDX("");
    setBoxTwoIDX("");
  }

  function foundPair() {
    setBoard(
      board.map((box, i) =>
        boxOneIDX == i || boxTwoIDX == i ? { ...box, pairFound: true } : box
      )
    );
    console.log(board);
  }

  return (
    <>
      <button onClick={() => reset()}>reset game</button>

      <div className="box-container">
        {board.map((box, idx) => (
          <div key={idx} className="box" onClick={() => check(idx)}>
            <span className={`${box.toggle ? "hide" : "show"}`}>?</span>
            <img
              src={pairs[idx]}
              alt={pairs[idx]}
              className={`${box.toggle ? "show" : "hide"}`}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Board;
