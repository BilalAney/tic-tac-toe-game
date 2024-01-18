/** @format */
import "./App.css";
import Board from "./components/Board";
import Info from "./components/Info";
import { useEffect, useRef, useState } from "react";

//

function App() {
  //Here I will declare a state of the board, which is an object with squares types
  // "" indicates EMPTY SQUARE, false indicates X SQUARE and true indicated O SQUARE
  const [board, setBoard] = useState(newBoard());
  const [finsish, setFinish] = useState(false);
  const [win, setWin] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const status = checkTheStatus();
    bodyRef.current.classList.toggle("red");
    if (status === "no-win") {
      //changing the player
      player.current = !player.current;
      setCount((pre) => pre + 1);
      if (board.every((ele) => ele.value !== "empty")) {
        setFinish(true);
        setCount(0);
        setBoard(newBoard);
      }
    } else {
      setWin(true);
      setCount(0);
      setBoard(newBoard());
    }
  }, [board]);

  //Here the first player would be 'true' which means => Circles
  //And I will define the win status as a ref, bcz the component will re-render
  //When the finish state turns into true
  const player = useRef(true);
  const bodyRef = useRef(document.body);
  /**
   * Each time the component re-renders, because the board has changed
   * I will change the player (Flapping, true <--> false)
   * THE APP COMPONENT SHOULD NOT BE RE-RENDERED UNLESS THE BOARD OBJECT CHANGES.
   *
   * WHY DIDN'T I USE A STATE
   * To avoid the useless re-rendering, since the component will re-render after the player selects
   * a square, so there is no need to re-render it to determine the player
   */

  /**
   *
   * @params no parameters at all
   *
   * the board is as follows:
   *
   *  ---------------
   * | 0  |  1  |  2 |
   * | ------------- |
   * | 3  |  4  |  5 |
   * | ------------- |
   * | 6  |  7  |  8 |
   *  ---------------
   *
   * we will compare 0 with (if not "empty"):
   *
   * * 0+1 and 0+2 (row-1)
   * * 0+3 and 0+6 (column-1)
   * * 0+4 and 0+8 (slant-1)
   *
   * we will compare 4 with (if not "empty"):
   *
   * * 4-1 and 4+1 (row-2)
   * * 4-3 and 4+3 (column-2)
   * * 4-2 and 4+3 (slant-2)
   *
   * we will compare 8 with (if not "empty"):
   *
   * * 8-1 and 8-2 (row-3)
   * * 8-3 and 8-6 (column-3)
   *
   * after that the return is as follows.
   *
   * @returns {string} returns the bar that caused the win, for example, row-2, column-3
   * or slant-2.
   */
  function checkTheStatus() {
    let winBar = "no-win";

    board.forEach((ele, ind, arr) => {
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
              : "no-win";
        } else if (ele.id === 4) {
          if (winBar !== "no-win") return;
          winBar =
            ele.value === arr[ind - 1].value && ele.value === arr[ind + 1].value
              ? "row-2"
              : ele.value === arr[ind - 3].value &&
                ele.value === arr[ind + 3].value
              ? "column-2"
              : ele.value === arr[ind - 2].value &&
                ele.value === arr[ind + 2].value
              ? "slant-2"
              : "no-win";
        } else if (ele.id === 8) {
          if (winBar !== "no-win") return;
          winBar =
            ele.value === arr[ind - 1].value && ele.value === arr[ind - 2].value
              ? "row-3"
              : ele.value === arr[ind - 3].value &&
                ele.value === arr[ind - 6].value
              ? "column-3"
              : "no-win";
        }
      }
    });

    return winBar;
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
      <Info player={player.current} count={count} win={win} />
      <Board
        handleClick={fillSquare}
        player={player.current}
        currentBoard={board}
      />
    </div>
  );
}

export default App;
