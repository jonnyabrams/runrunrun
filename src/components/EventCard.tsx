import { Card } from "react-bootstrap";
import moment from "moment";

import { EventType, RaceType, Runner } from "../typings";
import { RunnersState } from "../context/Context";
import { Link } from "react-router-dom";

type Props = {
  event: EventType;
};

const EventCard = ({ event }: Props) => {
  const { runners, races } = RunnersState();

  const totalTakings = runners
    .filter((runner: Runner) => runner.eventTitle === event.title)
    .map((runner: Runner) => runner.ticketPrice.value)
    .reduce((a: number, b: number) => a + b, 0);

  const eventRaces = races.filter((race: RaceType) => race.event === event.title)

  console.log(eventRaces)

  return (
    <div>
      <Card style={{ height: "300px", width: "300px", marginBottom: "20px" }}>
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Subtitle style={{ paddingTop: 15, paddingBottom: 15 }}>
            {moment(event.date).format("MMMM Do YYYY h:mm a")}
          </Card.Subtitle>
          <Card.Text>Total Takings: £{(totalTakings / 100).toFixed(2)}</Card.Text>
          <hr></hr>
          <div className="event_card_races">{eventRaces.map((race: RaceType) => (<Link to={`/race/${race.id}`}><p className="race_link">{race.title}</p></Link>))}</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventCard;
