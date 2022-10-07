import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { RunnersState } from "../context/Context";
import { EventType, OrganiserType } from "../typings";
import EventCard from "../components/EventCard";

const Organiser = () => {
  const { id } = useParams();
  const { organisers, events } = RunnersState();

  const organiser = organisers.find(
    (org: OrganiserType) => org.id === parseInt(id!)
  );

  const organiserEvents = events.filter(
    (event: EventType) => event.organiserId === organiser.id
  );

  return (
    <div className="organiser_container">
      <h1>Hello, {organiser?.title || <CircularProgress size={25} />}!</h1>
      <h2>Your Events:</h2>
      <div className="events_container">
        {organiserEvents.map((event: EventType) => (
          <EventCard event={event} />
        ))}
      </div>
    </div>
  );
};

export default Organiser;
