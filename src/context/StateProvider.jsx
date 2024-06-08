import React, { createContext, useState, useEffect } from "react";
export const StateContext = createContext();
const StateProvider = ({ children }) => {
  // state to maintain the theme
  const color = ["Blue", "Dark", "Light", "Yellow", "Red", "Green"];
  const [theme, setTheme] = useState("blue");

  // localstorge

  // to pad zero for time
  const padZero = (time) => {
    return time < 10 ? "0" + time : time;
  };

  // POMODORO Section's Context
  // to keep track which tag is active
  const [activeTag, setActiveTag] = useState(0);
  const PomoTag = ["Work", "Short Break", "Long Break"];

  // to track timer for each section
  const [workTime, setWorkTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(30 * 60);

  // to keep track of initial time
  const [time, setTime] = useState(0);
  const [initTime, setInitTime] = useState(0);

  // to track whether the timer is running are not
  const [isTimerRunning, setisTimerRunning] = useState(false);

  // to check which is the active tag and set time time based on active tag
  useEffect(() => {
    switch (activeTag) {
      case 0:
        setTime(workTime);
        setInitTime(workTime);
        break;
      case 1:
        setTime(shortBreakTime);
        setInitTime(shortBreakTime);
        break;
      case 2:
        setTime(longBreakTime);
        setInitTime(longBreakTime);
        break;
      default:
        break;
    }
  }, [activeTag, workTime, shortBreakTime, longBreakTime]);

  return (
    <StateContext.Provider
      value={{
        color,
        theme,
        setTheme,
        activeTag,
        setActiveTag,
        PomoTag,
        time,
        setTime,
        initTime,
        setInitTime,
        workTime,
        setWorkTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
        isTimerRunning,
        setisTimerRunning,
        padZero,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
