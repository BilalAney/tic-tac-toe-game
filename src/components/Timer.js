/** @format */

import { useState, useEffect, memo, useRef } from "react";

function Timer(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount((pre) => pre + 1), 1000);
    return () => clearInterval(id);
  }, []);

  //note that the following are derived states
  const seconds = `0${Math.floor(count % 60)}`.slice(-2);
  const minutes = `0${Math.floor((count / 60) % 60)}`.slice(-2);

  const styles = {
    margin: "25px",
  };

  return (
    <div style={styles} className="theTimer">
      {minutes + ":" + seconds}
    </div>
  );
}

export default memo(Timer);
