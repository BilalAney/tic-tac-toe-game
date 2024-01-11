/** @format */

import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import { useEffect, useRef, useState } from "react";

function App() {
  //Here I will declare a state of the board, which is an object wit squares types
  // "" indicates EMPTY SQUARE, false indicates X SQUARE and true indicated O SQUARE
  const [board, setBoard] = useState(newBoard());
  const [finsish, setFinish] = useState(false);

  useEffect(() => {
    const status = checkTheStatus();
    //changing the player
    player.current = !player.current;

    console.log(`Hey hey hey effect ran! the status => ${status}`);
    // if (status === "draw") {
    //   setBoard(newBoard());
    //   setFinish(true);
    // }

    // if (status === true || status === false) {
    //   console.log(`Hey!! Player ${status ? "1" : "2"} won the game!!!`);
    // }
  }, [board]);

  //Here the first player would be 'true' which means => Circles
  //And I will define the win status as a ref, bcz the component will re-render
  //When the finish state turns into true
  const player = useRef(true);
  const winRef = useRef(false);
  /**
   * Each time the component re-renders, because the board has changed
   * I will change the player (Flapping, true <--> false)
   * THE APP COMPONENT SHOULD NOT BE RENDERED UNLESS THE BOARD OBJECT CHANGES.
   *
   * WHY DIDN'T I USE A STATE
   * To avoid the useless re-rendering, since the component will re-render after the player selects
   * a square, so there is no need to rerender it to determine the player
   */

  /**
   *
   * @params no parameters at all
   *
   * @returns {boolean or string} true if "O" won, false if "X" won, and it returns
   * "draw" if there is no winner nor empty square, and "none" if there is no any case, the
   * playing is continuing...
   */
  function checkTheStatus() {
    let winBar = "no-win";

    board.forEach((ele, ind, arr) => {
      console.log(`hey => ${ind} = ${arr[ind].value}`);
      if (ele.value !== "empty") {
        if (ele.id === 0) {
          winBar =
            ele.value === arr[ind + 1].value && ele.value === arr[ind + 2].value
              ? "row-1"
              : ele.value === arr[ind + 3].value &&
                ele.value === arr[ind + 6].value
              ? "column-1"
              : ele.value === arr[ind + 4].value &&
                ele.value === arr[ind + 8].value
              ? "slant-1"
              : "";
        } else if (ele.id === 4) {
          winBar =
            ele.value === arr[ind - 1].value && ele.value === arr[ind + 1].value
              ? "row-2"
              : ele.value === arr[ind - 3].value &&
                ele.value === arr[ind + 3].value
              ? "column-2"
              : ele.value === arr[ind - 2].value &&
                ele.value === arr[ind + 2].value
              ? "slant-2"
              : "";
        } else if (ele.id === 8) {
          winBar =
            ele.value === arr[ind - 1].value && ele.value === arr[ind - 2].value
              ? "row-3"
              : ele.value === arr[ind - 3].value &&
                ele.value === arr[ind - 6].value
              ? "column-3"
              : "";
        }
      }
    });

    return winBar;
    // if (
    // //The following is the horizontal
    // (board[0] === board[1]) === board[2] ||
    // (board[3] === board[4]) === board[5] ||
    // (board[6] === board[7]) === board[8] ||
    // //The following is the vertical
    // (board[0] === board[3]) === board[6] ||
    // (board[1] === board[4]) === board[7] ||
    // (board[2] === board[5]) === board[8] ||
    // //The following is the slanting
    // (board[0] === board[4]) === board[8] ||
    // (board[2] === board[4]) === board[6]
    // )
    // {
    //   return true;
    // }
    // //the following is the full state
    // else{
    //   //Here I will count the not empty squares
    //   let count = 0;
    //   for(let item in board)
    //   {
    //     if(board[item] !== "")
    //       count++;
    //   }
    //   count === 9 ? "full" : "notfull"
    // }
  }

  function newBoard() {
    let newBoard = [];
    for (let i = 0; i <= 8; i++) {
      newBoard.push({
        id: i,
        value: "empty",
      });
    }

    return newBoard;
  }

  function fillSquare(id, currentValue) {
    //Updating the board object
    setBoard((pre) => {
      return pre.map((ele) =>
        ele.id === id
          ? {
              ...ele,
              value: player.current ? "o" : "x",
            }
          : ele
      );
    });
  }

  return (
    <div className="App">
      <Board
        handleClick={fillSquare}
        player={player.current}
        currentBoard={board}
      />
    </div>
  );
}

export default App;
