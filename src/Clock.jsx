import { useRef, useEffect } from "react";

const normalizeAngle = (next, prev) => {
  const delta = ((next - prev) % 360 + 360) % 360;
  return prev + delta;
};

const randomAngle = () => Math.floor(Math.random() * 360);

export default function Clock({ h, m, initial }) {
  const prev = useRef({ h: 0, m: 0 });

  const hourAngle   = normalizeAngle(h, prev.current.h);
  const minuteAngle = normalizeAngle(m, prev.current.m);

  useEffect(() => {
    prev.current = { h: hourAngle, m: minuteAngle };
  }, [hourAngle, minuteAngle]);

  return (
    <div
      className="clock"
      style={{
        "--hour-angle": initial ? randomAngle() : hourAngle,
        "--minute-angle": initial ? randomAngle() : minuteAngle,
        "--dur": initial ? 1 : 0.4
      }}
    />
  );
}
