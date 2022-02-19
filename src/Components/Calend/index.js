import React, { useEffect, useState } from "react";
import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css";
import events from "./events";

const Calend = (props) => {

  return (
    <div style={{ width: '100%', height: '36rem', overflow: 'auto' }}>
      <Kalend
      style={{
        primaryColor: '#fff',
      }}
        kalendRef={props.kalendRef}
        initialView={CalendarView.WEEK}
        events={events}
        // initialDate={new Date().toISOString()}
        // hourHeight={60}
        onStateChange={props.onStateChange}
        selectedView={props.selectedView}
      />
    </div>
  );
};

export default Calend;
