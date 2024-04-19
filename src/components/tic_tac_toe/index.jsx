import React, { useEffect, useState } from "react";
import "./styles.css";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winStatus, setWinStatus] = useState("");

  function handleClick(id) {
    if (squares[id] != "" || winStatus != "") {
      return;
    }

    let copyArr = [...squares];
    if (isXTurn) {
      copyArr[id] = "X";
    } else {
      copyArr[id] = "O";
    }
    setSquares(copyArr);
    setIsXTurn(!isXTurn);
  }

  function checkWinner() {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let comb of winningPattern) {
      if (
        squares[comb[0]] === squares[comb[1]] &&
        squares[comb[1]] === squares[comb[2]] &&
        squares[comb[0]] !== ""
      ) {
        setWinStatus(`${squares[comb[0]]} won the game!`);
        return;
      }
    }

    if(squares.every((square)=> square !=='')){
        setWinStatus(`draw`);
    }
  }

  function resetBoard() {
    let newarr = Array(9).fill("");

    setSquares(newarr);
    setIsXTurn(true);
    setWinStatus("");
  }

//   console.log(squares);

  useEffect(() => {
    checkWinner();
  }, [squares, isXTurn]);

  return (
    <div className="tic_tac_container">
      <h1>Tic-Tac-Toe</h1>
      {/* {squares.map((square, id) => (
        <Square onClick={() => handleClick(id)} value={square} />
      ))} */}
      <div className="row">
        <Square onClick={() => handleClick(0)} value={squares[0]} />
        <Square onClick={() => handleClick(1)} value={squares[1]} />
        <Square onClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="row">
        <Square onClick={() => handleClick(3)} value={squares[3]} />
        <Square onClick={() => handleClick(4)} value={squares[4]} />
        <Square onClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="row">
        <Square onClick={() => handleClick(6)} value={squares[6]} />
        <Square onClick={() => handleClick(7)} value={squares[7]} />
        <Square onClick={() => handleClick(8)} value={squares[8]} />
      </div>

      {<p>{isXTurn ? "X" : "O"} Turn</p>}

      {winStatus && (
        <div className="winstatus">
          <h1>{winStatus}</h1>
          <button onClick={resetBoard}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
