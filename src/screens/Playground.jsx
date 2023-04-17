import React, { useState } from "react";
import Square from "../components/Square";
import { Link } from "react-router-dom";

const Playground = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setisXturn] = useState(true);

  const handleClick = (index) => {
    const copyState = [...state];
    if (state[index] == null) {
      copyState[index] = isXturn ? "X" : "O";
      setState(copyState);
      setisXturn(!isXturn);
    }
  };
  const handleReset = () => {
    setState(Array(9).fill(null));
  };
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const winner = checkWinner();
  return (
    <div className="playground">
      {winner ? (
        <h3 className="winn-title">{winner} won the game!!</h3>
      ) : (
        <React.Fragment>
          <div className="square-box">
            <Square
              onClick={() => {
                handleClick(0);
              }}
              value={state[0]}
            />
            <Square
              onClick={() => {
                handleClick(1);
              }}
              value={state[1]}
            />
            <Square
              onClick={() => {
                handleClick(2);
              }}
              value={state[2]}
            />
          </div>
          <div className="square-box">
            <Square
              onClick={() => {
                handleClick(3);
              }}
              value={state[3]}
            />
            <Square
              onClick={() => {
                handleClick(4);
              }}
              value={state[4]}
            />
            <Square
              onClick={() => {
                handleClick(5);
              }}
              value={state[5]}
            />
          </div>
          <div className="square-box">
            <Square
              onClick={() => {
                handleClick(6);
              }}
              value={state[6]}
            />
            <Square
              onClick={() => {
                handleClick(7);
              }}
              value={state[7]}
            />
            <Square
              onClick={() => {
                handleClick(8);
              }}
              value={state[8]}
            />
          </div>
        </React.Fragment>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={handleReset}>Play again!!!</button>
        <Link to='/'><button>Home</button></Link>
      </div>
    </div>
  );
};

export default Playground;
