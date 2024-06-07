import React, { useEffect, useState } from "react";

const Home = () => {
  const date = new Date();
  const monthsName = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [isAMPM, setIsAMPM] = useState("AM");
  const [curHour, setCurHour] = useState(date.getHours());
  const [curMin, setCurMin] = useState(date.getMinutes());
  const [curSec, setCurSec] = useState(date.getSeconds());
  let day = date.getDate();
  let month = monthsName[date.getMonth()];
  let year = date.getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      if (curHour > 12) {
        setCurHour(curHour - 12);
        setIsAMPM("PM");
      } else {
        setIsAMPM("AM");
      }
      setCurMin(date.getMinutes());
      setCurSec(date.getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, [curHour, curMin, curSec]);
  return (
    <div>
      <h1 className="text-red">
        {curHour < 10 ? "0" + curHour : curHour} :{" "}
        {curMin < 10 ? "0" + curMin : curMin} :{" "}
        {curSec < 10 ? "0" + curSec : curSec} {isAMPM}
      </h1>
      <h3>
        {day} - {month} - {year}
      </h3>
    </div>
  );
};

export default Home;
