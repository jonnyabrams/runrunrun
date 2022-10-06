import { Card } from "react-bootstrap";
import moment from "moment";

import { Runner } from "../typings";
import { capitalise } from "../helpers";

type Props = {
  runner: Runner;
};

const RunnerCard = ({ runner }: Props) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            {capitalise(runner.firstName)} {capitalise(runner.lastName)}
          </Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            {runner.status}
          </Card.Subtitle>
          <Card.Text>£{(runner.ticketPrice.value / 100).toFixed(2)}</Card.Text>
          <Card.Text>Race: {runner.raceTitle}</Card.Text>
          <Card.Text>Event: {runner.eventTitle}</Card.Text>
          <Card.Text>Event Date: {moment(runner.raceStartDate).format("MMMM Do YYYY h:mm a")}</Card.Text>
          <Card.Link href={`/booking/${runner.id}`}><button>View more information</button></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RunnerCard;
