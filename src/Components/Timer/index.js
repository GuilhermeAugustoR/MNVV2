import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
// import PropTypes from "prop-types";

const Timer = ({ expiryTimestamp}) => {
  const [disable, setDisable] = useState(false);

  const { seconds, minutes, hours, days, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => {},
    });

  return (
    <div style={{ textAlign: "center" }}>
      {/* {disable === false && ( */}
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

          {/* <div style={{ margin: "auto" }}>
          <button onClick={start}>start</button>
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
      {/* )} */}
      {/* {disable === true && (
        <div>
          <h1 style={{ fontSize: 60, marginBottom: 40, margin: "auto" }}>
            "Pois onde se reunirem dois ou três em meu nome, ali eu estou no meio
            deles".
            Mateus 18:20
          </h1>
        </div>
      )} */}
    </div>
  );
};

// Timer.propTypes = {
//   onClick: PropTypes.func,
// };

export default Timer;
