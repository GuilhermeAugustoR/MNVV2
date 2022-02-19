import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/loading.json";

const CommingSoon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column'}}>
          <Lottie
            options={defaultOptions}
            autoPlay
            loop={true}
            style={{
              width: 600,
              height: 500,
            }}
          />
          <h1 style={{margin: 0}}>Em Breve Novidades...</h1>
        </div>
      </div>
    </>
  );
};

export default CommingSoon;
