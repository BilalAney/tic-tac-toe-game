/** @format */

import { useEffect } from "react";
import "./Score_Board_style.css";
/**
 * I have not used a state here in this component to handle the updating function
 * that is because the component is already getting re-render each time a player win
 * so, when a player win this will trigger a re-render, then then we can can calculate
 * or increase the count of the won player...
 * But there is one simple thing that we need, which is we want to preserve the count from
 * being destroyed. so i have used a ref to store it (REF is a component's memory but changing it wuld not trigger a re-render)
 */

export default function ScoreBoard(props) {
  useEffect(() => {
    if (props.win) {
      if (props.player) {
        props.setScoreBoard((pre) => ({ ...pre, o: pre.o + 1 }));
      } else props.setScoreBoard((pre) => ({ ...pre, x: pre.x + 1 }));
    }
  }, [props.win]);

  return (
    <div className="scoreBoard">
      <p>
        <span>PLAYER 1</span> [ {props.scoreBoard.o} : {props.scoreBoard.x} ]{" "}
        <span>PLAYER 2</span>
      </p>
    </div>
  );
}
