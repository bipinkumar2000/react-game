import React, { useState, useRef } from "react";

import "./Home.css";
import Button from "../UI/Button";

const Home = () => {
  const [gameStatus, setGameStatus] = useState(false);

  const enteredValue = useRef();

  const [level, setLevel] = useState(0);

  const wordList = [
    {
      key: 1,
      value: "america",
      scrumbledWord: "ericama",
    },
    {
      key: 2,
      value: "seminar",
      scrumbledWord: "inarmes",
    },
  ];

  const gameStartHandler = () => {
    setGameStatus(true);
  };

  const gameHandler = () => {
    if (enteredValue.current.value === wordList[level].value) {
      enteredValue.current.value = "";

      let nextLevel = level + 1;
      if (nextLevel >= wordList.length) {
        setLevel(0);
      } else {
        setLevel(level + 1);
      }
    }
    alert("you win this level");
  };

  return (
    <div className="container">
      {!gameStatus && (
        <div className="card">
          <p>Welcome To React Game</p>
        </div>
      )}
      {!gameStatus && (
        <div className="card">
          <p>Lets start the game click the start button</p>
          <Button value="start" onSubmit={gameStartHandler} />
        </div>
      )}
      {gameStatus && (
        <div className="card">
          <p>{wordList[level].scrumbledWord}</p>
          <input ref={enteredValue} />
          <Button value="check it" onSubmit={gameHandler} />
        </div>
      )}
    </div>
  );
};

export default Home;
