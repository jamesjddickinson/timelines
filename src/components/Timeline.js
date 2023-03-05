import "../App.css";
import TimelineEvent from "./TimelineEvent";
import EventDetails from "./EventDetails";
import { timelineData } from "../data/timelineData";
import React, { useState, useEffect } from "react";

export default function Timeline() {
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMinMax();
  }, []);

  function getMinMax() {
    setMax(Math.max(...timelineData.map((event) => event.year)));
    setMin(Math.min(...timelineData.map((event) => event.year)));
    setLoaded(true);
  }

  function getEvents() {
    if (loaded) {
      return timelineData.map((data, key) => {
        return <TimelineEvent key={key} event={data} max={max} min={min} />;
      });
    }
    return null;
  }

  return (
    <>
      <div className="timeline-container">
        <div className="timeline" />
        {getEvents()}
      </div>
      <EventDetails event={timelineData[0]} />
    </>
  );
}
