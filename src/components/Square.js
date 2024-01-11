/** @format */

import "./Square_style.css";

export default function Square({
  symbol,
  handleClick,
  id,
  currentValue,
  player,
}) {
  return (
    <div
      className={`square ${currentValue === "o" ? "o" : "x"}`}
      onClick={() => handleClick(id, currentValue)}
      id={id}
    >
      {/* (if it was empty AND display nothing) OR (if it was true AND display O) OR (if it was flase AND display X)  */}
      {(currentValue === "empty" && " ") ||
        (currentValue === "o" && "O") ||
        "X"}
    </div>
  );
}
