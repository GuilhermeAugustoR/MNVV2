import React, { useCallback, useState } from "react";
import LogoMNV from "../../assets/LogoMNVBranco.png";
import ContadorGif from "../../assets/gif-contador-4k-azul.gif";
import Timer from "../../Components/Timer";
import style from "./style.css";

const Home = () => {
  const [disable, setDisable] = useState(false);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1800);

  return (
    <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ margin: "auto" }}>
            <h1 style={{ textAlign: "center", margin: "auto" }}>
              SEJA BEM-VINDO!
            </h1>
            <h2 style={{ textAlign: "center", margin: "auto", padding: 20 }}>
              O CULTO JÁ VAI COMEÇAR
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Timer expiryTimestamp={time} />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 2,
              marginTop: 0,
            }}
          >
            <h3 style={{ textAlign: "center", margin: "auto", color: "white" }}>
              APROVEITE ESSE TEMPO PARA:
            </h3>
            <img
              style={{
                width: "46.5rem",
                display: "flex",
                flex: 1,
                alignItems: "center",
                padding: 30,
              }}
              src={ContadorGif}
              alt="gif"
            />
          </div>

          <div style={{ margin: "auto" }}>
            <a href="">
              <img
                style={{ width: "32%", display: "flex", margin: "auto" }}
                src={LogoMNV}
                alt="logo"
              />
            </a>
          </div>
        </div>
    </>
  );
};

export default Home;
