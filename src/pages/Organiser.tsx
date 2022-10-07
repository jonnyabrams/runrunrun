import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { RunnersState } from "../context/Context";
import { EventType, OrganiserType, Runner } from "../typings";
import EventCard from "../components/EventCard";

const Organiser = () => {
  const { id } = useParams();
  const { organisers, events, runners, error } = RunnersState();

  const organiser = organisers.find(
    (org: OrganiserType) => org.id === parseInt(id!)
  );

  const organiserEvents = events.filter(
    (event: EventType) => event.organiserId === organiser.id
  );

  const overallTakings = runners
    .filter((runner: Runner) => runner.organiserTitle === organiser.title)
    .map((runner: Runner) => runner.ticketPrice.value)
    .reduce((a: number, b: number) => a + b, 0);

  if (error) return error.message;

  return (
    <div className="organiser_container">
      <h1>Hello, {organiser?.title || <CircularProgress size={25} />}!</h1>
      <h2>Your Overall Takings: £{(overallTakings / 100).toFixed(2)}</h2>
      <h3>Your Events...</h3>
      <div className="events_container">
        {organiserEvents.map((event: EventType) => (
          <EventCard event={event} />
        ))}
      </div>
    </div>
  );
};

export default Organiser;
