import { useEffect, useState } from "react";
import WebGLClock from "./WebGLClock";
import { digits } from "./digits";
import "./webgl.css";

const getTimeDigits = () => {
  const now = new Date();
  return [
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  ].flatMap(v => String(v).padStart(2, "0").split("").map(Number));
};

export default function App() {
  const [time, setTime] = useState(getTimeDigits());

  useEffect(() => {
    const tick = () => {
      setTime(getTimeDigits());
      setTimeout(tick, 1000 - Date.now() % 1000);
    };
    tick();
  }, []);

  return (
    <div className="webgl-app">
      {time.map((digit, i) => (
        <div className="digit" key={i}>
          {digits[digit].map((cfg, j) => (
            <WebGLClock key={j} h={cfg.h} m={cfg.m} />
          ))}
        </div>
      ))}
    </div>
  );
}
