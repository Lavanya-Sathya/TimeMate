import React, { useContext } from "react";
import Clock from "../components/Clock";
import { StateContext } from "../context/StateProvider";

const Pomodoro = () => {
  const {
    activeTag,
    setActiveTag,
    PomoTag,
    isTimerRunning,
    setisTimerRunning,
  } = useContext(StateContext);

  // to ensure that only one timer is running at any given point of time
  const handleActiveTag = (index, tag) => {
    if (isTimerRunning && activeTag !== index) {
      const confirmTimer = confirm(
        `would you like to start a ${tag}? Confirm to stop the current timer  `
      );
      if (confirmTimer) {
        setActiveTag(index);
        setisTimerRunning(false);
      }
    } else {
      setActiveTag(index);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="font-bold text-2xl text-bright">Pomodoro</h2>
      <div className="flex gap-2 bg-clockColor mt-2 mb-4 px-4 py-3 rounded-full">
        {/* Tags display and switch among tag*/}
        {PomoTag.map((tag, index) => (
          <button
            key={index}
            className={`${
              activeTag === index ? "bg-bright" : ""
            } px-2 py-1 rounded-2xl `}
            onClick={() => {
              handleActiveTag(index, tag);
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      <div>
        <Clock />
      </div>
    </div>
  );
};

export default Pomodoro;
