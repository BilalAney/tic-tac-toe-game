/** @format */

import "./Square_style.css";

export default function Square({
  backgroundColor,
  color,
  handleClick,
  id,
  currentValue,
  celebrateClass,
}) {
  const styles = {
    backgroundColor,
    color,
  };
  return (
    <div
      style={styles}
      className={`square ${currentValue === "o" ? "o" : "x"} ${celebrateClass}`}
      onClick={() => handleClick(id, currentValue)}
      id={id}
    >
      {/* (if it was empty AND display nothing) OR (if it was true AND display O) OR (if it was flase AND display X)  */}
      {(currentValue === "empty" && " ") || (
        <span>{currentValue === "o" ? "O" : "X"}</span>
      )}
    </div>
  );
}
