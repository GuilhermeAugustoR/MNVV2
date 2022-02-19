import React, { useRef, useState } from "react";
import Calend from "../../Components/Calend";
import { CALENDAR_VIEW } from "kalend-layout";
import { DateTime } from "luxon";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Schedule = () => {
  const kalendRef = useRef();

  const [selectedView, setSelectedView] = useState(CALENDAR_VIEW.MONTH);
  const [selectedDate, setSelectedDate] = useState(
    DateTime.now().toFormat("MM.yyyy")
  );

  const goForward = () => {
    kalendRef?.current?.navigateForward();
  };
  const goBack = () => {
    kalendRef?.current?.navigateBackwards();
  };
  const goToday = () => {
    kalendRef?.current?.navigateToTodayDate();
  };

  const onStateChange = (state) => {
    setSelectedDate(DateTime.fromISO(state.selectedDate).toFormat("MM/yyyy"));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "40rem",
        }}
      >
        <h3 style={{display: "flex",bottom: 0, justifyContent: "center"}}>Agenda MNV</h3>
        <div
          style={{
            backgroundColor: "#000",
            opacity: 0.9,
            borderRadius: 16,
            justifyContent: "center",
            marginTop: 0,
          }}
        >
          <div className={"Calendar__wrapper"}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: 40,
                marginBottom: 16,
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <AiOutlineArrowLeft size={30} onClick={goBack} />
              <div style={{ width: 6 }} />
              <AiOutlineArrowRight size={30} onClick={goForward} />
              <div style={{ width: 6 }} />
              <span
                style={{ color: "white", cursor: "pointer", fontSize: 20 }}
                onClick={goToday}
              >
                Hoje
              </span>
              <div style={{ width: 8 }} />
              <h5 style={{ fontSize: 16, margin: 0, padding: 0 }}>
                {selectedDate}
              </h5>
              <div style={{ width: 20 }} />
              <span
                style={{ color: "white", cursor: "pointer", fontSize: 20 }}
                onClick={() => setSelectedView(CALENDAR_VIEW.WEEK)}
              >
                Semana
              </span>
              <div style={{ width: 8 }} />
              <span
                style={{ color: "white", cursor: "pointer", fontSize: 20 }}
                onClick={() => setSelectedView(CALENDAR_VIEW.MONTH)}
              >
                Mês
              </span>
            </div>
            <Calend
              kalendRef={kalendRef}
              onStateChange={onStateChange}
              selectedView={selectedView}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
