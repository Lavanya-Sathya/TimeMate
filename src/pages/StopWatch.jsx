import React, { useEffect, useState, useContext, useRef } from "react";
import { FaPause, FaPlay, FaUndo } from "react-icons/fa";
import { StateContext } from "../context/StateProvider";

const StopWatch = () => {
  const { padZero } = useContext(StateContext);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimer, setIsTimer] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    // for every second stop watch update will be called
    if (isTimer) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => clearInterval(intervalRef.current);
  }, [isTimer]);

  // start the timer
  const start = () => {
    setIsTimer(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  // reset the timer
  const handleReset = () => {
    setIsTimer(false);
    setElapsedTime(0);
  };

  // format the time
  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    return `${padZero(minutes)} : ${padZero(seconds)} : ${padZero(
      milliseconds
    )}`;
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="font-bold text-2xl text-bright">Stop Watch</h2>
      <div className="my-8">
        <div className="bg-clockColor w-56 h-56 rounded-full shadow-xl flex  justify-center items-center">
          <h3 className="font-bold text-3xl text-title">{formatTime()}</h3>
        </div>
      </div>
      <div className="flex  gap-6 ">
        {!isTimer ? (
          <FaPlay
            size={25}
            onClick={start}
            className="cursor-pointer hover:scale-x-110"
          />
        ) : (
          <FaPause
            size={25}
            onClick={() => {
              setIsTimer(false);
            }}
            className="cursor-pointer hover:scale-x-110"
          />
        )}
        <FaUndo
          size={25}
          className="cursor-pointer  hover:scale-x-110"
          onClick={handleReset}
        />
      </div>
    </div>
  );
};

export default StopWatch;
