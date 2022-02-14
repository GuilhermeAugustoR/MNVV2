import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 80,
            color: "white",
            width: "100%",
          }}
        >
          <h1 style={{ fontSize: 53 }}>
            {days}
            <p style={{ fontSize: 32 }}>Dias</p>
          </h1>
          <h1 style={{ fontSize: 53 }}>
            {hours}
            <p style={{ fontSize: 32 }}>Horas</p>
          </h1>
          <h1 style={{ fontSize: 53 }}>
            {minutes} <p style={{ fontSize: 32 }}>Min</p>
          </h1>
          <h1 style={{ fontSize: 53 }}>
            {seconds}
            <p style={{ fontSize: 32 }}>Sec</p>
          </h1>
        </div>
        {/* <div style={{margin: "auto" }}>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button>
          <button
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 1800);
              restart(time);
            }}
          >
            Restart
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Timer;
