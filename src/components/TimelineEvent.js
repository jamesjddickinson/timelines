import "../App.css";

export default function TimelineEvent({ event, max, min }) {
  return (
    <div
      className="timeline-event"
      style={{
        position: "absolute",
        color: "white",
        left: `${((event.year - min) / (max - min)) * 100}%`,
      }}
    >
      <div className="connector" />
      <p className="timeline-year">{event.year}</p>
      {/* <p className="timeline-detail">{event.detail}</p> */}
    </div>
  );
}
