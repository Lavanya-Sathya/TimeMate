import React, { useContext } from "react";
import Clock from "../components/Clock";
import { StateContext } from "../context/StateProvider";

const Pomodoro = () => {
  const { activeTag, setActiveTag, PomoTag } = useContext(StateContext);

  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="font-bold text-2xl text-bright">Pomodoro</h2>
      <div className="flex gap-2 bg-clockColor mt-2 mb-4 px-4 py-3 rounded-full">
        {/* Tags display and switch among tag*/}
        {PomoTag.map((tag, id) => (
          <button
            key={id}
            className={`${
              activeTag === id ? "bg-bright" : ""
            } px-2 py-1 rounded-2xl `}
            onClick={() => {
              setActiveTag(id);
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
