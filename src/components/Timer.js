/** @format */

import { useEffect, memo, useRef } from "react";

function Timer({ timerCount, setTimerCount }) {
  const ref = useRef();

  useEffect(() => {
    ref.current = setInterval(() => setTimerCount((pre) => pre + 1), 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  //note that the following are derived states
  const seconds = `0${Math.floor(timerCount % 60)}`.slice(-2);
  const minutes = `0${Math.floor((timerCount / 60) % 60)}`.slice(-2);

  const styles = {
    margin: "0px",
  };

  return (
    <div style={styles} className="theTimer">
      {minutes + ":" + seconds}
    </div>
  );
}

export default memo(Timer);
