import React from "react";
import { BiHourglass } from "react-icons/bi";
import { FiHome, FiSettings } from "react-icons/fi";
import { MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="text-3xl flex justify-center items-center gap-6 px-2 py-5 border-b-2">
        <Link to="/" className="hover:scale-90 cursor-pointer">
          <FiHome />
        </Link>
        <Link to="/pomodoro" className="hover:scale-90 cursor-pointer">
          <BiHourglass />
        </Link>
        <Link to="/stopwatch" className="hover:scale-90 cursor-pointer">
          <MdTimer />
        </Link>
        <Link to="/setting" className="hover:scale-90 cursor-pointer">
          <FiSettings />
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className=" p-3 text-center">
          <h1 className="text-4xl font-bold pb-2 text-title">TimeMate</h1>
          <small className="text-center text-base">
            Be productive the right way.
          </small>
        </div>
      </div>
    </>
  );
};

export default Header;
