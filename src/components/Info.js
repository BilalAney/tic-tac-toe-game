/** @format */
import Timer from "./Timer";

export default function Info({ player, count, win }) {
  return (
    <div className="theInfo">
      <h1>TIC-TAC-TOE</h1>
      <h2>Player {player ? "1" : "2"}</h2>
      <h2>Count: {count}</h2>
      <Timer restart={win} />
    </div>
  );
}
