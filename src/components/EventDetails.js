import "../App.css";

export default function EventDetails({ event }) {
  return <div className="event-detail">{event.detail}</div>;
}
