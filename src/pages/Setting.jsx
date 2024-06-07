import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/StateProvider";

const Setting = () => {
  const { color, theme, setTheme } = useContext(StateContext);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="font-bold text-xl">Setting</h2>
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
        {/* <button
          type="submit"
          // onClick={handleApplyChanges}
        >
          Apply
        </button> */}
      </div>
    </div>
  );
};

export default Setting;
