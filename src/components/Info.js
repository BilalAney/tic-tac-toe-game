/** @format */
import { memo, useState } from "react";
import Timer from "./Timer";

function Info({ player, count, restart }) {
  const [timerCount, setTimerCount] = useState(0);
  return (
    <div className="theInfo">
      <h1>TIC-TAC-TOE</h1>
      <h2>Player {player ? "1" : "2"}</h2>
      <h2>Count: {count}</h2>
      <div className="timerCtn">
        <Timer timerCount={timerCount} setTimerCount={setTimerCount} />
        <button onClick={() => setTimerCount(0)}>Reset Timer</button>
      </div>
    </div>
  );
}

export default memo(Info);
