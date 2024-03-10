/** @format */
"use client";

import Image from "next/image";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [isActive, setSetActive] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
        console.log('This will run after 1 second unless cleared.');
      }, 1000);
    // timer end
    if (isActive && hours === 0 && minutes === 0 && seconds === 0) {
      console.log("time complted");
      setSetActive(false);
    }
    function decrementTime() {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        console.log("time complted");
        clearTimeout(timeout);
        setSetActive(false);
      } else {
        console.log("else condtion");
        setSeconds((preSeconds) => (preSeconds === 0 ? 59 : preSeconds - 1));
        if (seconds === 0) {
          setMinute((preMinutes) => (preMinutes === 0 ? 59 : preMinutes - 1));

          if (minutes === 0) {
            setHours((preHours) => Math.max(0, preHours - 1));
          }
        }
      }
    }
    if (isActive && (hours > 0 || minutes > 0 || seconds > 0)) {
      timeout = setTimeout(decrementTime, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [hours, minutes, seconds, isActive]);

  function toggleTimer() {
    setSetActive(!isActive);
  }

  function handleResetTimer() {
    setSetActive(false);
    setHours(0);
    setMinute(0);
    setSeconds(10);
  }

  const disableStartBtn = hours === 0 && minutes === 0 && seconds === 0;

  return (
    <div className="flex bg-white-800 text-black min-h-screen items-center justify-center p-8 flex-col">
      {/* min */}
      {/* sec */}

      {/* timers */}
      <main className="flex flex-col  gap-8 ">
        <section className="flex gap-5  text-6xl">
          {/* hrs */}
          <div className="flex items-start gap-1 flex-col ">
            <select
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="bg-inherit  w-auto outline-none cursor-pointer  hover:opacity-80 hover:scale-105 transition-all"
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <option className="" key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <p className="text-sm ml-1 ">h</p>
          </div>
          {/* min */}

          <div className="flex items-start gap-1 flex-col ">
            <select
              value={minutes}
              onChange={(e) => setMinute(Number(e.target.value))}
              className="bg-inherit  w-auto outline-none cursor-pointer  hover:opacity-80 hover:scale-105 transition-all"
            >
              {Array.from({ length: 60 }).map((_, i) => (
                <option className="" key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <p className="text-sm ml-1 ">m</p>
          </div>

          {/* sec */}
          <div className="flex items-start gap-1 flex-col ">
            <select
              value={seconds}
              onChange={(e) => setSeconds(Number(e.target.value))}
              className="bg-inherit  w-auto outline-none cursor-pointer  hover:opacity-80 hover:scale-105 transition-all"
            >
              {Array.from({ length: 60 }).map((_, i) => (
                <option className="" key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <p className="text-sm ml-1 ">s</p>
          </div>
        </section>

        {/* buttuons */}
        <section className="flex gap-16 text-4xl ">
          <button
            onClick={handleResetTimer}
            className=" hover:opacity-80 hover:scale-105 transition-all"
          >
            <GrPowerReset />
          </button>
          <button
            className={` hover:opacity-80 hover:scale-105 transition-all ${
              disableStartBtn && "cursor-not-allowed"
            }  `}
            disabled={disableStartBtn}
            onClick={toggleTimer}
          >
            {isActive ? <FaCirclePause /> : <FaCirclePlay />}

            {/* <FaCirclePause /> */}
          </button>
          <div />
        </section>
      </main>
    </div>
  );
}