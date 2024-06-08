import React, { useContext, useEffect, useState } from "react";
import { FaPause, FaPlay, FaUndo } from "react-icons/fa";
import { StateContext } from "../context/StateProvider";

const Clock = () => {
  const {
    time,
    setTime,
    initTime,
    padZero,
    isTimerRunning,
    setisTimerRunning,
  } = useContext(StateContext);

  // keep track of progress
  const [progress, setProgress] = useState(30);
  useEffect(() => {
    setProgress(time / (initTime / 100));
  }, [time]);

  // useState to count down the time
  useEffect(() => {
    if (isTimerRunning && time > 0) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTimerRunning, time]);

  // to convert the milliseconds to minutes and seconds
  const getTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${padZero(minutes)} : ${padZero(seconds)}`;
  };
  return (
    <div>
      <div className="bg-clockColor w-64 h-64 rounded-full shadow-xl flex  justify-center items-center">
        <div
          className="w-52 h-52 rounded-full shadow-xl flex  justify-center items-center"
          style={{
            backgroundImage: `conic-gradient(var(--bright) ${progress}%, transparent ${progress}%)`,
          }}
        >
          <div className="bg-innerCircle w-48 h-48 rounded-full shadow-xl flex  justify-center items-center">
            <h2 className="font-bold text-3xl text-title">{getTime(time)}</h2>
          </div>
        </div>
      </div>
      <div className="flex  gap-6 my-6 justify-center">
        {!isTimerRunning ? (
          <FaPlay
            size={25}
            className="cursor-pointer hover:scale-x-110"
            onClick={() => setisTimerRunning(true)}
          />
        ) : (
          <FaPause
            size={25}
            className="cursor-pointer hover:scale-x-110"
            onClick={() => setisTimerRunning(false)}
          />
        )}
        <FaUndo
          size={25}
          className="cursor-pointer  hover:scale-x-110"
          onClick={() => {
            setTime(initTime);
            setisTimerRunning(false);
          }}
        />
      </div>
    </div>
  );
};

export default Clock;
