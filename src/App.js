import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let [sec, setSec] = useState(0);
  let [min, setMin] = useState(0);
  let [hour, setHour] = useState(0);
  const [interv, setInterv] = useState();

  const watch = () => {
    setSec(sec++);
    if (sec >= 60) {
      sec = 0;
      setMin((min += 1));
      if (min >= 60) {
        min = 0;
        sec = 0;
        setHour((hour += 1));
      }
    }
  };

  const startTime = () => {
    setInterv(setInterval(watch, 1000));
  };

  const stopTime = () => {
    clearInterval(interv);
  };

  const resetTime = () => {
    setSec(0);
    setMin(0);
    setHour(0);
  };

  return (
    <div className="all">
      <h1 className="title">
        <i className="fas fa-stopwatch"></i>React stopwatch
      </h1>
      <p className="text">
        {hour}:{min}:{sec}
      </p>
      <button onClick={startTime} className="button">
        <i className="fas fa-play"></i>
      </button>
      <button onClick={stopTime} className="button">
        <i className="fas fa-pause"></i>
      </button>
      <button onClick={resetTime} className="button">
        <i className="fas fa-refresh"></i>
      </button>
    </div>
  );
}
