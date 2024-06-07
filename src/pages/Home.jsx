// Rendering the time and date
import React, { useEffect, useState } from "react";

const Home = () => {
  const date = new Date();
  const dayValues = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const monthsValues = [
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
  let dateVal = date.getDate();
  let month = monthsValues[date.getMonth()];
  let year = date.getFullYear();
  let day = dayValues[date.getDay()];

  //  update the time for every second
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

  // to add zero if time is less than 10
  const padZero = (time) => {
    return time < 10 ? "0" + time : time;
  };

  return (
    <div className="mt-5 text-center">
      <h1 className="text-3xl pb-2  ">
        {padZero(curHour)} : {padZero(curMin)} : {padZero(curSec)}{" "}
        <span className="text-2xl">{isAMPM}</span>
      </h1>
      <h3>
        {day} , {dateVal} - {month} - {year}
      </h3>
    </div>
  );
};

export default Home;
