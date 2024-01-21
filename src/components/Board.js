/** @format */

import Square from "./Square";
import "./Board_style.css";

export default function Board(props) {
  let squares = [];

  let coloringLine = [];

  switch (props.winLine) {
    case "row-1": {
      coloringLine = [0, 1, 2];
      break;
    }
    case "row-2": {
      coloringLine = [3, 4, 5];
      break;
    }
    case "row-3": {
      coloringLine = [6, 7, 8];
      break;
    }
    case "column-1": {
      coloringLine = [0, 3, 6];
      break;
    }
    case "column-2": {
      coloringLine = [1, 4, 7];
      break;
    }
    case "column-3": {
      coloringLine = [2, 5, 8];
      break;
    }
    case "slant-1": {
      coloringLine = [0, 4, 8];
      break;
    }
    case "slant-2": {
      coloringLine = [2, 4, 6];
      break;
    }
    default: {
      coloringLine = [];
    }
  }

  props.currentBoard.forEach((ele) => {
    squares.push(
      <Square
        player={props.player}
        handleClick={props.handleClick}
        id={ele.id}
        currentValue={ele.value}
        backgroundColor={props.player ? "#eb6f7e" : "#8eaeea"}
        celebrateClass={coloringLine.includes(ele.id) ? "won" : "normal"}
      />
    );
  });

  return <div className="theBoard">{squares}</div>;
}
