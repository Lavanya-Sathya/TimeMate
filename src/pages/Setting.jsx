import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/StateProvider";

const Setting = () => {
  const {
    color,
    theme,
    setTheme,
    workTime,
    setWorkTime,
    shortBreakTime,
    setShortBreakTime,
    longBreakTime,
    setLongBreakTime,
  } = useContext(StateContext);

  // to track whether the time is changed or not
  const [isUpdated, setIsUpdated] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");
  // to collect the form time
  const [formTime, setFormTime] = useState({
    work: workTime / 60,
    short: shortBreakTime / 60,
    long: longBreakTime / 60,
  });

  //handle form date change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormTime({ ...formTime, [name]: value });
  };

  // Hide the toast after the specified duration
  useEffect(() => {
    setTimeout(() => {
      setIsUpdated(false);
    }, 3000);
  }, [isUpdated]);

  // change time to user updated value
  const ChangeTime = () => {
    if (
      formTime.work !== workTime / 60 ||
      formTime.short !== shortBreakTime / 60 ||
      formTime.long !== longBreakTime / 60
    ) {
      setIsUpdated(true);
      setUpdateMessage("Time Updated Successfully");
      setWorkTime(formTime.work * 60);
      setShortBreakTime(formTime.short * 60);
      setLongBreakTime(formTime.long * 60);
    } else {
      setIsUpdated(true);
      setUpdateMessage("No Changes to Update");
    }
  };
  // theme will be applied
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center pb-5">
      <h2 className="font-bold text-2xl text-bright">Setting</h2>
      <div className="mt-6 flex gap-5 items-center">
        <h4>Select Theme</h4>
        <select
          className="text-select px-4 py-2 rounded-lg cursor-pointer focus:outline-none "
          id="themeSelect"
          value={theme}
          onChange={handleThemeChange}
        >
          {color.map((item, idx) => (
            <option
              key={idx}
              value={item.toLowerCase()}
              className="hover:text-primary"
            >
              {item}
            </option>
          ))}
        </select>
      </div>
      {/* Pomodoro Setting */}
      <div className="mt-6 mb-4 text-center ">
        <h2 className="font-bold text-lg text-bright mb-1">Pomodoro Setting</h2>
        <span className="mb-2">Time in mins</span>
        <div className="grid place-content-between gap-5">
          <div className="grid grid-flow-col place-content-between gap-5">
            <label htmlFor="work">Work Time</label>
            <input
              type="number"
              min="1"
              max="60"
              id="work"
              name="work"
              value={formTime.work}
              onChange={handleFormChange}
              className="text-select  py-2 text-center rounded-lg focus:outline-none "
            />
          </div>
          <div className="grid grid-flow-col place-content-between gap-5">
            <label htmlFor="work">ShortBreak Time</label>
            <input
              type="number"
              min="1"
              max="60"
              id="short"
              name="short"
              value={formTime.short}
              onChange={handleFormChange}
              className="text-select  py-2 text-center rounded-lg focus:outline-none "
            />
          </div>
          <div className="grid grid-flow-col place-content-between gap-5">
            <label htmlFor="work">LongBreak Time</label>
            <input
              type="number"
              min="1"
              max="60"
              id="long"
              name="long"
              value={formTime.long}
              onChange={handleFormChange}
              className="text-select  py-2 text-center rounded-lg focus:outline-none "
            />
          </div>
        </div>
        <button
          className="border-2 px-4 py-2 rounded-lg mt-6 hover:scale-95"
          onClick={ChangeTime}
        >
          Change Time
        </button>
        <div
          className={`${
            isUpdated ? "visible" : "hidden"
          } font-bold text-base text-bright mb-3 `}
        >
          {updateMessage}{" "}
        </div>
      </div>
    </div>
  );
};

export default Setting;
