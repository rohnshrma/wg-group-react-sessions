import { useState } from "react";

const Timer = () => {
  console.log("Timer Re-rendered");
  const [time, setTime] = useState("Click button to get time");

  //   const showTime = () => {
  //     setTime(new Date().toLocaleTimeString());
  //   };

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  console.log(time);
  return (
    <div className="timer">
      <h2>{time}</h2>
      {/* <button onClick={showTime}>GET TIME</button> */}
    </div>
  );
};

export default Timer;
