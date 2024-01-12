/** @format */

import { useState, useEffect, memo, useRef } from "react";

function Timer(props) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (props.restart) setCount(0);
    else ref.current = setInterval(() => setCount((pre) => pre + 1), 1000);
    return clearInterval(ref.current);
  }, [props.restart]);

  let seconds = `0${Math.floor(count % 60)}`.slice(-2);
  let minutes = `0${Math.floor((count / 60) % 60)}`.slice(-2);

  return <div className="theTimer">{minutes + ":" + seconds}</div>;
}

export default memo(Timer);
