import Square from "./Square";
import "./Board_style.css";

export default function Board(props) {
  let squares = [];

  props.currentBoard.forEach((ele) => {
    squares.push(
      <Square
        player={props.player}
        handleClick={props.handleClick}
        id={ele.id}
        currentValue={ele.value}
      />
    );
  });

  return <div className="theBoard">{squares}</div>;
}
