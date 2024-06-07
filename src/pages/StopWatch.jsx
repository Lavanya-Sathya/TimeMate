import React, { useEffect, useState } from "react";
import { FaPause, FaPlay, FaUndo } from "react-icons/fa";

const StopWatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isTimer, setIsTimer] = useState(false);

  // to add zero if time is less than 10
  const padZero = (time) => {
    return time < 10 ? "0" + time : time;
  };

  useEffect(() => {
    let timer;
    // for every second stop watch update will be called
    if (isTimer) {
      timer = setInterval(() => {
        setTime((prevState) => {
          let { hours, minutes, seconds } = prevState;
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
              minutes = 0;
              hours++;
            }
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimer]);

  const handleReset = () => {
    setIsTimer(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="font-bold text-lg">Stop Watch</h2>
      <div className="my-8">
        <div className="bg-clockColor w-56 h-56 rounded-full shadow-xl flex  justify-center items-center">
          <h3 className="font-bold text-3xl text-title">{`${padZero(
            time.hours
          )} : ${padZero(time.minutes)} : ${padZero(time.seconds)}`}</h3>
        </div>
      </div>
      <div className="flex  gap-6 ">
        {!isTimer ? (
          <FaPlay
            size={25}
            onClick={() => setIsTimer(true)}
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
